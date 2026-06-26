import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";
import styles from "./NavButton.module.css";

export default function Carousel({
    data,
    renderComponent,
}) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [navState, setNavState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return (
        <div className={styles.carouselWrapper}>
            <LeftNavButton
                ref={prevRef}
                hidden={navState.isBeginning}
            />

            <RightNavButton
                ref={nextRef}
                hidden={navState.isEnd}
            />

            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView="auto"
                navigation={{
                    // prevEl: ".prev-btn",
                    // nextEl: ".next-btn",
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                    setNavState({
                        isBeginning: swiper.isBeginning,
                        isEnd: swiper.isEnd,
                    });
                }}
            // breakpoints={{
            //     320: {
            //         slidesPerView: 2,
            //     },
            //     640: {
            //         slidesPerView: 3,
            //     },
            //     768: {
            //         slidesPerView: 4,
            //     },
            //     1024: {
            //         slidesPerView: 6,
            //     },
            //     1440: {
            //         slidesPerView: 7,
            //     },
            // }}
            >
                {data.map((item) => (
                    // <SwiperSlide key={item.id} className={styles.swiperSlide}>
                    <SwiperSlide key={item.id}>

                        {renderComponent(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}