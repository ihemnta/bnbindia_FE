import React, { useState } from 'react';
import CustomInput from '../Custom/CustomInput';

const SubscribeNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add your subscribe logic here
    console.log(`Subscribed with email: ${email}`);
    // You can send the email to your backend for further processing
  };

  return (
    <div className="bg-transparent  flex items-center gap-2">
 
      <div className="flex items-center">
        <CustomInput
        label='Subscribe to our newsletter to stay connected'
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
