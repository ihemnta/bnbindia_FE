import React, { useState } from "react";
import IconWrapper from "../Wrapper/IconWrapper";
import ChatComponent from "../Chat/Chat";
import useIsMobile from "../hooks/useIsMobile";

const WhatsappRedirect = () => {
  const isMobileDevice = useIsMobile();
  const [showChatComponent, setShowChatComponent] = useState(false);

  console.log("is mobile device", isMobileDevice);

  const redirectToWhatsApp = () => {
    const phoneNumber = "09811001353";

    if (isMobileDevice) {
      // Open WhatsApp with a predefined message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi`;
      window.open(whatsappUrl, "_blank");
    } else {
      // Show chat component in the same tab
      setShowChatComponent(true);
    }
  };

  return (
    <div>
      {showChatComponent ? (
        <ChatComponent onClose={() => setShowChatComponent(false)} />
      ) : (
        <div
          className="fixed bottom-8 right-8 cursor-pointer transform transition-transform duration-200 hover:scale-110 bg-black text-white rounded-full p-3"
          onClick={redirectToWhatsApp}
        >
          <IconWrapper
            iconPath={`/assets/svgs/${
              isMobileDevice ? "whatsapp.svg" : "chat-help.svg"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default WhatsappRedirect;
