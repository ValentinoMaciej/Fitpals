import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from "../../Assets/SliderImg/sport1.jpg";
import img2 from "../../Assets/SliderImg/sport2.jpg";
import img3 from "../../Assets/SliderImg/sport3.jpg";
import img4 from "../../Assets/SliderImg/sport4.jpg";
import img5 from "../../Assets/SliderImg/sport5.jpg";
import img6 from "../../Assets/SliderImg/fitness1.png";
import img7 from "../../Assets/SliderImg/running1.jpg";
import icon1 from "../../Assets/Icons/Tennis.png";
import icon2 from "../../Assets/Icons/Swimming.png";
import icon3 from "../../Assets/Icons/Running.png";
import icon4 from "../../Assets/Icons/Gym.png";
import icon5 from "../../Assets/Icons/Bike.png";
import icon6 from "../../Assets/Icons/Basket.png";
import icon7 from "../../Assets/Icons/Climbing.png";
import icon8 from "../../Assets/Icons/Box.png";
import icon9 from "../../Assets/Icons/Hiking.png";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.backgroundImage}>
          <div className={styles.sideFlex}>
            <h1 className={styles.homePageTitle}>FITPAL</h1>
            <p className={styles.homePageText}>
              Fitpal działa od 15 lat, skorzystało z niego ponad 200000 osób.
              Jesteś tu bezpieczny - profile są indywidualnie weryfikowane,
              dlatego wiarygodność uczestników jest bardzo wysoka. Twoja
              prywatność jest dla nas priorytetem!
            </p>
          </div>
        </div>
      </section>

      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSliders}>
            <img src={img1} className={styles.swiperSlide} alt="" />
            <p className={styles.swiperDescription}>
              Chcesz pobiegać, ale nie masz z kim?
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSliders}>
            <img src={img2} className={styles.swiperSlide} alt="" />
            <p className={styles.swiperDescription}>
              Masz ochotę pograć w kosza, ale nie sam?
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSliders}>
            <img src={img5} className={styles.swiperSlide} alt="" />
            <p className={styles.swiperDescriptionSecondary}>
              Szukasz przyjaciela, partnera, sportowego towarzystwa?
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSliders}>
            <img src={img4} className={styles.swiperSlide} alt="" />
            <p className={styles.swiperDescriptionSecondary}>
              Chcesz poznawać nowych ludzi?
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSliders}>
            <img src={img3} className={styles.swiperSlide} alt="" />
            <p className={styles.swiperDescription}>
              A może szukasz towarzystwa do meczu piłki nożnej?
            </p>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={styles.block}>
        <div className={styles.blockFit}>
          <img src={img6} className={styles.fitnessImg} alt="" />
          <p className={styles.blockTextFit}>
            Niezależnie od tego, czy szukasz osób, które zmobilizują Cię do
            treningu, miłości z którą połączy się pasja sportu, inspiracji,
            rozrywki czy poprawy nastroju dzięki wspólnej aktywności -
            znajdziesz to w Fitpal!
          </p>
        </div>
        <div className={styles.blockRun}>
          <img src={img7} className={styles.runningImg} alt="" />
          <p className={styles.blockTextRun}>
            Fitpal pomaga pozanać się tym, których łączą wspólne zainteresownia.
            Zbliża ludzi, pokazując jak niedaleko mają do siebie. Wspiera rozwój
            fizyczny i społeczny, by żyć zdrowiej, kreatywniej i szczęśliwiej!
          </p>
        </div>
      </section>

      <div className={styles.bottomBackgroundImage}>
        <section className={styles.iconSwiper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className={styles.mySwiperSlide}
          >
            <SwiperSlide>
              <img src={icon1} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon2} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon3} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon4} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon5} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon6} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon7} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon8} className={styles.icon} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={icon9} className={styles.icon} alt=""></img>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};
