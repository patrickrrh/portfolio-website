import { motion } from "framer-motion";

export const SkeletonTwo = () => {
  const images = [
    { src: "/images/Manu1.png", rotate: -5 },
    { src: "/images/Manu2.png", rotate: 5 }, 
  ];
  
    const imageVariants = {
      whileHover: {
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      },
      whileTap: {
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      },
    };
    return (
      (
      <div
        className="relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden">
        <div className="flex flex-row justify-center">
          {images.map((image, idx) => (
            <motion.div
              variants={imageVariants}
              key={idx + 1}
              style={{
                rotate: image.rotate,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
              <img
                src={image.src}
                alt="image"
                className="rounded-lg h-[140px] w-[65px] md:h-[373px] md:w-[172px] object-cover shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>)
    );
  };