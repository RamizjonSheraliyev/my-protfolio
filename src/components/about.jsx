import { useState, useEffect } from 'react';
import { TextField, Button, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

const TELEGRAM_BOT_TOKEN = '7664954552:AAF7H7sjGICerimFr_xxrVGU8ly0Luj-SuQ';
const CHAT_ID = '5250272118';

const SecureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  const { name, email, question } = formData;

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!data.ok) throw new Error(data.description);
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      const message = `*Yangi Forma Ma'lumotlari*\n\n*Ism:* ${name}\n*Email:* ${email}\n*Savol:* ${question}`;

      try {
        await sendToTelegram(message);

        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);

        setFormData({ name: '', email: '', question: '' });

        if (Notification.permission === 'granted') {
          new Notification('Formangiz muvaffaqiyatli yuborildi!', {
            body: 'Malumotlaringiz Ramizga yuborildi.',
          });
        } else {
          console.log('Push notification permission denied');
        }
      } catch (error) {
        setAlertVisible(false);
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const isEmailValid = email.endsWith('@gmail.com');
  const isFormValid = name && email && question && isEmailValid;

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    setTimeout(() => {
      setWelcomeVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Forma | Ramiz Sheraliyev</title>
        <meta name="description" content="Ramiz Sheraliyevning contact formi. Bu yerda siz o'z savollaringizni yuborishingiz mumkin." />
        <meta name="keywords" content="contact, form, telegram bot, Ramiz Sheraliyev" />
        <meta property="og:title" content="Ramiz Sheraliyev - Contact Form" />
        <meta property="og:description" content="Ramiz Sheraliyevning contact formi" />
        <meta property="og:site_name" content="Ramiz Sheraliyev" />
        <meta name="author" content="Ramiz Sheraliyev" />
      </Helmet>

      <section id='contact'>
        <div className={`relative min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-50"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="absolute top-4 right-4 z-20">
            <Button onClick={handleToggleTheme} variant="contained" color="default" className="p-2 rounded-full">
              <motion.div
                animate={{ rotate: theme === 'light' ? [0, 360] : [0, -360] }}
                transition={{ duration: 1 }}
              >
                {theme === 'light' ? <IoMoon size={24} /> : <IoSunny size={24} />}
              </motion.div>
            </Button>
          </div>

          {/* Welcome Notification */}
          {welcomeVisible && (
            <motion.div
              className="absolute left-4 top-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-semibold">Xush kelibsiz! Saytimizga kirganingizdan xursandman.</p>
            </motion.div>
          )}

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
                name="name"
                value={name}
                onChange={handleChange}
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
                name="email"
                value={email}
                onChange={handleChange}
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
                name="question"
                value={question}
                onChange={handleChange}
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
                startIcon={loading && <CircularProgress size={24} />}
              >
                {loading ? 'Yuborilmoqda...' : 'Yuborish'}
              </Button>
            </form>

            {alertVisible && (
              <Alert severity="success" className="mt-4">
                Malumotlaringiz muvaffaqiyatli Ramizga yuborildi!
              </Alert>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecureForm;
