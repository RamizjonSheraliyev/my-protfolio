
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import rasm1 from '../images/rasm-1.webp'
import rasm2 from '../images/rasm-2.jpg'
import rasm3 from '../images/rasm-3.webp'
import rasm4 from '../images/rasm-4.jpg'
import rasm5 from '../images/rasm-5.jpg'
import rasm6 from '../images/rasm-6.jpg'
import rasm7 from '../images/rasm-7.jpg'

const Home = () => {
  const developers = [
    {
      name: 'Guido van Rossum (Python yaratuvchisi)',
      image: rasm1,
    },
    {
      name: 'James Gosling (Java yaratuvchisi)',
      image: rasm2,
    },
    {
      name: 'Dennis Ritchie (C tili yaratuvchisi)',
      image: rasm3,
    },
    {
      name: 'Linus Torvalds (Linux yaratuvchisi)',
      image: rasm4,
    },
    {
      name: 'Brendan Eich (JavaScript yaratuvchisi)',
      image:  rasm5,
    },
    {
      name: 'Bjarne Stroustrup (C++ yaratuvchisi)',
      image:  rasm6,
    },
    {
      name: 'Mark Zuckerberg (Facebook asoschisi)',
      image:  rasm7,
    },
    {
      name: 'Bill Gates (Microsoft hammuassisi)',
      image: rasm1,
    },
    {
      name: 'Steve Jobs (Apple hammuassisi)',
      image:  rasm2,
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Mashhur Dasturchilar</h2>
        <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {developers.map((developer, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-300 hover:scale-105"
                  />
                  <p className="mt-4 text-lg font-semibold">{developer.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;
