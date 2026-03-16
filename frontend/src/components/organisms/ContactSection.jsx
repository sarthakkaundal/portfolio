import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electricPurple/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-neonBlue font-mono mb-4">06. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <ContactForm />
      </motion.div>
    </section>
  );
};

export default ContactSection;
