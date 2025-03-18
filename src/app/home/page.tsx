
import { Banner } from "@/components/Banner";
import Count from "./count";
export default function Home() {
  return (
    <>
   <Banner 
      topic={true}
      firstTitle="elcome to"
      desc="Discover new opportunities and elevate your experience."
    />
    <Count/>
   
    </>

  );
}
