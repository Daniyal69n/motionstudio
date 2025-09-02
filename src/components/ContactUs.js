'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactUs() {
  const letsTextRef = useRef(null);
  const connectTextRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your EmailJS credentials
      const serviceID = 'service_utxdciv';
      const templateID = 'template_tnps9p3';
      const publicKey = '86jet4eyLDP_AnWdC';

      // EmailJS send function (you'll need to include EmailJS script)
      const response = await window.emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not specified',
          project_type: formData.project,
          message: formData.message,
          to_email: 'motion.studioteams@gmail.com'
        },
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const projectTypes = [
    'Business Website',
    'E-commerce Store',
    'Landing Page',
    'Web Application',
    'Website Redesign',
    'Other'
  ];

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init('86jet4eyLDP_AnWdC'); // Replace with your public key
    };
    document.head.appendChild(script);

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Create animation for "LET'S" text coming from left
    gsap.fromTo(letsTextRef.current, 
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: letsTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );
    
    // Create animation for "CONNECT" text coming from right
    gsap.fromTo(connectTextRef.current,
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: connectTextRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Cleanup EmailJS script
      const scripts = document.querySelectorAll('script[src*="emailjs"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <section className="contact-us bg-black text-white min-h-screen py-20 mx-8 mb-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold leading-none">
              <span ref={letsTextRef} className="block">LET'S</span>
              <span ref={connectTextRef} className="block">CONNECT</span>
            </h2>
          </div>
          <div className="w-full lg:w-auto lg:max-w-md text-right">
            <p className="text-white text-sm font-light uppercase tracking-wide leading-relaxed">
              READY TO BUILD YOUR WEBSITE?<br />
              LET'S DISCUSS YOUR WEB DEVELOPMENT<br />
              PROJECT AND CREATE SOMETHING AMAZING
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white mb-16"></div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-3xl mb-6">GET IN TOUCH</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Email</p>
                    <p className="text-white text-lg">motion.studioteams@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 3L12 9L3.5 3C3 3 2.5 3.5 2.5 4V20C2.5 20.5 3 21 3.5 21H20.5C21 21 21.5 20.5 21.5 20V4C21.5 3.5 21 3 20.5 3zM19.5 19H4.5V5.5L12 11L19.5 5.5V19z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Services</p>
                    <p className="text-white text-lg">Full-Stack Web Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Response Time</p>
                    <p className="text-white text-lg">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-500 bg-opacity-20 border border-green-500 text-green-400 px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-500 bg-opacity-20 border border-red-500 text-red-400 px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-100 border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Tell me about your web development project, goals, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 transition-all duration-200 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    const svg = e.target.querySelector('svg');
                    if (svg) svg.style.transform = 'rotate(45deg)';
                  }
                }}
                onMouseLeave={(e) => {
                  const svg = e.target.querySelector('svg');
                  if (svg) svg.style.transform = 'rotate(0deg)';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg 
                  className="w-5 h-5" 
                  style={{ transition: 'transform 0.3s ease' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}