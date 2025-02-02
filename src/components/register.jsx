// import { useState } from 'react';
// import { TextField, Button, CircularProgress, Alert } from '@mui/material';
// import { motion } from 'framer-motion';

// const TELEGRAM_BOT_TOKEN = '7664954552:AAF7H7sjGICerimFr_xxrVGU8ly0Luj-SuQ'; // O'zingizning bot tokeningiz
// const CHAT_ID = '5250272118';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertType, setAlertType] = useState('');

//   const sendToTelegram = async (message) => {
//     const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
//     const payload = { chat_id: CHAT_ID, text: message, parse_mode: 'Markdown' };

//     try {
//       await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
//     } catch (error) {
//       console.error('Telegramga yuborishda xatolik:', error);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!email.includes('@')) {
//       setAlertMessage('Noto‘g‘ri email formati!');
//       setAlertType('error');
//       setLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setAlertMessage('Parol kamida 6 ta belgidan iborat bo‘lishi kerak!');
//       setAlertType('error');
//       setLoading(false);
//       return;
//     }

//     if (password !== confirmPassword) {
//       setAlertMessage('Parollar mos kelmadi!');
//       setAlertType('error');
//       setLoading(false);
//       return;
//     }

//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);

//     await sendToTelegram(`🆕 Yangi foydalanuvchi ro‘yxatdan o‘tdi:\n📧 Email: ${email}`);

//     setAlertMessage('Muvaffaqiyatli ro‘yxatdan o‘tdingiz! Tekshirilmoqda...');
//     setAlertType('success');

//     setTimeout(() => {
//       window.location.href = '/login'; // Login sahifasiga yo‘naltirish
//     }, 2000);

//     setLoading(false);
//   };

//   return (
//     <motion.div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center">Ro‘yxatdan o‘tish</h2>
//         {alertMessage && <Alert severity={alertType}>{alertMessage}</Alert>}
//         <form onSubmit={handleRegister}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             type="email"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             disabled={loading}
//             className="mt-4"
//           />
//           <TextField
//             label="Parol"
//             variant="outlined"
//             type="password"
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             disabled={loading}
//             className="mt-4"
//           />
//           <TextField
//             label="Parolni tasdiqlang"
//             variant="outlined"
//             type="password"
//             fullWidth
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             disabled={loading}
//             className="mt-4"
//           />
//           <Button type="submit" variant="contained" fullWidth disabled={loading} className="mt-4">
//             {loading ? <CircularProgress size={20} /> : 'Ro‘yxatdan o‘tish'}
//           </Button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default Register;
