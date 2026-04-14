import {
  Code2,
  Smartphone,
  ShieldCheck,
  ShoppingCart,
  Cloud,
  Search,
  Monitor,
  Palette,
  Settings,
  Calculator,
  Cpu,
  Package,
} from "lucide-react";

const services = [
  { 
    icon: Code2, 
    title: "Web Development", 
    desc: "Build modern, responsive, and scalable websites that deliver both performance and user engagement." 
  },
  { 
    icon: Smartphone, 
    title: "Mobile Applications", 
    desc: "From idea to launch, we build engaging apps that work smoothly across iOS and Android platforms." 
  },
  { 
    icon: ShieldCheck, 
    title: "Cyber Security", 
    desc: "Shield your business with tailored cyber security strategies that prevent threats and safeguard operations." 
  },
  { 
    icon: ShoppingCart, 
    title: "E-Commerce Solutions", 
    desc: "Delivering custom e-commerce solutions that combine performance, scalability, and user-friendly design." 
  },
  { 
    icon: Cloud, 
    title: "Web Hosting", 
    desc: "Get reliable hosting services with 99.9% uptime, strong security, and round-the-clock support." 
  },
  { 
    icon: Search, 
    title: "SEO Services", 
    desc: "We optimize your website with proven SEO strategies to increase traffic, leads, and conversions." 
  },
  { 
    icon: Monitor, 
    title: "UI/UX Design", 
    desc: "Transforming ideas into engaging digital experiences with modern UI/UX practices." 
  },
  { 
    icon: Palette, 
    title: "Graphic Design", 
    desc: "Building strong brand identities with stunning and memorable graphic designs." 
  },
  { 
    icon: Settings, 
    title: "ERP Solutions", 
    desc: "Simplify and automate your business operations with powerful ERP solutions tailored to your needs." 
  },
  { 
    icon: Calculator, 
    title: "POS Solutions", 
    desc: "Enhance your business operations with smart and reliable POS solutions." 
  },
  { 
    icon: Cpu, 
    title: "IoT Solutions", 
    desc: "Leverage the power of IoT to optimize operations, reduce costs, and deliver intelligent services." 
  },
  { 
    icon: Package, 
    title: "Custom Software", 
    desc: "Empower your business with software designed exclusively for your workflows and challenges." 
  },
];

function ServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-wrap mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary bg-gray-100 rounded-full px-4 py-1 inline-block">
            Our Services
          </p>
        </div>
        <h2 className="mt-3 text-3xl font-bold text-deep sm:text-5xl text-center leading-tight">
          Explore Our Software <br /> <span className="text-primary">Services</span>
        </h2>
        <p className="text-sm text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We create digital solutions that help businesses grow. From software to apps and web <br className="hidden md:block" /> platforms, our services deliver real impact.
        </p>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article 
              key={title} 
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep leading-snug">{title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;