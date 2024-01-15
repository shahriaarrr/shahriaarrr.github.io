import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

//icons
import {FaQuoteLeft} from 'react-icons/fa';

//swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//required modules
import {Navigation, Pagination} from 'swiper';

// testimonial data
const testimonialData = [
  {
    image: '/SCARTAL.png',
    name: 'SCARTAL',
    position: 'Sector team CEO',
    message:
      "I didn't cooperate with shahriar in many projects but in my experience with him he strikes me as a professional and honest coworker who you can feel good and relaxed working with.",
  },
  {
    image: '/farnam.png',
    name: 'Farnam Javadi',
    position: 'python developer',
    message:
      'I highly recommend Shahriar as a Python programmer. His coding skills are exceptional, and he consistently delivers high-quality work. Shahriar is a reliable and collaborative team player, making him a valuable asset to any project. I wholeheartedly endorse him for any future endeavors.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation = {true}
      pagination = {{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((persone, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center
              relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>

                  <div className='mb-2 mx-auto'>
                    <Image src={persone.image} width={100} height={100} alt='' />
                  </div>

                  <div className='text-lg'>
                    {persone.name}
                  </div>

                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {persone.position}
                  </div>

                </div>
              </div>
            
              <div className='flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px]
              relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>

                <div className='xl:text-lg text-center md:text-left'>
                  {persone.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;
