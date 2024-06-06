import React, { useState } from 'react';
import axios from 'axios';

interface ContactFormProps {
  onSubmit: (name: string, email: string, message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // Replace with access key retrieval logic
        name,
        email,
        message,
      });

      console.log('Form submission response:', response.data);
      setName('');
      setEmail('');
      setMessage('');
      onSubmit('Form submitted successfully!'); // Pass success message to parent component
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form padd-15" onSubmit={handleSubmit}>
      {/* ... form fields and submit button ... */}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ContactForm;
