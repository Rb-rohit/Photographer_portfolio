
import { useEffect, useRef, useState } from "react";
import { img } from "../assets/img";

const images = [
    img.couple1,
    img.couple2,
    img.wedding0,
    img.wedding1,
    img.wedding2,
    img.wedding3,
    img.wedding4,
    img.wedding5,
    img.wedding6,
    img.wedding7,
    img.wedding8,
    img.wedding9,
    img.wedding10,
    img.wedding11,
    img.wedding12,
];

const RotatingImageGallery = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startRotation = useRef(0);
  const autoRotateRef = useRef(null);

  // --------------------------------
  // Responsive 3D depth
  // --------------------------------
  const getTranslateZ = () => {
    if (typeof window === "undefined") return 300;

    if (window.innerWidth < 480) return 210;
    if (window.innerWidth < 640) return 240;
    if (window.innerWidth < 768) return 280;
    if (window.innerWidth < 1024) return 350;

    return 430;
  };

  // --------------------------------
  // Auto rotation
  // --------------------------------
  const startAutoRotate = () => {
    clearInterval(autoRotateRef.current);

    autoRotateRef.current = setInterval(() => {
      if (!isDragging) {
        setRotation((prev) => prev - 45);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoRotate();

    return () => {
      clearInterval(autoRotateRef.current);
    };
  }, [isDragging]);

  // --------------------------------
  // Buttons
  // --------------------------------
  const handlePrev = () => {
    setRotation((prev) => prev + 45);
  };

  const handleNext = () => {
    setRotation((prev) => prev - 45);
  };

  // --------------------------------
  // Mouse drag
  // --------------------------------
  const handleMouseDown = (e) => {
    setIsDragging(true);

    startX.current = e.clientX;
    startRotation.current = rotation;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const difference = e.clientX - startX.current;

    setRotation(startRotation.current + difference * 0.5);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Snap to nearest 45 degrees
    setRotation((prev) => Math.round(prev / 45) * 45);
  };

  // --------------------------------
  // Touch / Mobile swipe
  // --------------------------------
  const handleTouchStart = (e) => {
    setIsDragging(true);

    startX.current = e.touches[0].clientX;
    startRotation.current = rotation;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const difference = e.touches[0].clientX - startX.current;

    setRotation(startRotation.current + difference * 0.5);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Snap to nearest image
    setRotation((prev) => Math.round(prev / 45) * 45);
  };

  const translateZ = getTranslateZ();

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#1B261D] px-4">

        {/* Heading */} 
        <div className="mb-12 mt-12 text-center sm:mb-16"> 
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> Wedding Gallery </h2>
        </div>
      {/* 3D Gallery Area */}
      <div
        className={`
          relative
          h-[150px] w-[150px]
          sm:h-[180px] sm:w-[180px]
          md:h-[220px] md:w-[220px]
          lg:h-[300px] lg:w-[300px]
          cursor-grab
          [transform-style:preserve-3d]
          ${
            isDragging
              ? "cursor-grabbing"
              : ""
          }
        `}
        style={{
          transform: `perspective(1000px) rotateY(${rotation}deg)`,
          transition: isDragging
            ? "none"
            : "transform 700ms ease-in-out",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="
              absolute
              inset-0
              overflow-hidden
              rounded-xl
              [transform-style:preserve-3d]
              top-15
            "
            style={{
              transform: `
                rotateY(${index * 45}deg)
                translateZ(${translateZ}px)
              `,
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-cover
                rounded-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-28 flex w-full max-w-md items-center justify-between px-4 sm:mt-32">

        <button
          onClick={handlePrev}
          className="
            rounded-full
            border border-white/20
            bg-white/10
            px-5 py-2.5
            text-sm
            font-medium
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white/20
            active:scale-95
            sm:px-7
            sm:py-3
          "
        >
          ← Prev
        </button>

        <button
          onClick={handleNext}
          className="
            rounded-full
            border border-white/20
            bg-white/10
            px-5 py-2.5
            text-sm
            font-medium
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white/20
            active:scale-95
            sm:px-7
            sm:py-3
          "
        >
          Next →
        </button>

      </div>

    </section>
  );
};

export default RotatingImageGallery;
