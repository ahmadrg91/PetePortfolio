import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  let [lastScroll, setLastScroll] = useState(0);
  let position = useRef(0)

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      lastScroll >= window.scrollY ? position.current = 0 : position.current = -200;
      setLastScroll(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  } 
  ,[window.scrollY])

  

  return (
    <Box
      zIndex={9}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${position.current}px)`}
      transitionProperty="transform"
      transitionDuration="0.8s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
              socials.map((social,index) => (
                <a href={social.url} key={index}>
                  <FontAwesomeIcon icon={social.icon} size="1x"/>
                </a>))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#Projects-section" onClick={handleClick("projects")}>Projects</a>
              <a href="#Contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
