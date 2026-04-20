import { motion } from "framer-motion";

const variantClasses = {
  "split-full": {
    section: "bg-white py-20 w-full",
    container: "w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
    textWrap: "pl-6 sm:pl-12 lg:pl-24 pr-6 lg:pr-0",
    imageWrap: "relative w-full h-full min-h-[400px]",
    imageClass: "w-full h-full object-cover rounded-l-[20px] shadow-sm",
  },
  contained: {
    section: "max-w-7xl mx-auto px-6 py-16 font-sans antialiased text-[#1A202C]",
    container: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
    textWrap: "flex-1 space-y-8",
    imageWrap: "flex-1 w-full",
    imageClass: "w-full h-auto object-cover aspect-[4/3] lg:aspect-auto rounded-2xl shadow-sm",
  },
};

const ServiceOverviewSection = ({ overview }) => {
  const variant = variantClasses[overview.variant] ?? variantClasses.contained;

  return (
    <motion.section
      className={variant.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={variant.container}>
        <div className={variant.textWrap}>
          <h2 className="mb-6 text-[52px] font-[900] leading-[1.1] text-[#1e293b]">
            {overview.titleLines.map((line, index) => (
              <span
                key={line}
                className={
                  overview.mutedLineIndex === index ? "block text-gray-500" : "block"
                }
              >
                {line}
              </span>
            ))}
          </h2>

          <p className="mb-10 max-w-[540px] text-[17px] leading-[28px] text-[#64748b]">
            {overview.description}
          </p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {overview.bulletPoints.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span
                  className="h-[10px] w-[10px] shrink-0 rounded-full"
                  style={{ backgroundColor: overview.bulletColor }}
                />
                <span className="text-[16px] font-medium text-[#4b5563]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={variant.imageWrap}>
          <img
            src={overview.image.src}
            alt={overview.image.alt}
            className={variant.imageClass}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceOverviewSection;
