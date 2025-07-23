import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ // smooth scroll speed
  smooth: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 👇 VERY IMPORTANT: Sync ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)  

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const imagesLoaded = useRef(0);

  const frames = {
    currentIndex: 0,
    maxIndex: 600,
  };

  // ✅ Image Preload Function
  const preloadImages = () => {
    for (let i = 1; i <= frames.maxIndex; i++) {
      const imageUrl = `/assets/image/frames/frame_${i.toString().padStart(4, "0")}.jpg`;

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imagesLoaded.current++;
        if (imagesLoaded.current === frames.maxIndex + 1) {
          loadImage(frames.currentIndex);
          startAnimation();
        }
      };
      imagesRef.current.push(img);
    }
  };

  // ✅ Load frame to canvas
  const loadImage = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    frames.currentIndex = index;
  };

  const startAnimation = () => {
      var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "bottom bottom",
        scrub:2,
        markers:true
      }  
  })
        tl.to(frames,{
            currentIndex:frames.maxIndex,
            onUpdate: () => {
              loadImage(Math.floor(frames.currentIndex));
            },
        })    
  };
  // ✅ useEffect to run once after component mounts
  useEffect(() => {
    preloadImages();
  }, []);

  return (
          <div className="h-screen  w-full">
    <div className="parent h-screen relative w-full  top-0 left-0 ">
      <div className="sticky top-0 left-0 w-full h-screen">
        <canvas ref={canvasRef} className="w-full h-screen"></canvas>
      </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default CanvasAnimation;
