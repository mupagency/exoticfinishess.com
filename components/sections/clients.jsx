import { HeadlineGroup } from "components/shared/headlines";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ClientsSection = () => {
  return (
    <div className="px-4 mx-auto">
      <div className="mb12 md:mb-24">
        <HeadlineGroup category="Our" title="Clients" />
      </div>
      <Swiper autoplay={{ delay: 4000, disableOnInteraction: false }} loop={true} modules={[Autoplay]}>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-4 gap-8 mx-auto max-w-[1920px] pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-versace.png" alt="Versace" width="171" height="201" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-tide.png" alt="Tide" width="195" height="195" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-apple.png" alt="Apple" width="132" height="162" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-calvin-klein.png" alt="Calvin Klein" width="132" height="162" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1920px] pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-pandora.png" alt="Pandora" width="480" height="101" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-michael-kors.png" alt="Michael Kors" width="752" height="72" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1920px] pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-qkapital-group.png" alt="QKapital Group" width="528" height="143" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-nordstrom.png" alt="NordStrom" width="571" height="72" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1920px] pb-8 place-items-center h-full">
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-zurikate.png" alt="" width="646" height="141" />
            </div>
            <div className="mx-auto max-w-xs">
              <img src="/images/clients/client-lululemon.png" alt="" width="627" height="121" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSection;
