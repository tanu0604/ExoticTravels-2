import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // ✅ added for notifications

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loading

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_x87ubee",
          "template_tdx41am",
          formRef.current,
          "Uzdhj7xCu17hCqdw7"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success(
              "🎉 Thank you for your inquiry! We’ll reply within 24 hours."
            );
            setFormData({
              name: "",
              email: "",
              phone: "",
              destination: "",
              travelDates: "",
              message: "",
            });
          },
          (error) => {
            console.error(error.text);
            toast.error("❌ Failed to send your message. Please try again.");
          }
        )
        .finally(() => setLoading(false)); // stop loading
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            fontWeight: "500",
            fontSize: "14px",
          },
        }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 font-serif tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-200 font-light">
              Ready to plan your dream vacation? Get in touch with our travel
              experts today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Send us a Message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {" "}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  >
                    <option value="">Select a destination</option>
                    <option value="goa">Goa</option>
                    <option value="kerala">Kerala</option>
                    <option value="manali">Manali</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="andaman">Andaman</option>
                    <option value="bali">Bali</option>
                    <option value="maldives">Maldives</option>
                    <option value="dubai">Dubai</option>
                    <option value="paris">Paris</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="travelDates"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Travel Dates
                  </label>
                  <input
                    type="text"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    placeholder="e.g., December 2024"
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your travel preferences, budget, or any special requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-bold border-2 border-yellow-300 transition-colors flex items-center justify-center space-x-2 ${
                    loading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:from-yellow-500 hover:to-yellow-700"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Our Office
                      </h3>
                      <p className="text-gray-700">
                        GD-36, 1312 Rajdanga Main Road Behind Mahasweta Devi
                        Shangraha Shala Rashbehari Avenue Connector,
                        <br />
                        Kolkata, West Bengal 700107
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">
                        +91 90880 19480
                        <br />
                        +91 80166 05108{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">
                        contact.exotictravels@gmail.com
                        <br />
                        support.exotictravels@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-700">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                  Quick Actions
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors border border-yellow-100"
                  >
                    <Phone className="h-5 w-5 text-yellow-600" />
                    <span className="text-yellow-700 font-medium">
                      Call Now
                    </span>
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-100"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">
                      WhatsApp Us
                    </span>
                  </a>

                  <a
                    href="mailto:info@exotictravels.com"
                    className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700 font-medium">Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-[#fffbe6] via-[#fef9c3] to-[#fef3c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Visit Our Office
            </h2>
            <p className="text-gray-700">
              Located in the heart of Kolkata, Park Street
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 border-4 border-yellow-100 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0948736935893!2d88.35175731498124!3d22.574148785178543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa3e4d1f9d%3A0x2b5e1b2a2b5e1b2a!2sPark%20Street%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1647853647789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Exotic Travels Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
