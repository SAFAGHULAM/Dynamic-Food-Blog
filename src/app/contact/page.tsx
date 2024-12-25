import Image from 'next/image';

export default function ContactPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
  
        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-4">
              Have a question, suggestion, or just want to say hi? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
  
          {/* Contact Information Section */}
          <div className="w-full lg:w-1/2 text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-lg">
              For any inquiries or collaborations, feel free to reach out to us via the contact form above, or you can email us directly at:
            </p>
            <p className="text-lg font-semibold">
              <a href="mailto:contact@tastybites.com" className="text-gray-900 hover:text-gray-600">
                contact@tastybites.com
              </a>
            </p>
  
            {/* Social Media Links */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-6 mt-2">
                <a href="https://twitter.com" target="_blank" className="text-gray-700 hover:text-gray-900">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" className="text-gray-700 hover:text-gray-900">
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" className="text-gray-700 hover:text-gray-900">
                  Facebook
                </a>
              </div>
            </div>
            {/* Image Section */}
          <div className="mt-8 text-center">
            <Image
              src="/images/contact.jpg"
              alt="Contact Us"
              width={580}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
  