// utils/log.js
export const logToServer = async (message) => {
    // Check if we're in a browser environment
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      console.log('Server-side log:', message);
      return; // Skip the fetch call when running on the server
    }

    try {
      // Use window.location.origin to get the base URL in the browser
      const baseUrl = window.location.origin;
      const response = await fetch(`${baseUrl}/api/logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error('Failed to log to server');
      }
    } catch (error) {
      console.error('Error logging to server:', error); 
    }
  };