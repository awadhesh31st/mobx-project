import { observer } from "mobx-react";
import { motion } from "framer-motion";
import { CardUiProps } from "./type";

const CardUi: React.FC<CardUiProps> = observer(({ title }) => {
  const target = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  };
  return (
    <motion.div
      className="relative overflow-hidden w-52 h-52 rounded-3xl"
      {...target}
    >
      <img
        src={`https://picsum.photos/seed/picsum/200`}
        className="relative z-0 block h-[150%] min-w-full object-cover"
        alt={title}
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 z-[1] text-white bg-gradient-to-b from-zinc-400 to-slate-900 opacity-60">
        <div className="absolute bottom-5 px-8 text-left">
          <h3 className="font-bold leading-5">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
});

export default CardUi;
