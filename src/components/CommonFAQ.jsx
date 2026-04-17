import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqVariantClasses = {
  plain: {
    section: "bg-white px-6 py-24 sm:px-12 lg:px-24",
    container: "mx-auto grid max-w-[1240px] grid-cols-1 gap-16 items-start lg:grid-cols-2",
    imageWrap: "w-full h-full min-h-[500px]",
    imageClass: "h-full w-full object-cover rounded-none",
    accordionWrap: "w-full border-t border-gray-200",
    rowClass: "border-b border-gray-200",
    buttonClass: "group flex w-full items-center justify-between py-6 text-left transition-all",
    answerClass: "pl-10 pr-4 text-[15px] leading-relaxed text-[#64748b]",
    useMinus: true,
    footerBorder: false,
  },
  contained: {
    section: "max-w-7xl mx-auto bg-white px-6 py-20 font-sans antialiased",
    container: "flex flex-col items-center gap-12 lg:flex-row",
    imageWrap: "flex-1 w-full",
    imageClass: "h-full w-full object-cover",
    imageInner: "aspect-square w-full overflow-hidden",
    accordionWrap: "flex-1 w-full divide-y divide-gray-100 border-t border-gray-100",
    rowClass: "w-full",
    buttonClass:
      "w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:bg-gray-50/50",
    answerClass: "pl-11 pr-8 text-[15px] leading-relaxed text-[#718096]",
    useMinus: false,
    footerBorder: true,
  },
};

const CommonFAQ = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const variant = faqVariantClasses[faq.variant] ?? faqVariantClasses.contained;

  return (
    <section className={variant.section}>
      <div className={variant.container}>
        <div className={variant.imageWrap}>
          <div className={variant.imageInner ?? ""}>
            <img
              src={faq.image.src}
              alt={faq.image.alt}
              className={variant.imageClass}
            />
          </div>
        </div>

        <div className={variant.accordionWrap}>
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className={variant.rowClass}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={variant.buttonClass}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="min-w-[24px] text-[16px] font-bold text-[#1A202C]">
                      {item.id}.
                    </span>
                    <span className="text-[16px] font-bold tracking-tight text-[#1A202C]">
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-[#1e293b]">
                    {variant.useMinus ? (
                      isOpen ? (
                        <Minus size={20} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} strokeWidth={2.5} />
                      )
                    ) : (
                      <Plus
                        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className={variant.answerClass}>{item.answer}</p>
                </div>
              </div>
            );
          })}
          {variant.footerBorder ? <div className="border-b border-gray-100" /> : null}
        </div>
      </div>
    </section>
  );
};

export default CommonFAQ;
