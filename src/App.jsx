import  { useState, useEffect } from "react";
import "./App.css";
import SecureForm from "./components/about";
import Footer from "./components/navbar.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a 2-second delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
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
          }}
        >
          <CircularProgress />
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
