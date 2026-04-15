import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import DreamProject from "../components/DreamProject"
const Contact = () => {
  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="bg-[#F7FBFF] py-24 text-center">
        <div className="container-wrap">
          <h1 className="text-6xl font-bold text-slate-800">
          Contact <span className="text-[#B82968]">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-md text-gray-600">
          Have questions or ready to start your project? Our team is here to help — get in touch and let’s bring your vision to life.
          </p>
        </div>
      </section>
      <div className="mb-20"></div>
      <ContactSection/>
      <FAQSection/>
      <DreamProject/>
    </div>
  );
};
export default Contact;