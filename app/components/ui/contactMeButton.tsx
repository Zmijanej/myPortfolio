import React from 'react';

const ContactButton = ({ 
  email = 'your-email@example.com', 
  subject = 'Contact Request', 
  body = 'Hello, I would like to get in touch with you.' 
}) => {
  const handleContactClick = () => {
    // Encode the subject and body for use in the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default mail client
    window.location.href = mailtoLink;
  };

  return (
    <button 
      onClick={handleContactClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 z-[100]"
    >
      Contact Me
    </button>
  );
};

export default ContactButton;