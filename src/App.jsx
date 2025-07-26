import React from 'react';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center p-4">
      <ChatBot 
        theme="primary"
        botName="AssistantGPT"
        botAvatar="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80"
        welcomeMessage="Hello! I'm your AI assistant. How can I help you today?"
      />
    </div>
  );
}

export default App;