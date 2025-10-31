"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Feather, Quote, Users, Sparkles, Target, Zap, Coffee, BookmarkIcon, Palette } from 'lucide-react';

// Asset map for resolving asset:// references
const assetMap = [
  {
    id: "hero-bg",
    url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Magical library with floating books and golden light"
  },
  {
    id: "literary-atmosphere",
    url: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Vintage typewriter surrounded by scattered manuscripts"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Activities", id: "feature" },
            { name: "Members", id: "testimonial" },
            { name: "FAQ", id: "faq" },
            { name: "Join Us", id: "contact" }
          ]}
          brandName="Eclectica"
          button={{
            text: "Join Club",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Where Stories Ignite & Dreams Take Flight"
          description="Step into Eclectica, where every word is a spark and every story a universe waiting to unfold. Join a community of passionate storytellers, dreamers, and literary adventurers who transform imagination into art."
          tag="Literary Sanctuary"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Begin Your Journey",
              href: "contact"
            },
            {
              text: "Discover Magic",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Magical library with floating books and golden light"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Realms of Creative Expression"
          description="Embark on transformative journeys through our immersive literary experiences, each designed to unlock your creative potential and forge lasting connections"
          tag="Creative Odyssey"
          tagIcon={Palette}
          features={[
            {
              id: "01",
              title: "Enchanted Writing Circles",
              description: "Mystical gatherings where words dance and stories bloom under the guidance of literary mentors, transforming whispered ideas into powerful narratives",
              imageSrc: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Vintage typewriter surrounded by scattered manuscripts"
            },
            {
              id: "02",
              title: "Moonlit Poetry Soirées",
              description: "Evening sanctuaries where souls bare their hearts through verse, creating intimate spaces for poetic expression and emotional connection",
              imageSrc: "https://images.pexels.com/photos/1887609/pexels-photo-1887609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Poetry reading event under ambient lighting"
            },
            {
              id: "03",
              title: "Literary Time Travel",
              description: "Journey through epochs of storytelling as we explore timeless classics and contemporary masterpieces, discovering how literature shapes our world",
              imageSrc: "https://images.pexels.com/photos/4861395/pexels-photo-4861395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ancient and modern books creating bridges through time"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Voices from Our Literary Universe"
          description="Discover how Eclectica has transformed the creative journeys of fellow wordsmiths and storytellers"
          tag="Soul Stories"
          tagIcon={BookmarkIcon}
          testimonials={[
            {
              id: "1",
              name: "Luna Starweaver",
              role: "Dream Architect",
              company: "Third Year Explorer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Luna, radiating creative energy"
            },
            {
              id: "2",
              name: "Phoenix Wordsmith",
              role: "Story Alchemist",
              company: "Final Chapter",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3762803/pexels-photo-3762803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Phoenix, eyes bright with inspiration"
            },
            {
              id: "3",
              name: "River Thoughtdancer",
              role: "Philosophy Poet",
              company: "Second Year Sage",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7972497/pexels-photo-7972497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of River, contemplating life's mysteries"
            },
            {
              id: "4",
              name: "Storm Chronicle",
              role: "Truth Seeker",
              company: "Graduate Visionary",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3762803/pexels-photo-3762803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Storm, passionate about uncovering stories"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Unraveling the Mysteries"
          sideDescription="Navigate the pathways to joining our enchanted literary realm with these essential insights"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How does one enter this literary sanctuary?",
              content: "The gateway is simple yet profound! Attend one of our weekly gatherings, complete a brief scroll of introduction, and immerse yourself in our welcoming constellation of creatives. No prior literary spells required - only an open heart for words and wonder."
            },
            {
              id: "2",
              title: "Must I be a scholar of letters to belong?",
              content: "Never! Eclectica thrives on the beautiful diversity of minds and souls. Whether you study the stars, numbers, or healing arts - all perspectives weave together to create our rich tapestry of storytelling."
            },
            {
              id: "3",
              title: "When do the literary stars align for our meetings?",
              content: "Every Thursday when twilight approaches at 7 PM, we gather in the Student Union constellation, Chamber 204. Special ceremonies and workshops bloom throughout the seasons - consult our mystical calendar for ethereal updates."
            },
            {
              id: "4",
              title: "Is there a toll for accessing this creative realm?",
              content: "Eclectica flows freely like inspiration itself! Our sanctuary is sustained by the collective spirit of student activities and occasional community celebrations that double as magical bonding rituals."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Destiny Awaits"
          title="Ready to Weave Your Story into Our Tapestry?"
          description="Subscribe to our mystical missives and receive enchanted updates about our gatherings, ceremonies, and opportunities to expand your creative universe."
          tagIcon={Target}
          inputPlaceholder="Your magical portal (email)"
          buttonText="Join the Circle"
          termsText="By joining our constellation, you'll receive updates about literary adventures and mystical events. You may step away from the circle at any time."
          imageSrc="https://images.pexels.com/photos/6334916/pexels-photo-6334916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Enchanted college library sanctuary"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Club",
              items: [
                { label: "About Us", href: "about" },
                { label: "Activities", href: "feature" },
                { label: "Members", href: "testimonial" },
                { label: "Join Us", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Writing Tips", href: "https://writingcenter.college.edu" },
                { label: "Reading Lists", href: "https://library.college.edu" },
                { label: "Literary Magazines", href: "https://literarymagazines.college.edu" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Events Calendar", href: "https://events.college.edu/eclectica" }
              ]
            }
          ]}
          copyrightText="© 2025 | Eclectica Literary Club"
        />
      </div>
    </ThemeProvider>
  );
}