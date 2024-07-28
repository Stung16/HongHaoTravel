/* eslint-disable react/prop-types */
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
const CardMenu = ({ active }) => {
  return (
    <div className={`relative right-0 max-w-[57rem] ${!active ? 'opacity-0' : 'opacity-1'} transition-all`}>
      <div>
        <div>
          <h3 className="text-white mb-3 font-semibold text-xl">
            Find your tour :
          </h3>
        </div>
        <Swiper
          className="flex gap-4 overflow-hidden mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CardMenu;
