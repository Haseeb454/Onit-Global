import React from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { statsBarData } from "../data/statsBar";

// Counter Component for individual numbers
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function StatsBar() {
  return (
    <section className="bg-[#0f172a] py-12">
      <div className="container-wrap grid gap-6 text-center sm:grid-cols-3">
        {statsBarData.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-extrabold text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;