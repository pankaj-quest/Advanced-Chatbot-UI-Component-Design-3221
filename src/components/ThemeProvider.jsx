import React from 'react';

// This component provides theme context and can be expanded for more complex theming
const ThemeProvider = ({ theme = 'primary', children }) => {
  // You could implement context here if needed for more complex theming
  // For now, we're just passing the theme through props in each component
  
  return (
    <>{children}</>
  );
};

export default ThemeProvider;