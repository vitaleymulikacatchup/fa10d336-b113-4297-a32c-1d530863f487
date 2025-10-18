"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';

const assetMap = [
  {"id":"lamborghini-logo","url":"https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed close-up photo of a Lamborghini logo on a sleek black car hood, symbolizing luxury and style."},
  {"id":"hero-lamborghini","url":"https://images.pexels.com/photos/27985144/pexels-photo-27985144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern luxury sports car with custom red wheels in a showroom."},
  {"id":"about-lamborghini","url":"https://images.pexels.com/photos/34281943/pexels-photo-34281943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Glass and steel"},
  {"id":"feature-lamborghini","url":"https://images.pexels.com/photos/16124178/pexels-photo-16124178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image showcasing the modified exhaust system of a Lamborghini Huracan parked outdoors."},
  {"id":"contact-lamborghini","url":"https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Showroom featuring luxury sports cars, Lamborghini models, with sleek design and modern architecture."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <NavbarStyleMinimal
            logoSrc={assetMap.find(a => a.id === 'lamborghini-logo')?.url ?? "/public/images/placeholder.webp"}
            brandName="Lamborghini"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroSplit
            title="Experience the Thrill"
            description="Discover the power of Lamborghini."
            imageSrc={assetMap.find(a => a.id === 'hero-lamborghini')?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Learn More", href: "#about" }, { text: "Contact Us", href: "#contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SplitAbout
            title="About Lamborghini"
            description="Pioneering the future of high-performance cars."
            bulletPoints={[
              { title: "Innovation", description: "Continuous pursuit of excellence." },
              { title: "Heritage", description: "Decades of engineering mastery." }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-lamborghini')?.url ?? "/public/images/placeholder.webp"}
            imageAlt="About Lamborghini"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Get In Touch"
            title="Connect with Us"
            description="Reach out to experience the excellence of Lamborghini."
            imageSrc={assetMap.find(a => a.id === 'contact-lamborghini')?.url ?? "/public/images/placeholder.webp"}
            imageAlt="Lamborghini Dealership"
            mediaPosition="right"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
