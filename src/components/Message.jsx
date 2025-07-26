import React from 'react';

const Message = ({ text, sender, timestamp, avatar }) => {
  const isBot = sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'items-start' : 'items-start justify-end'} mb-4`}>
      {isBot && (
        <>
          {avatar ? (
            <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full mt-1 mr-2" />
          ) : (
            <div className="w-8 h-8 bg-primary-600 rounded-full mt-1 mr-2 flex items-center justify-center text-white text-xs">
              Bot
            </div>
          )}
        </>
      )}
      
      <div className={`max-w-[80%] ${isBot ? '' : 'order-1'}`}>
        <div className={`p-3 rounded-lg shadow-message ${
          isBot 
            ? 'bg-white text-secondary-800' 
            : 'bg-primary-600 text-white'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{text}</p>
        </div>
        <div className={`text-xs text-secondary-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
          {timestamp}
        </div>
      </div>
      
      {!isBot && (
        <div className="w-8 h-8 bg-secondary-400 rounded-full mt-1 ml-2 flex items-center justify-center text-white text-xs">
          You
        </div>
      )}
    </div>
  );
};

export default Message;