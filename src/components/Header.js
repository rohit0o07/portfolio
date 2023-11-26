import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin,faMedium,faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";

const socials = [
    {
      icon: faEnvelope,
      url: "mailto:hamilpurrohit7@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/roh1t-hamilpur0o7/",
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
  const prevScrollY = useRef(0);
  const boxRef = useRef();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (prevScrollY.current < currentScrollY && boxRef.current) {
      boxRef.current.style.transform = 'translateY(-200px)';
    } else if (boxRef.current) {
      boxRef.current.style.transform = 'translateY(0)';
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      background-color= "rgb(131,58,180)"
      background= "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 59%, rgba(29,99,253,1) 99%)"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <HStack as="nav" spacing={4}>
            {socials.map((social,index) => (
              <Link key={index} href = {social.url} isExternal>
              <FontAwesomeIcon icon={social.icon} size="lg"/>
              </Link>
            ))}
          </HStack>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick('projects')}>Projects</Link>
              <Link onClick={handleClick('contact')}>Contact Me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
