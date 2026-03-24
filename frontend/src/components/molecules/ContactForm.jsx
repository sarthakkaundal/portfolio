import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Send } from 'lucide-react';
import api from '../../services/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await api.post('/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="retro-card-large bg-white p-8 lg:p-12 flex flex-col gap-6 w-full max-w-xl mx-auto shadow-[8px_8px_0_var(--text-dark)]">
      <h3 className="text-3xl font-black font-display uppercase tracking-tight text-text-dark border-b-4 border-text-dark pb-3 inline-block self-start mb-2">Send a Message</h3>
      
      {status.message && (
        <div className={`p-4 rounded-xl border-2 font-bold font-display ${status.type === 'success' ? 'bg-accent-green text-white border-text-dark shadow-[2px_2px_0_var(--text-dark)]' : 'bg-accent-coral text-white border-text-dark shadow-[2px_2px_0_var(--text-dark)]'}`}>
          {status.message}
        </div>
      )}

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
        required
      />
      <Input
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Let's work together!"
        isTextArea
        required
      />
      
      <Button type="submit" variant="primary" disabled={loading} className="mt-4 w-full text-lg justify-center py-4 bg-accent-blue font-black border-[3px]">
        {loading ? 'Sending...' : (
          <>
            Send Message <Send size={20} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
