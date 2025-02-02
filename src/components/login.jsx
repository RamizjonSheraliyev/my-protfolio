import  { useState } from 'react';
import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setAlertMessage('Muvaffaqiyatli kirish! Saytga o‘tayapsiz...');
      setAlertType('success');
      setTimeout(() => window.location.href = '/', 2000);
    } else {
      setAlertMessage('Email yoki parol noto‘g‘ri!');
      setAlertType('error');
    }

    setLoading(false);
  };

  return (
    <motion.div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Kirish</h2>
        {alertMessage && <Alert severity={alertType}>{alertMessage}</Alert>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="mt-4"
          />
          <TextField
            label="Parol"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            className="mt-4"
          />
          <Button type="submit" variant="contained" fullWidth disabled={loading} className="mt-4">
            {loading ? <CircularProgress size={20} /> : 'Kirish'}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
