import MainLayout from "components/layouts/main";
import ContactSection from "components/sections/contact";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="relative grid items-center min-h-[calc(100vh-56px)]">
        <div className="relative z-10">
          <ContactSection />
        </div>

        <div className="absolute top-3/4 left-48 floating z-0">
          <img src="/images/icons/icon-ring.png" alt="floating ring" width={49} height={49} />
        </div>
        <div className="absolute top-1/4 right-48 floating z-0">
          <img src="/images/icons/icon-ring.png" alt="floating ring" width={49} height={49} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
