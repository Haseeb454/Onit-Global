import {
  Calculator,
  Cloud,
  Code2,
  Cpu,
  Monitor,
  Package,
  Palette,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { servicesGridContent, servicesGridData } from "../data/servicesGrid";

const iconMap = {
  Calculator,
  Cloud,
  Code2,
  Cpu,
  Monitor,
  Package,
  Palette,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
};

function ServicesGrid() {
  return (
    <motion.section
      className="bg-white py-16 sm:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-wrap mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary bg-gray-100 rounded-full px-4 py-1 inline-block">
            {servicesGridContent.badgeText}
          </p>
        </div>
        <h2 className="mt-3 text-3xl font-bold text-deep sm:text-5xl text-center leading-tight">
          {servicesGridContent.headingPrefix} <br />{" "}
          <span className="text-primary">{servicesGridContent.headingHighlight}</span>
        </h2>
        <p className="text-sm text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          {servicesGridContent.description}
        </p>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesGridData.map(({ iconKey, title, desc }) => {
            const Icon = iconMap[iconKey];

            return (
            <motion.article 
              key={title} 
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                {Icon ? <Icon size={24} /> : null}
              </div>
              <h3 className="text-lg font-bold text-deep leading-snug">{title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">{desc}</p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesGrid;