"use client";
import React from "react";
import { FooterContainer } from "@/styles/footer.style";
import { Grid } from "@mui/material";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../public/images/smallLogo.jpeg";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from "@mui/icons-material/Language";


function Footer() {

  return (
    <FooterContainer>
      <Grid container justifyContent="space-between" alignItems="center">
        {/* First Row */}
        <Grid item xs={12} className="footer-row-1">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5} className="website-info-section">
              <div className="footer-img-section">
                   <Image
                src={logo}
                width={35}
                height={35}
                className="rounded-full"
                alt="footer-logo"
              />
  <h4 style={{color:"yellow"}}>Tutor Pedia</h4>
              </div>
            
              <p className="website-info">
                Tutorpedia, an online learning hub, offers diverse, top-tier
                courses catering to varied interests. Our platform is dedicated
                to empowering global learners through personalized, high-quality
                education. We foster an interactive environment, encouraging
                exploration and achievement in every field. Join us for an
                enriching experience, where expertly curated courses propel your
                learning journey towards success and personal growth.
              </p>
            </Grid>
            <Grid item xs={6} md={2.5} className="quick-links">
              <h6 style={{color:"yellow"}}>Quick Links</h6>
              <div className="quick-links-list">
                <ul >
                  <li className="footer-list"> <InfoIcon fontSize="small" /> <span style={{marginLeft:"5px"}}> About Us</span></li>
                  <li className="footer-list"> <ListAltIcon fontSize="small" /> <span style={{marginLeft:"5px"}}> All Courses</span></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={2.5} className="contact-us">
              <h6 style={{color:"yellow"}}>Contact Us</h6>
              <div className="contact-us-list">
                   <ul >
                  <li className="footer-list"> <LocalPhoneIcon fontSize="small" /> <span style={{marginLeft:"5px"}}> +051-23413344</span></li>
                  <li className="footer-list"> <LanguageIcon fontSize="small" /> <span style={{marginLeft:"5px"}}>www.tutorpedia.com</span></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={2} className="follow-us">
              <h6 style={{color:"yellow"}}>Follow Us</h6>
              <div className="follow-us-list">
                <ul>
                  <li>
                    <WhatsappShareButton url={`${process.env.APP_URL}`}>
                      <div className="social-links-box">
                       <FaWhatsappSquare />
                      <span>Whatsapp</span>
                      </div>
                    
                    </WhatsappShareButton>
                  </li>
                     <li>
                    <EmailShareButton url={`${process.env.APP_URL}`}>
                      <div className="social-links-box">
                       <BiLogoGmail />
                      <span>Gmail</span>
                      </div>
                    
                    </EmailShareButton>
                  </li>
                     <li>
                    <FacebookShareButton url={`${process.env.APP_URL}`}>
                      <div className="social-links-box">
                       <FaSquareFacebook />
                      <span>Facebook</span>
                      </div>
                    
                    </FacebookShareButton>
                  </li>
                     <li>
                    <LinkedinShareButton url={`${process.env.APP_URL}`}>
                      <div className="social-links-box">
                       <FaLinkedin />
                      <span>Linkedin</span>
                      </div>
                    
                    </LinkedinShareButton>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* Second Row */}
        <Grid item xs={12} className="footer-row-2">
          <p>
            © 2023 Tutor Pedia.com
          </p>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
