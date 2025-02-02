import { useState, useEffect } from 'react';
import './App.css';
import SecureForm from './components/about';
import Footer from './components/navbar';
import { CircularProgress, Box } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0', // Optional: You can add a background color to make loading more subtle
          }}
        >
          <CircularProgress size={50} color="primary" />
        </Box>
      ) : (
        <>
          <SecureForm />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
