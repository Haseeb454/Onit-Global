import React, { useState } from 'react'; // added useState for real logic
import { Mail } from 'lucide-react';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const ContactSection = () => {
  // Real Form State Management
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Real submission logic placeholder
    console.log("Form Submitted Successfully:", formData);
    alert("Thank you! Your message has been sent.");
    // Clear form after submit
    setFormData({ fullName: '', company: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#1C1D1F] flex items-center justify-center p-6 md:p-20 font-sans selection:bg-pink-500 selection:text-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 pt-8">
          <span className="text-[#e91e63] font-bold text-xs tracking-widest uppercase">
            *Drop us a line*
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Connect with Onit
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            Ready to take the first step towards unlocking opportunities, realizing goals, and embracing innovation? We're here and eager to connect.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="w-5 h-8 border-2 border-[#e91e63] rounded-sm relative">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#e91e63] rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">For More Inquiry</p>
                <p className="text-white font-bold text-lg">+92 (328) 80-150-00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#e91e63]">
                <Mail size={24} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">To Send Mail</p>
                <p className="text-white font-bold text-lg lowercase">info@onitsol.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">
              Social Just You Connected Us!
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="w-full md:w-1/2 bg-[#fdf8ff] rounded-xl p-8 md:p-12 shadow-2xl relative bottom-40">
          <h2 className="text-[#0f0f0f] text-2xl font-bold mb-8">
            Your Success Starts Here!
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-medium">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-medium">Company / Organization *</label>
                <input 
                  type="text" 
                  name="company"
                  required 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-medium">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92..."
                  className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700 font-medium">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700 font-medium">Your Subject *</label>
              <input 
                type="text" 
                name="subject"
                required 
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700 font-medium">Message *</label>
              <textarea 
                name="message"
                rows={4} 
                required 
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none focus:border-[#e91e63] transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="px-10 py-4 bg-gradient-to-r from-[#7b337d] to-[#e91e63] text-white font-bold rounded-lg hover:opacity-90 transition-opacity active:scale-95 shadow-lg">
              Submit Now
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;