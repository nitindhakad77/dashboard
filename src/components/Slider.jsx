import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {

    const images = ['paint1.png', 'paint2.png', 'paint3.png', 'paint4.png']

    return (
        <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10 mb-10'>
            
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={2} // Show only one slide by default
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-fit h-[150px] mx-auto select-none'
                            />
                            <div className='flex flex-col'>
                                <p className='text-xs ml-1'>Modern wall decor framed painting</p>
                                <div className='flex'>
                                    <p  className='text-xl font-bold ml-1'> $199.99</p>
                                    <img className='w-4 h-4 mt-2 ml-12' src='star.png'/>
                                    <img className='w-4 h-4 mt-2' src='star.png'/>
                                    <img className='w-4 h-4 mt-2' src='star.png'/>
                                    <img className='w-4 h-4 mt-2' src='star.png'/>
                                    <img className='w-4 h-4 mt-2' src='star.png'/>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;


