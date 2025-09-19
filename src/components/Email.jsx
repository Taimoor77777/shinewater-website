import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    console.log('Email submitted:', email);
    // Handle email submission here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 pr-12"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          
          {/* Arrow Button */}
          <button
            onClick={handleSubmit}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
          >
            <svg 
              className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;