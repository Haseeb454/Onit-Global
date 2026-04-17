import { Link, useParams } from "react-router-dom";
import CommonFAQ from "../components/CommonFAQ";
import CommonHero from "../components/CommonHero";
import ContactSection from "../components/ContactSection";
import DreamProject from "../components/DreamProject";
import ServiceIncludesSection from "../components/ServiceIncludesSection";
import ServiceOverviewSection from "../components/ServiceOverviewSection";
import TechStack from "../components/TechStack";
import { servicesData } from "../data/services";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <section className="bg-[#F4F9FF] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B82968]">
            Service Not Found
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-800">
            This service page is not available.
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            The requested service slug does not match any configured service.
          </p>
          <Link
            to="/services"
            className="inline-flex rounded-md bg-pink-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
          >
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <CommonHero {...service.hero} />
      <ServiceOverviewSection overview={service.overview} />
      <CommonFAQ faq={service.faq} />
      <ServiceIncludesSection includes={service.includes} />
      <TechStack />
      <div className="bg-white py-6" />
      <ContactSection />
      <DreamProject />
    </>
  );
};

export default ServiceDetailPage;
