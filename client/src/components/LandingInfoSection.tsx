import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { LandingPageContainer } from "../styles/landingPageInfo.style";

interface LandingSectionProps {
  imageSrc: string; 
  heading: string;
  text: string;
  bullets: string[];
  reverseOrder?: boolean;
  spanText: string;
}

function LandingSection({
  imageSrc,
  heading,
  text,
  bullets,
  reverseOrder = false,
  spanText,
}: LandingSectionProps) {
  return (
    <Box className={`main ${reverseOrder ? "reverse-order" : ""}`}>
      {!reverseOrder && (
        <Image
          src={imageSrc}
          alt="Description of your image"
          width={600}
          height={600}
        />
      )}
      <Box className="content">
        <h2 className="heading">{heading}</h2>
        <span className="text">{text}</span>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index} className="text-bullets">
              {bullet}
            </li>
          ))}
        </ul>
        <span className="text">{spanText}</span>
      </Box>
      {reverseOrder && (
        <Image
          src={imageSrc}
          alt="Description of your image"
          width={600}
          height={600}
        />
      )}
    </Box>
  );
}

function LandingInfoSection() {
  return (
    <LandingPageContainer>
      <LandingSection
        imageSrc="/images/1.jpg"
        heading="Master Soft Skills for Success"
        text="Essentials skills to help you in every walk of life"
        bullets={[
          "Effective Communication",
          "Leadership",
          "Ethics",
          "Teamwork",
        ]}
        spanText="Our experiential technical and soft skills training empower IT professionals with a winning combination of technical expertise and essential soft skills demanded by industry"
      />

      <LandingSection
        imageSrc="/images/2.png"
        heading="Fast track your career"
        text="Blast off towards a successful career! Our fast-track program is designed for CS and IT fields with basic and advanced computer science knowledge. In our"
        bullets={[
          "12 weeks boot camp",
          "360 hours of hands-on training",
          "Set your course to success",
        ]}
        spanText="Buckle up and get ready to set your sights on success as our industry-driven curriculum prepares you to conquer the global IT workforce."
        reverseOrder
      />

      <LandingSection
        imageSrc="/images/3.png"
        heading="The best course of action"
        text="This is the text for the third section."
        bullets={["Hands-on training", "Test Integrity mode", "Paid workshops"]}
        spanText="This platform gives you hands-on practice along with mastery in a key technical area such as code editor. Test integrated mode and a paid workshop are also available."
      />
    </LandingPageContainer>
  );
}

export default LandingInfoSection;
