import { Box, Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return (
      <Box bg="white" borderRadius="lg">
        <Image src={imageSrc} alt={title} borderRadius="lg" />
        <Heading as="h4" size="md" color="black" margin="2">{title}</Heading>
        <Text color="GrayText" margin="2">{description}</Text>
        <Button color="black" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>See more</Button>
      </Box>
  );
};

export default Card;
