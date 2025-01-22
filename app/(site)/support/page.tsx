
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suporte - New Gep",
  description: "Página de suporte",
  // other metadata
};

const SupportPage = () => {


  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;


