"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqData = [
  {
    title: "General",
    items: [
      {
        question: "When is Tathva'24 conducted?",
        answer: "Tathva'24 is on 24th, 25th, 26th October.",
      },
      {
        question: "What is the venue for Tathva'24?",
        answer: "The venue for Tathva'24 is NIT Calicut.",
      },
    ],
  },
  {
    title: "WORKSHOPS",
    items: [
      {
        question: "How to register for workshops?",
        answer: "You can register through the official Tathva'24 website.",
      },
      {
        question: "Are the workshops free?",
        answer:
          "Some workshops have a registration fee. Please check the event details.",
      },
    ],
  },
  {
    title: "LECTURES",
    items: [
      {
        question: "How to register for workshops?",
        answer: "You can register through the official Tathva'24 website.",
      },
      {
        question: "Are the workshops free?",
        answer:
          "Some workshops have a registration fee. Please check the event details.",
      },
    ],
  },
  {
    title: "EVENTS",
    items: [
      {
        question: "How to register for workshops?",
        answer: "You can register through the official Tathva'24 website.",
      },
      {
        question: "Are the workshops free?",
        answer:
          "Some workshops have a registration fee. Please check the event details.",
      },
    ],
  },
];

const FAQItem = ({ question, answer, isVisible, toggle }) => {
  return (
    <div className="mb-4 rounded-lg overflow-hidden">
      <div
        onClick={toggle}
        className="cursor-pointer flex justify-between items-center text-gray-50 text-2xl md:text-3xl p-4 font-question"
      >
        <h3 className="flex-grow">{question}</h3>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isVisible ? "auto" : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden px-4 pb-4"
      >
        <p className="text-gray-400 text-base md:text-xl font-answer">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const FAQSection = ({
  title,
  items = [],
  isBeamNear,
  setHoveredSection,
  sectionIndex,
}) => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="mb-8 p-6 rounded-lg"
      onMouseEnter={() => setHoveredSection(sectionIndex)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      <motion.h2
        className="text-3xl md:text-4xl mb-4 md:mb-6 font-subtitle relative inline-block cursor-pointer text-gray-500"
        whileHover={{
          color: "#FFFFFF",
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        {title}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isBeamNear.get() > 0.5 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.h2>
      {items.map((item, index) => (
        <div key={index}>
          <FAQItem
            question={item.question}
            answer={item.answer}
            isVisible={visibleIndex === index}
            toggle={() => toggleVisibility(index)}
          />
        </div>
      ))}
    </div>
  );
};

const TracingBeam = ({ children }) => {
  const beamRef = useRef(null);
  const circleRef = useRef(null); // Reference for circle
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [beamHeight, setBeamHeight] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null); // Track hovered section

  useEffect(() => {
    if (contentRef.current) {
      setBeamHeight(contentRef.current.offsetHeight);
    }

    const ctx = gsap.context(() => {
      gsap.to(beamRef.current, {
        height: beamHeight,
        ease: "none",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: () => {
            const sections = contentRef.current.querySelectorAll("h2");
            sections.forEach((section, index) => {
              const rect = section.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 1.25 && rect.bottom >= 0.5) {
                section.classList.add("text-yellow-50");
              } else {
                section.classList.remove("text-yellow-50");
              }

              // Move the circle to the hovered section
              if (hoveredSection === index) {
                gsap.to(circleRef.current, {
                  y: rect.top - 20, // Adjust y position for the circle
                  duration: 0.3,
                });
              }
            });
          },
        },
      });
    });

    return () => ctx.revert();
  }, [beamHeight, hoveredSection]);

  return (
    <div className="relative">
      <div className="absolute left-2 sm:left-5 md:left-10 top-12 w-0.5 sm:w-1 h-full">
        <div
          ref={beamRef}
          className={`w-full ${
            hoveredSection !== null
              ? "bg-gradient-to-b from-yellow-500 to-yellow-300"
              : "bg-gradient-to-b from-green-600 via-blue-400 to-purple-600"
          } opacity-75`}
        />
        <div
          ref={circleRef}
          className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-yellow-500 absolute left-[-6px] sm:left-[-11px] top-0 transform"
        />
      </div>
      <div ref={contentRef} className="pl-4 sm:pl-6 md:pl-12 lg:pl-24">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === FAQSection) {
            const isBeamNear = useTransform(
              scrollYProgress,
              [(index - 0.5) / faqData.length, (index + 0.5) / faqData.length],
              [0, 1]
            );

            return React.cloneElement(child, {
              isBeamNear,
              setHoveredSection,
              sectionIndex: index,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

const FAQBeamTracingAccordion = () => {
  return (
    <div className="bg-black-900 min-h-screen py-10 md:py-20 px-4 md:px-0">
      <TracingBeam>
        <h1 className="text-white text-4xl md:text-6xl mb-10 md:mb-20 font-title faq-heading">
          FAQs
        </h1>
        {faqData.map((section, index) => (
          <FAQSection key={index} {...section} />
        ))}
      </TracingBeam>
    </div>
  );
};

export default FAQBeamTracingAccordion;
