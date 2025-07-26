import React from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiX, FiMinimize2, FiMessageSquare } from 'react-icons/fi';

const ChatHeader = ({ botName, botAvatar, onClose }) => {
  return (
    <div className="bg-primary-600 text-white p-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {botAvatar ? (
          <img 
            src={botAvatar} 
            alt={botName} 
            className="w-8 h-8 rounded-full object-cover border-2 border-white"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <SafeIcon icon={FiMessageSquare} className="text-primary-600 text-lg" />
          </div>
        )}
        <div>
          <h3 className="font-medium text-sm">{botName}</h3>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
            <span className="text-xs text-primary-100">Online</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={onClose}
          className="text-primary-100 hover:text-white transition-colors p-1"
          aria-label="Minimize chat"
        >
          <SafeIcon icon={FiMinimize2} className="text-lg" />
        </button>
        <button 
          onClick={onClose}
          className="text-primary-100 hover:text-white transition-colors p-1"
          aria-label="Close chat"
        >
          <SafeIcon icon={FiX} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;