import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-tech.png";

function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-deep"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0">
        <img src={heroImage} alt="Tech background" className="h-full w-full object-cover opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/50 to-deep/60" />
      </div>

      <div className="container-wrap relative py-20 sm:py-24 lg:py-30">
        <p className="mb-4 text-sm text-white bg-black-200 px-4 py-2 rounded-md">Innovate. Scale. Succeed</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Crafting Digital <br /> Products That  <br /> Drive
           <span className="text-pink-500"> Growth</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-gray-200 sm:text-lg">
        We design and develop software tailored to your business needs — helping you scale faster, innovate smarter, and achieve lasting impact.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-pink-gradient px-11 py-4 text-sm font-semibold text-white transition hover:opacity-90">
          Contact Us
        </Link>
      </div>
    </motion.section>
  );
}

export default Hero;