import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftRight = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const scrollDirection = (direction) => {
    if (direction === "left") {
      controls.start({ x: -100 });
    } else if (direction === "right") {
      controls.start({ x: 100 });
    }
  };

  return (
    <div>
      <button onClick={() => scrollDirection("left")}>Left</button>
      <button onClick={() => scrollDirection("right")}>Right</button>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={variants}
      >
        Content to animate
      </motion.div>
    </div>
  );
};

export default LeftRight;
