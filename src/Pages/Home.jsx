import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CanvasAnimation from "../components/CanvasAnimation";

const Home = () => {

  const backgroundImagePositions = [
    { top: 9, left: 20 },   // Upper-left quadrant
    { top: 8, left: 85 },   // Upper-right corner
    { top: 15, left: 12 },  // Top-left area
    { top: 22, left: 88 },  // Top-right edge
    { top: 35, left: 5 },   // Middle-left edge
    { top: 42, left: 87 },  // Middle-right edge
    { top: 14, left: 45 },  // Upper-center
    { top: 55, left: 8 },   // Lower-left area
    { top: 48, left: 78 },  // Middle-right area
    { top: 65, left: 25 },  // Lower-left quadrant
    { top: 72, left: 85 },  // Lower-right quadrant
    { top: 64, left: 69 },  // Lower-center-right
    { top: 18, left: 35 },  // Upper-center-left
    { top: 85, left: 15 }   // Bottom-left area (only 14 positions needed)
  ];
  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(
      ".images, .images img",
      {
        y: 70,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
      },
      [".images", ".images img"]
    );
    gsap.from(".dry img", {
      x: -100,
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });
    tl.from(".slogen span",{
      y: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
    })
    tl.from(".star",{
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.9)",
      delay: .1,
    })
    gsap.from(".hero h1 .fit",{
      x: -70,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    })
      gsap.from(".hero h1 .and",{
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
    })
      gsap.from(".hero h1 .flex",{
      x: 70,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    })
  });

  useGSAP(() => {
    // const dryFruits = document.querySelectorAll(".dry ");
    const main = document.querySelector("main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(".dry img", {
        x: `${xMove * .3}%`,
        y: `${yMove * .3}%`,
        // translateX: `${xMove * .2}px`,
        // translateY: `${yMove * .2}px`,
        transform:`transition all 0.1s ease-in-out`,
        ease: "back.out",
      });
    },[".dry img"]);
    });


  return (
    <>
      <main className="relative w-full h-screen bg-[#99ca3fef] overflow-hidden  ">
        <div className="absolute h-screen w-full bg-cover bg-no-repeat bg-bottom bg-[url(/public/assets/image/milk.jpg)] "></div>
        <div className="dry flex w-full  ">
          {[...Array(14)].map((_, index) => {
            const position = backgroundImagePositions[index];
            // Background decoration images array
            const decorationImages = [
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(7).png?updatedAt=1753096638609",
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(5).png?updatedAt=1753096638623",
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(8).png?updatedAt=1753096638605",
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(4).png?updatedAt=1753096638715",
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(9).png?updatedAt=1753096745202",
              "https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/image-removebg-preview%20(6).png?updatedAt=1753096638565",
            ];

            // Varied sizes for natural scattered appearance
            const imageSizeVariants = [
              "w-16 h-16",
              "w-20 h-20",
              "w-24 h-24",
              "w-15 h-18",
              "w-22 h-22",
              "w-28 h-28",
            ];
            const currentImageSize = imageSizeVariants[index % imageSizeVariants.length];

            return (
              <img
                key={index}
                className={`fruits absolute ${currentImageSize} max-w-none opacity-95`}
                style={{
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  transform: `rotate(${((index * 17) % 360) - 180}deg)`,
                  zIndex: Math.floor(Math.random() * 10) + 1,
                }}
                src={decorationImages[index % decorationImages.length]}
                alt={`Background decoration ${index + 1}`}
              />
            );
          })}
        </div>
        <nav className="w-full h-20 ">
          <div className="mt-10">
            <svg
              width="150"
              className="-rotate-12 hover:rotate-0 cursor-pointer transform transition duration-400 ease-in-out"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="74" cy="50" rx="60" ry="40" fill="#FFDE17" />

              <text
                x="75"
                y="61"
                text-anchor="middle"
                fill="#400020"
                font-size="30"
                letterSpacing="2"
                font-weight="600"
                font-family="obvisouly"
              >
                MENU
              </text>
            </svg>
          </div>
        </nav>
        <div className="px-4 max-w-full overflow-hidden">
          <div className="images flex w-full pt-4 pr-20 -space-x-40 justify-center items-center flex-wrap lg:flex-nowrap">
            <span className="w-80 h-80 z-6 flex-shrink-0">
              <img
                loading="lazy"
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/Granola-Mixed-Fruit-275_1100x-removebg-preview.webp?updatedAt=1753078476016"
                alt=""
              />
            </span>

            <span className="w-80 h-80 z-7 mt-3 flex-shrink-0">
              <img
                loading="lazy"
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/Power-Oats-PBC-400_1100x__1_-removebg-preview.webp?updatedAt=1753078475966"
                alt=""
              />
            </span>

            <span className="w-80 h-80 z-8 mt-8 flex-shrink-0">
              <img
                loading="lazy"
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/Muesli-Choco-almond-450_1100x__2_-removebg-preview.webp?updatedAt=1753078475861"
                alt=""
              />
            </span>

            <span className="w-80 h-80 z-7 mt-3 flex-shrink-0">
              <img
                loading="lazy"
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/Power-Oats-PBC-400_1100x__3_-removebg-preview.webp?updatedAt=1753078475948"
                alt=""
              />
            </span>
            <span className="w-55 h-64 -mt-3 ml-7 z-6 flex-shrink-0">
              <img
                loading="lazy"
                className="w-full h-full object-contain"
                src="https://ik.imagekit.io/wcmq9ntmo/fit%20&%20flex/HighProteinMuesliFOP_1100x-removebg-preview.webp?updatedAt=1753078475914"
                alt=""
              />
            </span>
          </div>
          <div className="hero flex flex-col justify-center items-center w-full  max-w-full">
            <h1 className="flex justify-center gap-3 font-[American_Caption] text-[#3B0017] text-4xl sm:text-6xl lg:text-8xl text-center">
              <span className="fit">Fit</span> <span className="and z-0">&</span><span className="flex">Flex</span> 
            </h1>
            <div className="hero-last flex items-center justify-center flex-wrap lg:flex-nowrap gap-2 lg:gap-0 max-w-full">
              <svg
                className="star text-yellow-400 flex-shrink-0"
                id="svg-star"
                width="60"
                height="60"
                viewBox="0 0 118 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.6134 0C58.6134 0 53.3553 68.0096 0 92.2761C0 92.2761 50.7796 108.196 58.6134 181C66.4428 108.196 117.004 92.2761 117.004 92.2761C63.6447 68.0096 58.6134 0 58.6134 0Z"
                  fill="currentColor"
                ></path>
              </svg>

              <p className="slogen flex gap-1 lg:gap-2 font-[obvisouly] text-[#3B0017] text-4xl   flex-wrap justify-center text-center px-2">
                <span>LIGHTER,</span>
                <span>LEANER</span>
                <span>&</span>
                <span>FULL</span>
                <span>OF</span>
                <span>PROTEIN —</span>
                <span>WAY</span>
                <span>BETTER</span>
                <span>THAN</span>
                <span>POPCORN</span>
              </p>
              <svg
                className="star text-yellow-400 flex-shrink-0"
                id="svg-star"
                width="60"
                height="60"
                viewBox="0 0 118 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.6134 0C58.6134 0 53.3553 68.0096 0 92.2761C0 92.2761 50.7796 108.196 58.6134 181C66.4428 108.196 117.004 92.2761 117.004 92.2761C63.6447 68.0096 58.6134 0 58.6134 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
       {/* <CanvasAnimation className="cvna" /> */}
    </>
  );
};

export default Home;
