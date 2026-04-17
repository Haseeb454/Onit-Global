import {
  AlertTriangle,
  BarChart3,
  Box,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCheck,
  Globe,
  Layers,
  Link2,
  Lock,
  Paintbrush,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  User,
  Zap,
  // Naye missing icons jo maine add kiye hain:
  Layout,
  Users,
  Palette,
  Image,
  Printer,
  PenTool,
  PieChart,
  Truck,
  Award,
  Cpu,
  Wifi,
  Activity,
  Code,
  Terminal,
  Calculator,
} from "lucide-react";

const iconMap = {
  AlertTriangle,
  BarChart3,
  Box,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCheck,
  Globe,
  Layers,
  Link2,
  Lock,
  Paintbrush,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  User,
  Zap,
  // Mapping table mein bhi add kar diye:
  Layout,
  Users,
  Palette,
  Image,
  Printer,
  PenTool,
  PieChart,
  Truck,
  Award,
  Cpu,
  Wifi,
  Activity,
  Code,
  Terminal,
  Calculator,
};

const includeVariantClasses = {
  compact: {
    section: "bg-white py-24 px-6 sm:px-12 lg:px-24 w-full",
    container: "max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24",
    dividerClass: "border-t border-gray-100",
    iconWrapClass:
      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-50",
    titleClass: "text-[#1e293b] text-[56px] font-[800] leading-[1.1] mb-8",
    descClass: "max-w-[480px] text-[16px] leading-[28px] text-[#64748b]",
  },
  spacious: {
    section: "max-w-7xl mx-auto px-8 py-24 font-sans antialiased text-[#1A202C] bg-white",
    container: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",
    dividerClass: "h-[1px] w-full bg-[#E2E8F0]",
    iconWrapClass:
      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7F8FA]",
    titleClass: "text-[56px] leading-[1.1] font-bold tracking-tight text-[#1A202C]",
    descClass: "max-w-md text-[16px] leading-relaxed text-[#718096]",
  },
};

const ServiceIncludesSection = ({ includes }) => {
  const variant =
    includeVariantClasses[includes.variant] ?? includeVariantClasses.spacious;

  if (!includes) return null;

  return (
    <section className={variant.section}>
      <div className={variant.container}>
        <div>
          <span className="mb-6 inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-[13px] font-semibold text-[#C1385E]">
            {includes.badge}
          </span>
          <h2 className={variant.titleClass}>
            {includes.title.prefix} <br />
            <span className="text-[#C1385E]">{includes.title.highlight}</span>
          </h2>
          <p className={variant.descClass}>{includes.description}</p>
        </div>

        <div className="flex flex-col">
          {includes.features.map((feature, index) => {
            const Icon = iconMap[feature.iconKey];

            return (
              <div key={feature.title}>
                <div className="flex items-start gap-6 py-8">
                  <div className={variant.iconWrapClass}>
                    {Icon ? (
                      <Icon
                        className="h-5 w-5"
                        style={{ color: includes.iconColor }}
                      />
                    ) : (
                      /* Fallback icon agar koi miss ho jaye */
                      <Code2 className="h-5 w-5" style={{ color: includes.iconColor }} />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] font-bold text-[#1A202C]">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] text-[#718096]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {index !== includes.features.length - 1 ? (
                  <div className={variant.dividerClass} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludesSection;