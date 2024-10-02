import { useRef } from "react";
import ParallaxImage from "./components/ParalaxImage";
import RandomContent from "./components/RandomContent";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const targetRef = useRef(null);

  const sections = 7;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const maskImage = useTransform(
    scrollYProgress,
    [0, 1.5 / sections],
    [
      "linear-gradient(#000 100%, transparent 100%)",
      "linear-gradient(#000 0%, transparent 0%)",
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [2 / sections, 3.5 / sections, 4.5 / sections, 6 / sections],
    [1, 0.5, 0.5, 1]
  );

  const roatateTimeline = [
    2 / sections,
    2.5 / sections,
    3.5 / sections,
    4.5 / sections,
    5 / sections,
    6 / sections,
  ];

  const rotateX = useTransform(scrollYProgress, roatateTimeline, [
    "0deg",
    "-15deg",
    "0deg",
    "0deg",
    "-15deg",
    "0deg",
  ]);
  const rotateY = useTransform(scrollYProgress, roatateTimeline, [
    "0deg",
    "20deg",
    "0deg",
    "0deg",
    "20deg",
    "0deg",
  ]);
  const rotateZ = useTransform(scrollYProgress, roatateTimeline, [
    "0deg",
    "3deg",
    "0deg",
    "0deg",
    "3deg",
    "0deg",
  ]);

  const y1 = useTransform(
    scrollYProgress,
    [3 / sections, 5 / sections],
    [100, -200]
  );
  const y2 = useTransform(
    scrollYProgress,
    [3 / sections, 5 / sections],
    [-200, 200]
  );
  const y3 = useTransform(
    scrollYProgress,
    [3 / sections, 5 / sections],
    [0, -500]
  );
  const y4 = useTransform(
    scrollYProgress,
    [3 / sections, 5 / sections],
    [100, 0]
  );

  return (
    <ReactLenis root>
      <RandomContent>random top content</RandomContent>

      {/* main content */}

      <div ref={targetRef}>
        <div style={{ perspective: "2000px" }} className="sticky top-0">
          <motion.div
            style={{ scale, rotateX, rotateY, rotateZ }}
            className="w-full h-screen relative"
          >
            <div className="h-full grid place-items-center bg-black text-white text-8xl font-bold">
              <h2>nawaCode</h2>
            </div>
            <motion.div
              style={{
                maskImage,
              }}
              className="absolute inset-0 bg-background grid gap-5 justify-center content-center"
            >
              <h2 className="text-8xl font-bold">.PROJECTS</h2>
              <p className="text-center">
                CUSTORMER PROJECTS, PERSONAL PROJECTS,
                <br />
                SOME RESEARCH AND PLAYGROUND
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="h-[300dvh]" />

        <div className="relative h-screen">
          <ParallaxImage
            style={{ y: y1 }}
            imgPath="img1.jpg"
            className="top-0 left-5"
          />
          <ParallaxImage
            style={{ y: y2 }}
            imgPath="img2.jpg"
            className="bottom-0 left-10"
          />
          <ParallaxImage
            style={{ y: y3 }}
            imgPath="img3.jpg"
            className="top-0 right-5"
          />
          <ParallaxImage
            style={{ y: y4 }}
            imgPath="img4.jpg"
            className="bottom-0 right-5"
          />
        </div>

        <div className="h-[300dvh]" />
      </div>

      <RandomContent>random bottom content</RandomContent>
    </ReactLenis>
  );
};

export default App;
