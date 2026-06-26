import React, { useState } from "react";
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
    const [navState, setNavState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return (
        <div style={{ position: "relative" }}>
            <div className={styles.carouselWrapper}>
                {/* <LeftNavButton /> */}
                {!navState.isBeginning && <LeftNavButton />}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    onSwiper={(swiper) =>
                        setNavState({
                            isBeginning: swiper.isBeginning,
                            isEnd: swiper.isEnd,
                        })
                    }
                    onSlideChange={(swiper) =>
                        setNavState({
                            isBeginning: swiper.isBeginning,
                            isEnd: swiper.isEnd,
                        })
                    }
                    spaceBetween={24}
                    slidesPerView="auto"
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
                {/* <RightNavButton /> */}
                {!navState.isEnd && <RightNavButton />}
            </div>


        </div>
    );
}