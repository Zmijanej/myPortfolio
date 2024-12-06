'use client'
import React, { RefObject, useState } from 'react'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Link from 'next/link';
import FollowAlong from './FollowAlong';
import { useTransform,motion, useMotionValue } from 'framer-motion';


// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}


const Footer:React.FC<FooterProps> = ({ footerRef }) => {
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
      ref={footerRef}
      className={` py-16 px-6 md:px-12 flex flex-wrap flex-col md:flex-row items-center justify-between `}
    >
      {/* Get in Touch Text Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left opacity-100 z-[100]">
        <h2 className=" text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg max-w-full">
          Have a project in mind? Want to collaborate? 
          I&apos;m always open to interesting opportunities 
          and conversations. Drop me a message!
        </p>

      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 max-w-md opacity-100 z-[100]">
        <form 
          onSubmit={handleSubmit}
          className={`p-8 rounded-xl space-y-6`}
        >
          <div>
            <label 
              htmlFor="name" 
              className="block text-base mb-2"
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
              className="w-full border border-[#48cfcb]/70  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white/30 duration-150               
              text-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-base mb-2"
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
              className="w-full border border-[#48cfcb]/70 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white/30
              text-black"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-base mb-2"
            >
              How Can I Help?
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none w-full border border-[#48cfcb]/70 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white/30
              text-black"
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
  className="btn w-full py-3 rounded-md font-semibold flex items-center justify-center space-x-2 border border-[#48cfcb]/70
  hover:bg-[#48cfcb] duration-300"
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
      
      <div className='z-[100]'>
      <h2 className=" text-4xl md:text-5xl font-bold py-6">
          Follow Along
        </h2>
        <div className="flex flex-row gap-6 justify-center md:justify-start">
          <Link
          href={'https://www.instagram.com/brendzmijanej/'}
          className=''
          >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 border-4 p-4 hover:scale-125 duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
          </Link>
          
          <Link
          href={'https://www.linkedin.com/in/brend-zmijanej/'}
          >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 border-4 p-4 hover:scale-125 duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
          </Link>
          <Link
          href={'https://github.com/Zmijanej'}
          rel="noopener noreferrer"
          >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 border-4 p-4 hover:scale-125 duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
        >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        
      </svg>
          </Link>
          
        </div>
        <div className='pt-10'>© 2024 Brend Zmijanej</div>
        
      </div>
      <FollowAlong/>
    </footer>
  );
};

export default Footer;



