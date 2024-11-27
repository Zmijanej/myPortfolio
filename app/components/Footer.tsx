'use client'
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}


const Footer = () => {
  // Use the FormData interface for type definition
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Type the event for input and textarea changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Type the form submission event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!formData.email.includes('@')) {
      setStatus('Please provide a valid email address.');
      return;
    }
  
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus('All fields are required.');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  // Check if all environment variables are provided
  if (!serviceId || !templateId || !publicKey) {
    setStatus('Missing configuration. Please check your environment variables.');
    console.error('Missing EmailJS configuration: serviceId, templateId, or publicKey.');
    return;
  }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await emailjs.send(
        serviceId, 
        templateId, 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        publicKey
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      let errorMessage = 'Failed to send message. Please try again.';
  
  // Check if the error is an instance of Error
  if (error instanceof Error) {
    errorMessage = `Failed to send message. Error: ${error.message}`;
  } else if (typeof error === 'object' && error && 'text' in error) {
    // If error is an object and has a 'text' property
    errorMessage = `Failed to send message. Error: ${(error as { text: string }).text}`;
  }

  setStatus(errorMessage);
  console.error('Email send error:', error);
    }
  };

  return (
    <footer 
      id="Footer"
      className="bg-black text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Get in Touch Text Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-white/70 max-w-md">
          Have a project in mind? Want to collaborate? 
          I&apos;m always open to interesting opportunities 
          and conversations. Drop me a message!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 max-w-md">
        <form 
          onSubmit={handleSubmit}
          className="bg-white/10 p-8 rounded-xl space-y-6"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm mb-2 text-white/70"
            >
              Name
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm mb-2 text-white/70"
            >
              Email
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm mb-2 text-white/70"
            >
              How Can I Help?
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Tell me about your project or opportunity"
            />
          </div>

          {status && (
            <div className={`
              text-center py-2 rounded-md
              ${status.includes('successfully') 
                ? 'text-green-500' 
                : 'text-red-500'}
            `}>
              {status}
            </div>
          )}

<button
  type="submit"
  className="w-full bg-white text-black py-3 rounded-md font-semibold flex items-center justify-center space-x-2"
  disabled={status === 'Sending...'}
>
  {status === 'Sending...' ? (
    <span>Sending...</span>
  ) : (
    <>
      <Send size={20} />
      <span>Send Message</span>
    </>
  )}
</button>

        </form>
      </div>
    </footer>
  );
};

export default Footer;