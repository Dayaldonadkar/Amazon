import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 my-10 bg-white px-10 pt-5 pb-10 rounded-lg">
        <h1 className="pb-5 space-x-5">
          <span className="text-2xl font-bold">Todays Deals </span>
          <span className="text-base font-normal text-[#007185]">
            See all Deals
          </span>
        </h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="space-y-6">
            <img src="Swipe1.jpg" />
            <div className="space-y-2">
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
              </p>
              <p className="text-sm">Best selling Devices</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-6">
            <img src="Swipe2.jpg" />
            <div>
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
              </p>
              <p>New Noise Buds X</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-14">
            <img className="pt-9" src="swipe3.jpg" />
            <div>
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
              </p>
              <p>Jaw Dropping Deals </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-5">
            <img src="swipe4.jpg" />
            <div>
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
                <p>Lawa blaze 5g</p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-12">
            <img src="swipe5.jpg" />
            <div>
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
              </p>
              <p>High Performance Pc</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-5">
            <img src="swipe6.jpg" />
            <div>
              <p className="space-x-2">
                <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                  Up to 14% off
                </span>
                <span className="text-[#CC0C39]  text-xs font-medium">
                  Deal of the Day
                </span>
              </p>
              <p>Deals On Speakers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-9">
            <img className="pt-10" src="swipe8.jpg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="space-y-9">
            <img className="pt-10" src="swipe8.jpg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="space-y-10">
            <img className="pt-10" src="swipe9.jpg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="space-y-5">
            <img src="swipe10.jpg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="space-y-5">
            <img src="swipe11.jpg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
          </SwiperSlide>
          <SwiperSlide className="space-y-5">
            <img src="swipe12.jpeg" />
            <p className="space-x-2">
              <span className="bg-[#CC0C39] px-3 py-1 rounded-md text-white text-xs">
                Up to 14% off
              </span>
              <span className="text-[#CC0C39]  text-xs font-medium">
                Deal of the Day
              </span>
            </p>
            <p></p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
