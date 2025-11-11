"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CustomerAsia() {
  const data = [
       { name: "User 3", video: "/assets/asia/asia3.mp4", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a atque laborum quibusdam at, harum laudantium? Porro animi dolorum obcaecati voluptas. Totam esse iure eum minus animi odio nihil dicta." },
    { name: "User 4", video: "/assets/asia/asia4.mp4", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a atque laborum quibusdam at, harum laudantium? Porro animi dolorum obcaecati voluptas. Totam esse iure eum minus animi odio nihil dicta." },    { name: "User 3", video: "/assets/asia/asia3.mp4", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a atque laborum quibusdam at, harum laudantium? Porro animi dolorum obcaecati voluptas. Totam esse iure eum minus animi odio nihil dicta." },
    { name: "User 4", video: "/assets/asia/asia2.mp4", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a atque laborum quibusdam at, harum laudantium? Porro animi dolorum obcaecati voluptas. Totam esse iure eum minus animi odio nihil dicta." },
    { name: "User 3", video: "/assets/asia/asia1.mp4", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a atque laborum quibusdam at, harum laudantium? Porro animi dolorum obcaecati voluptas. Totam esse iure eum minus animi odio nihil dicta." },
  ];

  return (
    <section className="py-14">
      <h2 className="text-center font-bold text-3xl mb-8">Customer Reviews</h2>

      <div className="container mx-auto">

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            resetProgress: false,
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
        >
          {data.map((item, i) => (
            <SplideSlide key={i}>
              <div className=" bg-[#d60d45] text-white p-5 shadow-lg">

                {/* Video */}
                <video
                  className="w-full h-[230px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <h3 className="font-semibold mt-3">{item.name}</h3>
                <p className="text-sm mt-2">{item.review}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

      </div>
    </section>
  );
}
