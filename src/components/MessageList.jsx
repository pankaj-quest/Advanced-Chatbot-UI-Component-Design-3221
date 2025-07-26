import React from 'react';
import Message from './Message';
import { motion } from 'framer-motion';

const MessageList = ({ messages, isTyping, botAvatar, messagesEndRef }) => {
  // Format timestamp to display time
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex-1 p-3 overflow-y-auto custom-scrollbar bg-secondary-50">
      <div className="space-y-3">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Message
              text={message.text}
              sender={message.sender}
              timestamp={formatTime(message.timestamp)}
              avatar={message.sender === 'bot' ? botAvatar : null}
            />
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start space-x-2 max-w-[80%]">
              {botAvatar ? (
                <img src={botAvatar} alt="Bot" className="w-8 h-8 rounded-full mt-1" />
              ) : (
                <div className="w-8 h-8 bg-primary-600 rounded-full mt-1 flex items-center justify-center text-white text-xs">
                  Bot
                </div>
              )}
              <div className="bg-white p-3 rounded-lg shadow-message">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-typing"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;