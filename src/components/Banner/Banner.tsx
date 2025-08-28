import React, { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from './Banner.module.css';
import image1 from '../../assets/img/ceramic-vase-PR85FCP 1.png';

function Banner() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const slides = [
    {id: 1, href: "/", img: image1, alt: "", name: "Antique Vast1", cost: "$171.00", type: "Vase"},
    {id: 2, href: "/", img: image1, alt: "", name: "Antique Vast2", cost: "$172.00", type: "Carpet"},
    {id: 3, href: "/", img: image1, alt: "", name: "Antique Vast3", cost: "$173.00", type: "Lamp Shade"},
    {id: 4, href: "/", img: image1, alt: "", name: "Antique Vast4", cost: "$174.00", type: "Wall Decoration"}
  ];

  const [count, setCount] = useState<{ [key: number]: number }>({});

  const decrease = (id: number) => {
    setCount((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const increase = (id: number) => {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  return (
    <div className={styles.bannerWrap}>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        allowTouchMove={false}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 8 },
          640: { slidesPerView: 1, spaceBetween: 12 },
          1024: { slidesPerView: 1, spaceBetween: 16 }
        }}
        a11y={{ enabled: true }}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <a href={s.href} aria-label={s.alt} className={styles.bannerCard}>
              <img src={s.img} alt={s.alt} loading="lazy" />
            </a>

            <div className={styles.shopDiv}>
              <div className={styles.textDiv}>
                <span className={styles.sName}>{s.name}</span>
                <span className={styles.sCost}>{s.cost}</span>
              </div>

               <div className={styles.addDiv}>
                <button onClick={() => decrease(s.id)}>-</button>
                <div>{count[s.id] || 1}</div>
                <button onClick={() => increase(s.id)}>+</button>
              </div>

              <button className={styles.cartBtn}>Add to Cart</button>
            </div>

            <div className={styles.rightTab}>
              {slides.map((item, index) => (
                <div
                  key={item.id}
                  className={styles.itemWrap}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                >
                  <div className={styles.itemNum}>
                    <span className={styles.num}>{String(item.id).padStart(2, "0")}</span>
                    <span className={styles.name}>{item.type}</span>
                  </div>
                  <div className={styles.underline}></div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
