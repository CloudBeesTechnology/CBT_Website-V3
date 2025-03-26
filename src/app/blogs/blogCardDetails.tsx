import automation from "../../assets/blog/blogImg/automation.png";
import cloud from "../../assets/blog/blogImg/cloud.png";
import cybersecurity from "../../assets/blog/blogImg/cybersecurity.png";
import jira from "../../assets/blog/blogImg/jira.png";
import secOps from "../../assets/blog/blogImg/secOps.png";
import voiceSearch from "../../assets/blog/blogImg/voiceSearch.png";
import webExperiances from "../../assets/blog/blogImg/webExperiances.png";

import jiraPdf from "../../assets/blog/blogPDF/Jira.pdf";
import testingPdf from "../../assets/blog/blogPDF/Testing.pdf";
import cyberSecurityPdf from "../../assets/blog/blogPDF/cyberSecurity.pdf";
import voiceSearchPdf from "../../assets/blog/blogPDF/voiceSearch.pdf";
import SecOpsInfoSecPdf from "../../assets/blog/blogPDF/SecOps vs InfoSec.pdf";
import cloudPdf from "../../assets/blog/blogPDF/cloud and devops.pdf";
import reactPdf from "../../assets/blog/blogPDF/react.pdf";



export const BlogCardDetails = [
  {
    imageUrl: jira,
    title: "AI support in Jira",
    content:
      "AI in Jira revolutionizes project management by enhancing issue tracking, automating workflows, and boosting collaboration.",
    pdf: jiraPdf,
  },
  {
    imageUrl: automation,
    title: "AI transforming testing and automation",
    content:
      "AI revolutionizes testing and automation with tools like Selenium and Testim, ensuring faster and more efficient processes.",
    pdf: testingPdf,
  },
  {
    imageUrl: voiceSearch,
    title: "Optimizing your website for voice search",
    content:
      "Optimize your website for voice search by using natural language keywords and focusing on fast, mobile-friendly performance.",
    pdf: voiceSearchPdf,
  },
  {
    imageUrl: cybersecurity,
    title: "Cybersecurity",
    content:
      "Cybersecurity  involves protecting systems, networks, and data from digital attacks,  ensuring confidentiality, integrity, and availability.",
    pdf: cyberSecurityPdf,
  },
  {
    imageUrl: secOps,
    title: "SecOps vs InfoSec",
    content:
      "SecOps integrates  security into IT operations for continuous threat response, while  InfoSec focuses on protecting information through robust policies and  technologies.",
    pdf: SecOpsInfoSecPdf,
  },
  {
    imageUrl: cloud,
    title: "Cloud and Devops",
    content:
      "DevOps goes beyond  continuous integration and continuous delivery (CI/CD) to enable  near-instantaneous deployment of products and services in the cloud.",
    pdf: cloudPdf
  },
  {
    imageUrl: webExperiances,
    title: "Uniting AI with React JS for Next-Gen Web Experiences",
    content:
      "Unite AI prowess  with React JS agility for immersive web experiences; enrich user  interactions with personalized recommendations and real-time insights.",
    pdf: reactPdf
  },
];
