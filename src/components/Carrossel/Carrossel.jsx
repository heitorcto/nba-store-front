import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carrossel.css';
import teste  from '../../assets/1.jpg';


function Carrossel() {
    return (
       <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper swiper-changes"
            >
                <SwiperSlide>
                    <img src={ teste } alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ teste } alt="" />
                </SwiperSlide>
            </Swiper>
       </>
    )
}

export default Carrossel