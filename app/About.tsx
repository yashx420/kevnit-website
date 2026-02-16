// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function About() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.8", "end 0.5"],
//   });

//   const text =
//     "Our mission is to empower businesses with AI-driven solutions that enhance productivity, streamline operations, and unlock new possibilities.";
//   const words = text.split(" ");

//   return (
//     <section
//       id="about"
//       ref={containerRef}
//       className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex items-center justify-center"
//     >
//       <p className="text-4xl md:text-6xl font-bold leading-tight flex flex-wrap gap-x-4 gap-y-2 justify-center text-center">
//         {words.map((word, i) => {
//           const start = i / words.length;
//           const end = start + 1 / words.length;

//           return (
//             <Word key={i} progress={scrollYProgress} range={[start, end]}>
//               {word}
//             </Word>
//           );
//         })}
//       </p>
//     </section>
//   );
// }

// function Word({
//   children,
//   progress,
//   range,
// }: {
//   children: string;
//   progress: any;
//   range: [number, number];
// }) {
//   const opacity = useTransform(progress, range, [0.1, 1]);
//   const color = useTransform(progress, range, ["#808080", "#ffffff"]);

//   return (
//     <motion.span style={{ opacity, color }} className="relative">
//       {children}
//     </motion.span>
//   );
// }
