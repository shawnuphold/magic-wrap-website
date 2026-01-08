import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  business?: string;
  projectType: string;
  deadline?: string;
  notes?: string;
  preferredContact: string;
  signAddress?: string;
  illuminated?: string;
  mountType?: string;
  approxSize?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteRequest = await req.json();
    console.log("Received quote request:", JSON.stringify(data, null, 2));

    // Validate required fields
    if (!data.name || !data.projectType) {
      return new Response(
        JSON.stringify({ error: "Name and project type are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!data.phone && !data.email) {
      return new Response(
        JSON.stringify({ error: "Either phone or email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get SMTP config from environment
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Number(Deno.env.get("SMTP_PORT") || "587");
    // SMTP_SECURE: "true" = implicit TLS (port 465), "false" = STARTTLS (port 587)
    const smtpSecure = Deno.env.get("SMTP_SECURE") === "true";
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");
    const smtpFrom = Deno.env.get("SMTP_FROM");
    const smtpTo = Deno.env.get("SMTP_TO");

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
      console.error("Missing SMTP configuration");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`SMTP Config: host=${smtpHost}, port=${smtpPort}, secure=${smtpSecure}`);

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Build email HTML
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #1a1a1a; border-bottom: 2px solid #e63946; padding-bottom: 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; }
    .section { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚗 New Quote Request – Magic Shine Wraps</h1>
    
    <div class="section">
      <h2>Contact Information</h2>
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${data.phone || "Not provided"}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.email || "Not provided"}</div>
      </div>
      ${data.business ? `
      <div class="field">
        <div class="label">Business:</div>
        <div class="value">${data.business}</div>
      </div>` : ""}
      <div class="field">
        <div class="label">Preferred Contact:</div>
        <div class="value">${data.preferredContact}</div>
      </div>
    </div>

    <div class="section">
      <h2>Project Details</h2>
      <div class="field">
        <div class="label">Project Type:</div>
        <div class="value">${data.projectType}</div>
      </div>
      ${data.deadline ? `
      <div class="field">
        <div class="label">Deadline:</div>
        <div class="value">${data.deadline}</div>
      </div>` : ""}
      ${data.notes ? `
      <div class="field">
        <div class="label">Notes:</div>
        <div class="value">${data.notes}</div>
      </div>` : ""}
    </div>

    ${data.projectType === "Business Signs" ? `
    <div class="section">
      <h2>Sign Details</h2>
      ${data.signAddress ? `
      <div class="field">
        <div class="label">Installation Address:</div>
        <div class="value">${data.signAddress}</div>
      </div>` : ""}
      ${data.illuminated ? `
      <div class="field">
        <div class="label">Illuminated:</div>
        <div class="value">${data.illuminated}</div>
      </div>` : ""}
      ${data.mountType ? `
      <div class="field">
        <div class="label">Mount Type:</div>
        <div class="value">${data.mountType}</div>
      </div>` : ""}
      ${data.approxSize ? `
      <div class="field">
        <div class="label">Approximate Size:</div>
        <div class="value">${data.approxSize}</div>
      </div>` : ""}
    </div>` : ""}

    <div class="footer">
      <p>Submitted: ${timestamp}</p>
      <p>This quote request was submitted through the Magic Shine Wraps website.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const textBody = `
New Quote Request – Magic Shine Wraps
======================================

CONTACT INFORMATION
-------------------
Name: ${data.name}
Phone: ${data.phone || "Not provided"}
Email: ${data.email || "Not provided"}
${data.business ? `Business: ${data.business}` : ""}
Preferred Contact: ${data.preferredContact}

PROJECT DETAILS
---------------
Project Type: ${data.projectType}
${data.deadline ? `Deadline: ${data.deadline}` : ""}
${data.notes ? `Notes: ${data.notes}` : ""}

${data.projectType === "Business Signs" ? `
SIGN DETAILS
------------
${data.signAddress ? `Installation Address: ${data.signAddress}` : ""}
${data.illuminated ? `Illuminated: ${data.illuminated}` : ""}
${data.mountType ? `Mount Type: ${data.mountType}` : ""}
${data.approxSize ? `Approximate Size: ${data.approxSize}` : ""}
` : ""}

Submitted: ${timestamp}
    `;

    // Create SMTP client - for port 587, use tls: false initially (STARTTLS will upgrade)
    // For port 465, use tls: true (implicit TLS)
    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: smtpSecure,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    console.log(`Connecting to SMTP server ${smtpHost}:${smtpPort} (tls=${smtpSecure})`);

    // Send email
    await client.send({
      from: smtpFrom,
      to: smtpTo,
      replyTo: data.email || undefined,
      subject: `New Quote Request – Magic Shine Wraps`,
      content: textBody,
      html: htmlBody,
    });

    await client.close();
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send quote request" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
