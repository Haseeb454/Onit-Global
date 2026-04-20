import { motion } from "framer-motion";

const CommonHero = ({ title, subtitle, breadcrumbLabel }) => {
  return (
    <motion.section
      className="bg-[#F4F9FF] px-6 py-[100px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 inline-flex items-center rounded-full bg-[#e8eef7] px-[18px] py-[6px]">
          <nav className="flex items-center gap-1 text-[13px] font-medium tracking-tight text-[#4b5563]">
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-[#792f6c]">{breadcrumbLabel}</span>
          </nav>
        </div>

        <h1 className="mb-6 text-[62px] font-[700] leading-[1.1] tracking-[-0.02em] text-[#1e293b]">
          {title}
        </h1>

        <p className="text-[17px] leading-[30px] text-[#4b5563]">{subtitle}</p>
      </div>
    </motion.section>
  );
};

export default CommonHero;
