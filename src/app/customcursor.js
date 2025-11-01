"use client";



// WITHOUT LIQUID GLASS, NO BREATHING, NO FOG

import React, { useEffect, useState } from "react";

export default function GoldenTrailCursor() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    // Handle mouse move
    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    // Handle hover states on interactive elements
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Initial setup for trail circles
    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    // Animate trail
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.style.opacity = 1 - index / circles.length;

        // Smooth follow
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.25;
        y += (nextCircle.y - y) * 0.25;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Cleanup
    return () => {
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className={`circle fixed w-6 h-6 rounded-full pointer-events-none z-[9999] 
            bg-gradient-to-r from-[#f6c85f] to-[#e0aa3e] transition-all ease-out duration-150 
            ${hovered ? "scale-125 glow" : "scale-100"}`}
        ></div>
      ))}
    </>
  );
}





// WITH GOLDEN CURSOR GLOWING AND BREATING



// import React, { useEffect } from "react";


// export default function GoldenTrailCursor() {
//   useEffect(() => {
//     const coords = { x: 0, y: 0 };
//     const circles = document.querySelectorAll(".circle");

//     window.addEventListener("mousemove", (e) => {
//       coords.x = e.clientX;
//       coords.y = e.clientY;
//     });

//     circles.forEach((circle) => {
//       circle.x = 0;
//       circle.y = 0;
//     });

//     function animateCircles() {
//       let x = coords.x;
//       let y = coords.y;

//       circles.forEach((circle, index) => {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";
//         circle.style.scale = (circles.length - index) / circles.length;
//         circle.style.opacity = 1 - index / circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.25;
//         y += (nextCircle.y - y) * 0.25;
//       });

//       requestAnimationFrame(animateCircles);
//     }

//     animateCircles();
//   }, []);

//   return (
//     <>
//       {Array.from({ length: 25 }).map((_, i) => (
//         <div key={i} className="circle"></div>
//       ))}
//     </>
//   );
// }



