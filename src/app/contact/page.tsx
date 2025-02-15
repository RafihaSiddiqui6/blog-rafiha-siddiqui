import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="text-blue-700 hover:text-blue-300">Contact with us</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
        Have questions or want to get in touch? We  love to hear from you. Fill
        out the form below or use the contact information provided.
      </p>

      <div className="w-full max-w-2xl flex flex-col-reverse gap-4">
        {/* Contact Form */}
        <div className="bg-gray-200 dark:bg-blue-200 p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-blue-800 bg-white dark:bg-white text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-blue-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-blue-800 bg-white dark:bg-white text-gray-900 dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-blue-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-md border border-white dark:border-blue-800 bg-white dark:bg-white text-gray-900 dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
