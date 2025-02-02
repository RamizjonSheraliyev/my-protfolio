
import { FaTelegramPlane, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold">
          Malumotlaringiz xavfsiz himoyalangan, bu saytda hozir sinov rejimida ishlamoqda, ozgartirishlar kiritilmoqda
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {/* Social Media Icons */}
          <a
            href="https://t.me/Scruzzzy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-red-500 transition-colors"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/ramiz_sheraliyev?igsh=MTR0eHEyd2kzeXZtMQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-red-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/RamizjonSheraliyev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-red-500 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
