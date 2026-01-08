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
import { Upload, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Vehicle Wrap",
  "Fleet Graphics",
  "Wall Wrap / Mural",
  "Window Graphics",
  "Stickers / Decals",
  "Business Signs",
  "Other",
];

// Zapier webhook URL - replace with your actual webhook URL
const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID";

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const { toast } = useToast();

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    deadline: "",
    notes: "",
    contactMethod: "email",
    // Sign-specific fields
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData,
      projectType,
      fileCount: files?.length || 0,
      fileNames: files ? Array.from(files).map((f) => f.name).join(", ") : "",
      submittedAt: new Date().toISOString(),
      source: window.location.origin,
    };

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Required for Zapier webhooks
        body: JSON.stringify(payload),
      });

      // With no-cors, we can't read the response, but the request was sent
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your request. Please try calling us instead.",
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
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="business">Business Name (optional)</Label>
          <Input
            id="business"
            placeholder="Your business name"
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

      {/* Conditional fields for Signs */}
      {isSignProject && (
        <div className="space-y-6 p-6 bg-muted rounded-lg animate-fade-in">
          <h4 className="font-semibold text-foreground">Sign Details</h4>

          <div className="space-y-2">
            <Label htmlFor="installAddress">Installation Address</Label>
            <Input
              id="installAddress"
              placeholder="Where will the sign be installed?"
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
          value={formData.notes}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="files">Upload Files (optional)</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
          <input
            id="files"
            type="file"
            multiple
            accept="image/*,.pdf,.ai,.psd,.eps"
            className="hidden"
            onChange={(e) => setFiles(e.target.files)}
          />
          <label htmlFor="files" className="cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {files && files.length > 0
                ? `${files.length} file(s) selected`
                : "Upload logos, inspiration images, photos, or measurements"}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Accepts: Images, PDF, AI, PSD, EPS
            </p>
          </label>
        </div>
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
