
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';


import 'swiper/css';



export default function Home(){
    return(
        <>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <img src="/banner1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner2.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner3.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner4.jpg" alt="" />

                </SwiperSlide>
                
            </Swiper>
        </>
    )
}