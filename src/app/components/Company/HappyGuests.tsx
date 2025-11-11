import { FaHeart, FaComment, FaShare } from "react-icons/fa";

type VideoItem = {
  src: string;
  title: string;
};

export default function HappyGuests() {
  const videos: VideoItem[] = [
    { src: "/assets/holiday/v1.mp4", title: "Camping Guide" },
    { src: "/assets/holiday/v2.mp4", title: "Rafting Best Time" },
    { src: "/assets/holiday/v3.mp4", title: "Adventure Memories" },
    { src: "/assets/holiday/v4.mp4", title: "Hiking Trails" },
    { src: "/assets/holiday/v5.mp4", title: "Beach Fun" },
    { src: "/assets/holiday/v6.mp4", title: "Mountain Trek" },
    { src: "/assets/holiday/v7.mp4", title: "City Adventures" },
    { src: "/assets/holiday/v7.mp4", title: "City Adventures" },
  ];

  const renderVideoCard = (video: VideoItem, index: number) => (
    <div key={index} className="overflow-hidden rounded-lg shadow">
      <video
        src={video.src}
        className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="p-2 bg-white flex flex-col">
        <p className="font-semibold text-sm md:text-md">{video.title}</p>
        <div className="flex items-center space-x-4 text-gray-500 justify-start mt-1">
          <button className="flex items-center space-x-1 hover:text-red-500 transition">
            <FaHeart /> <span>120</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500 transition">
            <FaComment /> <span>45</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-500 transition">
            <FaShare /> <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Happy Guests of{" "}
          <span className="text-red-500">Holiday Season India</span>
        </h2>

        {/* Grid layout with 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map(renderVideoCard)}
        </div>
      </div>
    </section>
  );
}
