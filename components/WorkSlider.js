import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

//icons
import {BsArrowRight} from 'react-icons/bs';

//swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//required modules
import {Pagination} from 'swiper';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'project1',
          path: '/thumb1.jpg',
        },
        {
          title: 'project2',
          path: '/thumb2.jpg',
        },
        {
          title: 'project3',
          path: '/thumb3.jpg',
        },
        {
          title: 'project4',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'project5',
          path: '/thumb4.jpg',
        },
        {
          title: 'project6',
          path: '/thumb1.jpg',
        },
        {
          title: 'project7',
          path: '/thumb2.jpg',
        },
        {
          title: 'project8',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination = {{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      
      {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group
                      transition-all duration-300 delay-150'>
                        <Image src={image.path} width={500} height={300} alt='' />

                        {/* overlay gradiant */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e83cc0] to-[#4a22bd]
                        opacity-0 hover:opacity-80 transition-all duration-700'>
                        </div>

                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                        group-hover:xl:-translate-y-20 transition-all duration-300'>

                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>
                              Live
                            </div>

                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0'>
                              Project
                            </div>

                            {/* title part 1 */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default WorkSlider;
