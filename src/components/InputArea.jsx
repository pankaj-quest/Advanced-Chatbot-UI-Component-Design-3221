import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiSend, FiPaperclip, FiSmile } from 'react-icons/fi';
import { motion } from 'framer-motion';

const InputArea = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-secondary-200 p-3 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full p-3 pr-10 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none min-h-[50px] max-h-[120px]"
            rows={1}
          />
          <div className="absolute bottom-2 right-2 flex space-x-1">
            <button 
              type="button" 
              className="text-secondary-400 hover:text-secondary-600 p-1"
              aria-label="Attach file"
            >
              <SafeIcon icon={FiPaperclip} className="text-lg" />
            </button>
            <button 
              type="button" 
              className="text-secondary-400 hover:text-secondary-600 p-1"
              aria-label="Insert emoji"
            >
              <SafeIcon icon={FiSmile} className="text-lg" />
            </button>
          </div>
        </div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className={`p-3 rounded-full ${
            message.trim() 
              ? 'bg-primary-600 hover:bg-primary-700 text-white' 
              : 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
          } transition-colors focus:outline-none`}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <SafeIcon icon={FiSend} className="text-lg" />
        </motion.button>
      </form>
    </div>
  );
};

export default InputArea;