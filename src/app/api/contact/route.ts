import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

// Validation function
function validateFormData(data: any): data is ContactFormData {
  const required = ['name', 'email', 'service', 'message'];
  
  for (const field of required) {
    if (!data[field] || typeof data[field] !== 'string' || data[field].trim() === '') {
      return false;
    }
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return false;
  }
  
  return true;
}

// Sanitize input
function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Limit length and trim whitespace
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check all required fields.' },
        { status: 400 }
      );
    }
    
    // Sanitize data
    const formData: ContactFormData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone || ''),
      company: sanitizeInput(body.company || ''),
      service: sanitizeInput(body.service),
      budget: sanitizeInput(body.budget || ''),
      timeline: sanitizeInput(body.timeline || ''),
      message: sanitizeInput(body.message),
    };
    
    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM system
    // 4. Add to a mailing list
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...formData
    });
    
    // Simulate email sending (replace with actual email service)
    const emailContent = `
Nieuwe contactaanvraag van LA Webdesign website:

Naam: ${formData.name}
Email: ${formData.email}
Telefoon: ${formData.phone || 'Niet opgegeven'}
Bedrijf: ${formData.company || 'Niet opgegeven'}
Service: ${formData.service}
Budget: ${formData.budget || 'Niet opgegeven'}
Timeline: ${formData.timeline || 'Niet opgegeven'}

Bericht:
${formData.message}

---
Verzonden op: ${new Date().toLocaleString('nl-NL')}
    `;
    
    // TODO: Replace with actual email sending logic
    // Example with Resend:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'website@lawebdesign.nl',
      to: 'info@lawebdesign.nl',
      subject: `Nieuwe contactaanvraag van ${formData.name}`,
      text: emailContent,
    });
    */
    
    // Return success response
    return NextResponse.json(
      { 
        message: 'Bericht succesvol verzonden. We nemen binnen 24 uur contact met je op.',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verzenden van je bericht. Probeer het opnieuw.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
