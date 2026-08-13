import { useRef } from "react";
import TopSection from "@/components/index-page/TopSection";
import ApproachesMethodSection from "@/components/index-page/ApproachesMethodSection";
import B2bFaqReviewsSection from "@/components/index-page/B2bFaqReviewsSection";
import ContactsEthicsFooter, { ContactsEthicsFooterHandle } from "@/components/index-page/ContactsEthicsFooter";

export default function Index() {
  const contactsRef = useRef<ContactsEthicsFooterHandle>(null);

  const scrollToContacts = (preset?: string) => {
    if (preset) contactsRef.current?.setMessagePreset(preset);
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-rubik bg-[#faf7f4] text-[#2c2420] min-h-screen overflow-x-hidden">
      <TopSection />
      <ApproachesMethodSection onScrollToContacts={scrollToContacts} />
      <B2bFaqReviewsSection />
      <ContactsEthicsFooter ref={contactsRef} />
    </div>
  );
}
