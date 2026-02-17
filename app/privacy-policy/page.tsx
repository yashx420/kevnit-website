"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { motion } from "framer-motion";

const policySections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "KevnitDigital.com is committed to safeguarding the privacy of its users and gives top priority to the protection of Your personal information. This privacy policy (“Privacy Policy”) is aimed at ensuring that You are aware of the nature of information We collect when You access the Site, the situations, if any, under which We may disclose it, and the manner in which We use such information. This Privacy Policy is applicable only to the Site, and not to any third party websites to which We may provide links on the Site. By using the Site You agree to the terms of this Privacy Policy.",
  },
  {
    id: "information-collection",
    title: "I. What type of Information do we collect?",
    items: [
      {
        subtitle: "a) Personal Information",
        text: "Generally, We collect only personal information You provide voluntarily, when You are (i) Registering on to the Site; (ii) Purchasing Digitized Works on the Site; (iii) Making enquiries on the Site; (iv) Contacting www.kevnitdigital.com (including customer service representatives, or other employees) by email; (v) Understanding user interests so that we can develop better content and services; and (vi) Promotional and advertising purposes, if and where permitted by law. The personal information We collect from You include Your name, e-mail address, username, postal address, company name, telephone number, fax number, credit card number, credit card expiration date, etc.",
      },
      {
        subtitle: "b) Non-personal information",
        text: "We may also collect non-personal information such as Your browser type, operating system, the domain name from which You accessed the Site, IP address, internet service provider, etc., during normal Site operations. Information regarding Your browsing behavior on the Site may also be collected, such as the date and time of visit, the areas or pages visited, the amount of time spent, the type of Digitized Works viewed or purchased, and other click-stream data, in order to administer the Site, evaluate trends, track user’s usage in the aggregate.",
      },
    ],
  },
  {
    id: "sharing",
    title: "II. When do we share your information?",
    content:
      "We will not share personal information about You with any third party except as mentioned here:",
    points: [
      "On a strictly need to know basis with any third party service providers we may engage in relation to the operation or hosting of the Site, solely for the purpose of providing services in relation to the Site. We may process and store, the information collected in connection with the Site in any country where our service providers are located.",
      "We may transfer or otherwise disclose information collected from You, with your consent, to Our advertisers including financial service providers (such as banks, insurance agents, mortgage lenders etc.) and non-financial companies (such as stores, partner sites etc.);",
      "Where we are required by law to share the information such as (i) when We determine that there has been a violation of the Terms; (ii) to provide information to law enforcement agencies in response to any judicial order and; or (iii) in relation to any investigation on matters related to public safety, illegal activities, suspected fraud, threats to the physical safety of any person, etc. as may be permitted by law.",
    ],
  },
  {
    id: "confidentiality",
    title: "III. How do we maintain Confidentiality?",
    content:
      "We limit access of Your personal information only to employees who We believe reasonably need access to such information to provide products or services to You or in order for them to perform their designated functions. We have deployed multiple levels of operational and technical safeguards to protect Your personal information that We collect online, to prevent unauthorized access, maintain data accuracy, and avoid misuse of information.",
  },
  {
    id: "usage",
    title: "IV. How do we use Your Information?",
    content:
      "We will only use the information collected from You for the limited purposes listed below:",
    bullets: [
      "for facilitating Your use of the Site and for better understanding of Your needs;",
      "for processing and fulfilling Your orders for Digitized Works received on the Site;",
      "for responding to Your inquiries about any Digitized Works;",
      "for directing information, promotional materials, and offers to you;",
      "for contacting visitors of the Site when necessary;",
      "for helping You resolve any issues with the Site;",
      "for managing the Site efficiently;",
    ],
    footer:
      "We may use non-personal information for the above-mentioned purposes as well to oversee the operations of the Site to provide a better user experience.",
  },
  {
    id: "cookies",
    title: "V. Cookies and action tags",
    content:
      "We use cookie to track the pages on the Site Our visitors view and which web browsers Our visitors use. Cookies are small alphanumeric identifiers stored on the hard drive of the user’s computer to enable Our systems to recognize Your browser and tell Us how and when pages in the Site are visited. “Action tags” may also be used in assisting the delivery of a cookie. Cookies often make Web surfing simpler by performing through functions such as, saving Your personal preferences on usage of any specific website, ensuring You don’t see that advertisements are not repeated etc. Advertisers and partners on the Site may also use cookies, which We do not control and We are not responsible for information collected through them.",
    footer:
      "You may choose to accept or refuse the cookies by changing the settings of Your browser. If You choose to reject the cookies, Your experience at the Site ay be diminished and certain features may not function as intended.",
  },
  {
    id: "third-party",
    title: "VI. Third Party Websites",
    content:
      "The Site may contain links to third party websites, which may have privacy policies that are different from this Site and for which We are not responsible. Accordingly, We recommend that You review the privacy policy posted on any third party website that You may access through the Site.",
  },
  {
    id: "changes",
    title: "VII. Changes to this Privacy Policy",
    content:
      "We reserve the right to modify this privacy statement at any time with the changes in the Site or due to change in applicable laws. We may be required, to add, remove, change or modify portions of this Privacy Policy at any time, without notice. Please revisit this Privacy Policy frequently to ensure that You are aware of the updated privacy practices. Your use of the Site following any changes signifies that You accept these changes.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative z-50 min-h-screen bg-black text-white selection:bg-[#6BC323] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6BC323]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6BC323]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
        />

        <Container className="relative z-10">
          <AnimatedWrapper className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#6BC323] font-mono text-sm tracking-widest uppercase mb-4 block">
                Last Updated: February 2026
              </span>
              <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
                Privacy <br className="md:hidden" />
                <span className="text-white not-italic">Policy</span>
              </h1>
              <div className="w-24 h-1 bg-[#6BC323] mx-auto rounded-full mb-8" />
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Your privacy is our priority. Learn how we protect and manage
                your personal data at Kevnit.
              </p>
            </motion.div>
          </AnimatedWrapper>

          {/* Policy Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {policySections.map((section, index) => (
              <AnimatedWrapper key={section.id} delay={index * 0.1}>
                <div className="group relative">
                  {/* Decorative line */}
                  <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-[#6BC323]/30 transition-colors" />

                  <div className="bg-[#111]/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-[#6BC323]/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-[#6BC323] transition-colors">
                      {section.title}
                    </h2>

                    {section.content && (
                      <p className="text-gray-400 leading-relaxed text-lg mb-6">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <div className="space-y-8">
                        {section.items.map((item, i) => (
                          <div key={i} className="space-y-3">
                            <h3 className="text-white font-bold text-xl italic">
                              {item.subtitle}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.points && (
                      <ul className="space-y-6 mt-6">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6BC323] mt-2.5 shrink-0" />
                            <p className="text-gray-400 leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.bullets && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {section.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-[#6BC323]/5 hover:border-[#6BC323]/10 transition-all group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#6BC323]/30 group-hover/item:bg-[#6BC323] transition-colors" />
                            <span className="text-gray-400 text-sm">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="text-gray-400 leading-relaxed text-lg mt-8 pt-8 border-t border-white/5 italic">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Contact CTA */}
          <AnimatedWrapper className="mt-32 text-center pb-20">
            <div className="bg-[#6BC323] p-12 md:p-20 rounded-[3rem] text-black relative overflow-hidden group">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/10 blur-[100px] rounded-full pointer-events-none"
              />

              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
                Have questions about <br /> our policy?
              </h2>
              <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto relative z-10">
                If you have any concerns regarding how we handle your data, our
                team is here to clarify everything for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-black/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
              >
                Reach Out to Us
              </a>
            </div>
          </AnimatedWrapper>
        </Container>
      </div>
    </main>
  );
}
