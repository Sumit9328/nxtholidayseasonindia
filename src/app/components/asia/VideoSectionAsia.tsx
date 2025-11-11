"use client";

export default function VideoSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT CONTENT = 50% */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10">
          <h2 className="text-4xl font-bold mb-3">Explore The World With Us</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, 
            nisl eget consectetur sagittis, nisl nunc tincidunt nisi, eget consequat nunc nisl eu lorem.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg w-fit hover:bg-gray-800 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT VIDEO = 50% */}
        <div className="w-full md:w-1/2">
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full h-[350px] md:h-full object-cover"
          >
            <source src="../../assets/asia/video.mp4" type="video/mp4" />
          
          </video>
        </div>

      </div>
    </section>
  );
}
