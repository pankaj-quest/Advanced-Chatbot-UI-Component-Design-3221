import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import InputArea from './InputArea';
import ThemeProvider from './ThemeProvider';

const ChatBot = ({ 
  theme = 'primary', 
  botName = 'Assistant', 
  botAvatar = '', 
  welcomeMessage = 'Hello! How can I help you today?',
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Add welcome message when chat first opens
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, text: welcomeMessage, sender: 'bot', timestamp: new Date() }
      ]);
    }
  }, [isOpen, welcomeMessage, messages.length]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Simple bot response logic
  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello there! How can I assist you today?';
    } else if (lowerCaseMessage.includes('help')) {
      return 'I\'m here to help! You can ask me questions, and I\'ll do my best to assist you.';
    } else if (lowerCaseMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help with?';
    } else if (lowerCaseMessage.includes('bye')) {
      return 'Goodbye! Feel free to come back if you have more questions.';
    } else {
      return "I understand you're asking about " + userMessage.substring(0, 20) + "... Let me help you with that. What specific information are you looking for?";
    }
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <div className={`flex flex-col bg-white rounded-lg shadow-chat overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'w-80 sm:w-96 h-[500px]' : 'w-16 h-16'}`}>
          {isOpen ? (
            <>
              <ChatHeader 
                botName={botName} 
                botAvatar={botAvatar} 
                onClose={toggleChat} 
              />
              
              <MessageList 
                messages={messages} 
                isTyping={isTyping} 
                botAvatar={botAvatar}
                messagesEndRef={messagesEndRef}
              />
              
              <InputArea onSendMessage={handleSendMessage} />
            </>
          ) : (
            <button 
              onClick={toggleChat}
              className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
              aria-label="Open chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChatBot;