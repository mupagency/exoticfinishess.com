export const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};

export const MinusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  );
};

export const ScrollDownIcon = ({type = "black"}) => {
  if (type === "white") {
    return <img src="/images/icons/icon-scroll-white.png" alt="Chevron Down" width={20} height={18} />;  
  }
  return <img src="/images/icons/icon-scroll-black.png" alt="Chevron Down" width={21} height={18} />;
}

export const FacebookIcon = () => {
  return <img src="/images/icons/facebook-icon.png" alt="Facebook Icon Exotic Finishess" width={47} height={47} />
}

export const InstagramIcon = () => {
  return <img src="/images/icons/instagram-icon.png" alt="Instagram Icon Exotic Finishess" width={47} height={47} />
}

export const EmailIcon = () => {
  return <img src="/images/icons/email-icon.png" alt="Email Icon Exotic Finishess" width={38} height={27} />
}
export const PinIcon = () => {
  return <img src="/images/icons/pin-icon.png" alt="Pin Location Icon Exotic Finishess" width={24} height={34} />
}
export const PhoneIcon = () => {
  return <img src="/images/icons/phone-icon.png" alt="Phone Icon Exotic Finishess" width={30} height={30} />
}