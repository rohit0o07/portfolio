import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Carde = ({ title, description, imageSrc }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading size="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Heading>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {description}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Carde;
