// "use client";

// import { motion, useAnimation } from "framer-motion";
// import clsx from "clsx";
// import { ReactNode, useEffect } from "react";

// interface TypewriterEffectProps {
//   words: ReactNode[];
//   className?: string;
//   cursorClassName?: string;
// }

// export function TypewriterEffect({
//   words,
//   className,
//   cursorClassName,
// }: TypewriterEffectProps) {
//   const controls = useAnimation();

//   useEffect(() => {
//     const totalDuration = 2; // seconds (same as typing duration)
//     const timer = setTimeout(() => {
//       controls.start({ opacity: 0 }); // fade out cursor after typing
//     }, totalDuration * 1000);
//     return () => clearTimeout(timer);
//   }, [controls]);

//   return (
//     <motion.div
//       className={clsx(
//         "relative inline-flex items-baseline leading-tight align-baseline",
//         className
//       )}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3 }}
//       style={{
//         lineHeight: 1.3,
//         verticalAlign: "middle",
//       }}
//     >
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: "100%" }}
//         transition={{
//           duration: 2, // typing duration
//           ease: "linear",
//         }}
//         className="overflow-hidden border-r-2 border-yellow-500 whitespace-nowrap inline-block"
//         style={{
//           display: "inline-flex",
//           alignItems: "baseline",
//           height: "auto", // ✅ fix cut-off letters
//         }}
//       >
//         {words.map((word, i) => (
//           <span key={i} className="inline-block align-baseline">
//             {word}
//           </span>
//         ))}
//       </motion.div>

//     </motion.div>
//   );
// }
"use client";

import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: ReactNode[];
  className?: string;
}

export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  const [showBorder, setShowBorder] = useState(true);

  useEffect(() => {
    const totalDuration = 2000; // typing duration in ms
    const timer = setTimeout(() => setShowBorder(false), totalDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={clsx(
        "relative inline-flex items-baseline leading-tight align-baseline",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        lineHeight: 1.3,
        verticalAlign: "middle",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2, // typing duration
          ease: "linear",
        }}
        className={clsx(
          "overflow-hidden whitespace-nowrap inline-block",
          showBorder && "border-r-2 border-yellow-500"
        )}
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          height: "auto",
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block align-baseline">
            {word}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
