import MainLayout from "components/layouts/main";
import ContactSection from "components/sections/contact";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="relative grid items-center min-h-[calc(100vh-60px)]">
        <div className="relative z-10">
          <div className="mb-8"></div>
          <ContactSection />
        </div>

        <div className="hidden md:block absolute top-3/4 left-48 floating z-0">
          <img src="/images/icons/icon-ring.png" alt="floating ring" width={49} height={49} />
        </div>
        <div className="hidden md:block absolute top-1/4 right-48 floating delay-200 z-0">
          <img src="/images/icons/icon-ring.png" alt="floating ring" width={49} height={49} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
