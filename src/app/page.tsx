"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Feather, Quote, Users } from 'lucide-react';

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
        <HeroSplit
          title="Welcome to Eclectica"
          description="Where words come alive and creativity thrives Join our dynamic literary community of writers, poets, and book fckers right at the heart of our college"
          tag="Literary Club"
          tagIcon={BookOpen}
          buttons={[
            {
              text: "Join Our Community",
              href: "contact"
            },
            {
              text: "Explore Activities",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9572390/pexels-photo-9572390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Students engaged in literary discussions"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Literary Activities"
          description="Discover the diverse range of creative and intellectual pursuits that make Eclectica a thriving hub for literary minds"
          tag="Activities"
          tagIcon={Feather}
          features={[
            {
              id: "01",
              title: "Creative Writing Workshops",
              description: "Weekly sessions focused on developing your unique voice through guided exercises, peer feedback, and expert mentorship",
              imageSrc: "https://images.pexels.com/photos/9301876/pexels-photo-9301876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Students participating in creative writing workshop"
            },
            {
              id: "02",
              title: "Poetry Readings & Open Mic",
              description: "Monthly events where members showcase original work, from spoken word poetry to dramatic readings in a supportive environment",
              imageSrc: "https://images.pexels.com/photos/1887609/pexels-photo-1887609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Poetry reading event with students performing"
            },
            {
              id: "03",
              title: "Book Club Discussions",
              description: "Engaging discussions about contemporary and classic literature, exploring themes that resonate with our generation",
              imageSrc: "https://images.pexels.com/photos/4861395/pexels-photo-4861395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Students discussing books in a circle"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Members Say"
          description="Hear from fellow students about their transformative experiences with Eclectica"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "English Major",
              company: "Junior Year",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Alex Chen",
              role: "Creative Writing",
              company: "Senior Year",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3762803/pexels-photo-3762803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alex Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Philosophy Major",
              company: "Sophomore Year",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7972497/pexels-photo-7972497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "James Thompson",
              role: "Journalism",
              company: "Graduate Student",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3762803/pexels-photo-3762803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about joining and participating in Eclectica"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How can I join Eclectica?",
              content: "Joining is simple! Attend any of our weekly meetings, fill out a brief membership form, and participate in our welcoming community. No experience required - just passion for literature and creativity."
            },
            {
              id: "2",
              title: "Do I need to be an English major to join?",
              content: "Absolutely not! Eclectica welcomes students from all majors and backgrounds. We believe diverse perspectives enrich our literary discussions and creative endeavors."
            },
            {
              id: "3",
              title: "What are the meeting times and locations?",
              content: "We meet every Thursday at 7 PM in the Student Union Building, Room 204. We also host special events and workshops throughout the semester - check our calendar for updates."
            },
            {
              id: "4",
              title: "Is there a membership fee?",
              content: "Eclectica is completely free to join! We're funded through student activities fees and occasional fundraising events that also serve as community building opportunities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          title="Ready to Begin Your Literary Journey?"
          description="Sign up for our newsletter to stay updated on meetings, events, and opportunities. Join our community of passionate writers and readers."
          tagIcon={Users}
          inputPlaceholder="Enter your college email"
          buttonText="Join Eclectica"
          termsText="By signing up, you'll receive updates about club activities and events. You can unsubscribe at any time."
          imageSrc="https://images.pexels.com/photos/6334916/pexels-photo-6334916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="College library reading space"
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