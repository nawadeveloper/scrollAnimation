import { motion, MotionStyle } from "framer-motion";
import { twMerge } from "tailwind-merge";

type ParallaxImageProps = {
  style?: MotionStyle;
  imgPath: string;
  className: string;
};

const ParallaxImage = ({ style, imgPath, className }: ParallaxImageProps) => {
  return (
    <motion.div
      style={style}
      className={twMerge("absolute w-80 aspect-video overflow-clip", className)}
    >
      <img className="w-full h-full object-cover" src={imgPath} />
    </motion.div>
  );
};

export default ParallaxImage;
