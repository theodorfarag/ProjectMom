import React, { useState } from "react";

interface CarouselProps {
  images: { src: string; alt: string; className? : string}[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  if (images.length === 0) return <div>No images yet.</div>;

  return (
    <div className="carousel flex flex-col items-center my-4">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className={`carousel-img rounded shadow border w-64 h-64 object-cover mb-2 ${images[current].className ?? ""}`}
      />
      <div className="flex gap-2">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
        <span>{current + 1} / {images.length}</span>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
