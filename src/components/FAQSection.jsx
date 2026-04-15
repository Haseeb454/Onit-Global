import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Onit Global?",
      answer: "Onit Global is a cutting-edge technology solutions provider dedicated to empowering businesses through innovation, scalable infrastructure, and strategic digital transformation."
    },
    {
      question: "What services does Onit Global offer?",
      answer: "We offer a comprehensive suite of services including Web Development, Mobile App solutions, Cloud Infrastructure, E-commerce strategy, and Corporate Visual Branding."
    },
    {
      question: "How advanced is Onit Global's technology?",
      answer: "We utilize the latest industry-standard stacks like MERN, specialized AI integrations, and high-performance cloud environments to ensure your business stays ahead of the curve."
    },
    {
      question: "Is Onit Global suitable for small and large businesses?",
      answer: "Yes, our solutions are architected for scalability, making them equally effective for local startups in Gujranwala or large-scale corporate enterprises."
    },
    {
      question: "Can I see Onit Global's solutions in action?",
      answer: "Absolutely. You can explore our 'All Projects' section to see case studies of our work in e-commerce, web development, and mobile applications."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 font-sans selection:bg-pink-100">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="bg-gray-100 text-primary text-[15px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
          FAQ
        </span>
        <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Frequently Asked <span className="text-[#b0336b]">Questions</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          We're happy to answer your questions
        </p>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-100">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-100">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-[#b0336b]' : 'text-[#0f172a]'}`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#b0336b] rotate-45' : 'group-hover:bg-gray-200'}`}>
                <Plus size={20} className={openIndex === index ? 'text-white' : 'text-gray-500'} />
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-500 leading-relaxed text-[15px] md:text-base pr-12">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;