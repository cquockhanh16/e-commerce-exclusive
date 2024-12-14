import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span>/</span>
          <span className="text-gray-900">Contact</span>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left - Contact Info */}
          <div className="w-full md:w-1/3 space-y-8">
            {/* Call Us Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold">Call To Us</h2>
              </div>
              <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-600">Phone: +8801611112222</p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Write To Us Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold">Write To US</h2>
              </div>
              <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-600 mb-1">Emails: customer@exclusive.com</p>
              <p className="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="8"
                className="w-full px-4 py-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;