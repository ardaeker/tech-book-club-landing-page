import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Steps } from "@/components/steps";
import { Pricing } from "@/components/pricing";
import { Testimonial } from "@/components/testimonial";
import { Footer } from "@/components/footer";
import { Wrapper } from "@/components/wrapper";

export default function Page() {
  return (
    <Wrapper>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Testimonial />
      <Footer />
    </Wrapper>
  );
}
