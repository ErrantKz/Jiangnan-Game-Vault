
import { motion, AnimatePresence } from "framer-motion";
 
type Props = {
  children: React.ReactNode;
  animationType?: "fade" | "slide";
};
 
function SmoothMount({ 
  children,
  animationType = "fade" 
}: Props) {
 
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 }
    }
  };
 
  return (
    <AnimatePresence mode="wait">
      <motion.div  
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants[animationType]}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full h-full" 
      >
        {children}
      </motion.div> 
    </AnimatePresence>
  );
}

export default SmoothMount;