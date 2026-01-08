import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const projectTypes = [
  "Vehicle Wrap",
  "Fleet Graphics",
  "Wall Wrap / Mural",
  "Window Graphics",
  "Stickers / Decals",
  "Business Signs",
  "Other",
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    deadline: "",
    notes: "",
    contactMethod: "email",
    installAddress: "",
    illuminated: "",
    mountType: "",
    signSize: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      business: "",
      deadline: "",
      notes: "",
      contactMethod: "email",
      installAddress: "",
      illuminated: "",
      mountType: "",
      signSize: "",
    });
    setProjectType("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      business: formData.business.trim(),
      projectType,
      deadline: formData.deadline,
      notes: formData.notes.trim(),
      preferredContact: formData.contactMethod,
      signAddress: formData.installAddress.trim(),
      illuminated: formData.illuminated,
      mountType: formData.mountType,
      approxSize: formData.signSize.trim(),
    };

    try {
      const { data, error } = await supabase.functions.invoke("send-quote-email", {
        body: payload,
      });

      if (error) {
        throw new Error(error.message || "Failed to send request");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setIsSubmitted(true);
      resetForm();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: error.message || "There was a problem sending your request. Please try calling us instead.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isSignProject = projectType === "Business Signs";

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-scale-in">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your request and will respond ASAP.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            maxLength={100}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            required
            maxLength={20}
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            maxLength={255}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="business">Business Name (optional)</Label>
          <Input
            id="business"
            placeholder="Your business name"
            maxLength={100}
            value={formData.business}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type *</Label>
        <Select value={projectType} onValueChange={setProjectType} required>
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isSignProject && (
        <div className="space-y-6 p-6 bg-muted rounded-lg animate-fade-in">
          <h4 className="font-semibold text-foreground">Sign Details</h4>

          <div className="space-y-2">
            <Label htmlFor="installAddress">Installation Address</Label>
            <Input
              id="installAddress"
              placeholder="Where will the sign be installed?"
              maxLength={255}
              value={formData.installAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="illuminated">Illuminated?</Label>
              <Select
                value={formData.illuminated}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, illuminated: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mountType">Mount Type</Label>
              <Select
                value={formData.mountType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, mountType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mount type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="storefront">Storefront</SelectItem>
                  <SelectItem value="interior">Interior Wall</SelectItem>
                  <SelectItem value="freestanding">Freestanding</SelectItem>
                  <SelectItem value="unsure">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="signSize">Approximate Size</Label>
            <Input
              id="signSize"
              placeholder="e.g., 4ft x 8ft, or 'not sure'"
              maxLength={50}
              value={formData.signSize}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="deadline">Deadline (optional)</Label>
        <Input
          id="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Project Details</Label>
        <Textarea
          id="notes"
          placeholder="Tell us about your project, goals, and any specific requirements..."
          rows={4}
          maxLength={2000}
          value={formData.notes}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="call"
              className="text-primary"
              checked={formData.contactMethod === "call"}
              onChange={handleInputChange}
            />
            <span className="text-sm">Call</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="text"
              className="text-primary"
              checked={formData.contactMethod === "text"}
              onChange={handleInputChange}
            />
            <span className="text-sm">Text</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              className="text-primary"
              checked={formData.contactMethod === "email"}
              onChange={handleInputChange}
            />
            <span className="text-sm">Email</span>
          </label>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full font-semibold" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
