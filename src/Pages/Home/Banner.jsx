import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import image01 from "../../assets/home/banner/Contemporary-Fusion-dance.jpg";
import image02 from "../../assets/home/banner/hip-hop-dance.jpg";
import image03 from "../../assets/home/banner/Street-Dance.jpg";
import image04 from "../../assets/home/banner/ballet-dance.jpg";
import image05 from "../../assets/home/banner/folk-culture-dance.jpg";
import image06 from "../../assets/home/banner/ballroom-dance.jpg";
import image07 from "../../assets/home/banner/jaaz-dance.jpg";
import image08 from "../../assets/home/banner/latin-dance.jpg";
import image09 from "../../assets/home/banner/Musical-Theater-Dance.jpg";
import image10 from "../../assets/home/banner/Contemporary-dance-2.jpg";

const Banner = () => {
  return (
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
      className="mySwiper"
    >
      {/* Slide 01 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image01}
          alt="Contemporary Fusion Dance"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900">
            Contemporary Fusion Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-gray-500">
            Contemporary fusion combines elements of different dance styles,
            often blending modern, ballet, jazz, and other forms to create a
            unique and expressive movement vocabulary.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 02 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image02}
          alt="Hip-hop Dance"
        />
        <div className="absolute top-36 lg:top-1/3 right-10 lg:right-12 text-right w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Hip-hop Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Hip-hop dance originated in African American and Latinx communities
            and is characterized by its high-energy, urban style. It includes a
            wide range of movements, including popping, locking, breaking, and
            freestyle, often performed to hip-hop music.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 03 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image03}
          alt="Street Dance Styles"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Street Dance Styles
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Street dance styles include breaking, popping, locking, krumping,
            waacking, and more. These styles originated in urban communities and
            often incorporate freestyle and improvisation.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 04 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image04}
          alt="Ballet Dance"
        />
        <div className="absolute top-36 lg:top-1/3 right-10 lg:right-12 text-right w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Ballet Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Ballet is a classical dance form characterized by precise and
            graceful movements, pointe work (for female dancers), and a strong
            emphasis on technique, posture, and musicality.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 05 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image05}
          alt="Folk & Culture Dance"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Folk & Culture Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Dance learning schools may also offer classes in traditional folk or
            cultural dances from different regions and countries, allowing
            students to explore diverse dance traditions.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 06 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image06}
          alt="Ballroom Dance"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Ballroom Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Ballroom dance includes various partner dances such as waltz,
            foxtrot, tango, rumba, and swing. It emphasizes precise footwork,
            posture, and partner communication.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 07 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image07}
          alt="Jazz Dance"
        />
        <div className="absolute top-36 lg:top-1/3 right-10 lg:right-12 text-right w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Jazz Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Jazz dance incorporates elements of ballet, modern dance, and
            popular dance styles. It is characterized by energetic movements,
            syncopated rhythms, isolations, and often incorporates elements of
            improvisation.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 08 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image08}
          alt="Latin Dance"
        />
        <div className="absolute top-36 lg:top-1/3 right-10 lg:right-12 text-right w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Latin Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Latin dance styles include salsa, bachata, merengue, cha-cha-cha,
            and samba, among others. These dances are characterized by vibrant
            movements, rhythmic hip action, and partner connection.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 09 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image09}
          alt="Musical Theater Dance"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Musical Theater Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Musical theater dance combines elements of various dance styles,
            incorporating storytelling, character development, and performance
            techniques specific to theatrical productions.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 10 */}
      <SwiperSlide className="relative">
        <img
          className="w-full lg:w-[100vw] h-[500px] lg:h-[100vh]"
          src={image10}
          alt="Contemporary Dance"
        />
        <div className="absolute top-36 lg:top-1/3 left-10 lg:left-12 w-3/4 lg:w-1/3 space-y-6">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
            Contemporary Dance
          </h2>
          <p className="text-base lg:text-xl font-medium text-white">
            Contemporary or modern dance is a fluid and expressive dance form
            that explores unique movement qualities and often incorporates
            elements of ballet and other dance styles. It emphasizes creativity,
            individuality, and the use of space and dynamics.
          </p>
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-xl font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
