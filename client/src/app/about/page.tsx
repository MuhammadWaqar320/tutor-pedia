import React, { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessIcon from "@mui/icons-material/Business";

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}
      <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
        {title}
      </span>
      <span>{content}</span>
    </Box>
  );
};

const About = () => {
  return (
    <main>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "450px",
          }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            ABOUT US
          </span>
          <span style={{ fontSize: "28px", fontWeight: "bold" }}>
            Helping business <br />
            succeed through the <br />
            power of software.
          </span>
          <span style={{ fontSize: "18px", marginTop: "14px" }}>
            Tutorpedia is an online educational platform that provides a wide
            range of high-quality courses designed for different interests. Our
            commitment is to empower learners worldwide by delivering
            personalized education. We create an engaging atmosphere that
            promotes exploration and accomplishment across various fields. Come
            join us for a fulfilling learning experience, where carefully
            selected courses led by experts guide you toward success and
            personal development.
          </span>
        </Box>
        <Box>
          <img
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "",
              objectFit: "cover",
              padding: "50px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add this line for the shadow
            }}
            src="../../images/office_working.jpeg"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "35px",
          justifyContent: "space-evenly",
        }}
      >
        <span style={{ fontSize: "26px", fontWeight: "bold", marginLeft:'320px' }}>
          {" "}
          Contact us
        </span>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "35px",
            justifyContent: "space-evenly",
          }}
        >
          <ContactInfo
            icon={<SmartphoneIcon style={{ fontSize: "60px" }} />}
            title="Phone Number"
            content="+051-23413344"
          />
          <ContactInfo
            icon={<MailOutlineIcon style={{ fontSize: "60px" }} />}
            title="Email Address"
            content="info@tutorpedia.com"
          />
          <ContactInfo
            icon={<BusinessIcon style={{ fontSize: "60px" }} />}
            title="Our Address"
            content="Tutor Pedia, islamabad"
          />
        </Box>
      </Box>
      <Footer />
    </main>
  );
};

export default About;
