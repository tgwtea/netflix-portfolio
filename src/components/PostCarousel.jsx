import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PostCarousel({ title, posts }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg hover:scale-105 transition"
            />
            <p className="mt-2 text-white">{post.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}