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
    <form onSubmit={handleSubmit} className="p-8 lg:p-12 flex flex-col gap-6 w-full max-w-xl mx-auto">
      <h3 className="text-3xl font-extrabold text-foreground mb-2">Send a Message</h3>
      
      {status.message && (
        <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
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
      
      <Button type="submit" variant="primary" disabled={loading} className="mt-4">
        {loading ? 'Sending...' : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
