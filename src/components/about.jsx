import { useState } from 'react';
import { TextField, Button, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const TELEGRAM_BOT_TOKEN = '7664954552:AAF7H7sjGICerimFr_xxrVGU8ly0Luj-SuQ'; // O'zingizning bot tokeningiz
const CHAT_ID = '5250272118'; // Qabul qiluvchining chat IDsi

const SecureForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const sendToTelegram = async (message) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!data.ok) {
        throw new Error(data.description);
      }
    } catch (error) {
      console.error('Telegramga yuborishda xatolik:', error);
      throw error; // Rethrow the error so we can handle it in handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `*Yangi Forma Ma'lumotlari*\n\n*Ism:* ${name}\n*Email:* ${email}\n*Savol:* ${question}`;

    try {
      await sendToTelegram(message);

      // Only show alert after successful submission
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);

      // Clear form fields
      setName('');
      setEmail('');
      setQuestion('');
    } catch (error) {
      // Handle the error by not showing the alert
      setAlertVisible(false);
      console.error('Xatolik yuz berdi:', error);
    } finally {
      setLoading(false);
    }
  };

  // Email validation function to check if it ends with @gmail.com
  const isEmailValid = email.endsWith('@gmail.com');
  
  // Button should be enabled only if all fields are filled correctly
  const isFormValid = name && email && question && isEmailValid;

  return (
    <section id='contact'> 
      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        {/* Animated Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-50"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated Text */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl font-bold text-white"
          animate={{ x: [-100, 0, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          Biz bilan bog'laning!
        </motion.div>

        {/* Floating circles for background design */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-70"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full opacity-70"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* "Rahmat" Text */}
        <motion.div
          className="absolute top-5 left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          Biz bog'langaniz uchun rahmat! Sayt sinov rejimida.
        </motion.div>

        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg z-10">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Sizning malumotlaringiz xavfsiz himoyalangan, hech kim kora olmaydi!
            </h2>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Ism"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              className="transition duration-300 focus:shadow-outline"
              InputProps={{ className: 'rounded-md' }}
            />

            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="transition duration-300 focus:shadow-outline"
              InputProps={{ className: 'rounded-md' }}
            />

            <TextField
              label="Kerakli savollar"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              disabled={loading}
              className="transition duration-300 focus:shadow-outline"
              InputProps={{ className: 'rounded-md' }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading || !isFormValid}
              className="py-3 text-lg font-semibold transition duration-300 hover:opacity-90"
              startIcon={loading && <CircularProgress size={20} color="inherit" />}
            >
              {loading ? 'Yuborilmoqda...' : 'Yuborish'}
            </Button>
          </form>

          {alertVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <Alert severity="success">Muvaffaqiyatli yubordingiz! Ramizga malumotlaringiz yuborildi.</Alert>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecureForm;
