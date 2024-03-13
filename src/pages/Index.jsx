import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container, Spacer } from "@chakra-ui/react";
import { FaTicketAlt, FaSpotify, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="60vh" bg="gray.800" color="white" p={8}>
        <VStack spacing={5} align="flex-start">
          <Heading size="2xl">The Rockers</Heading>
          <Text fontSize="xl">Join us on our world tour!</Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="purple">
            Get Tickets
          </Button>
        </VStack>
        <Spacer />
        <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1516057747705-0609711c1b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEwMzMyMTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rockers Band" />
      </Flex>

      {/* About Section */}
      <Container maxW="container.lg" py={10}>
        <Heading mb={6}>About The Band</Heading>
        <Text fontSize="lg">The Rockers have been electrifying audiences worldwide with their stunning live performances. Known for their infectious blend of rock and soul, they promise an unforgettable experience with every show.</Text>
      </Container>

      {/* Tour Dates Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading mb={6}>Tour Dates</Heading>
          {/* Dates would be dynamically loaded here */}
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text fontWeight="bold">New York, NY</Text>
              <Text>March 22, 2023</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Los Angeles, CA</Text>
              <Text>April 5, 2023</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Chicago, IL</Text>
              <Text>April 18, 2023</Text>
            </HStack>
            {/* More dates here */}
          </VStack>
        </Container>
      </Box>

      {/* Social Links Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={8} bg="gray.800" color="white">
        <Heading size="md" mb={{ base: 4, md: 0 }}>
          Follow Us
        </Heading>
        <HStack spacing={4} ml={{ md: 6 }}>
          <Button as="a" href="#" size="lg" colorScheme="green" variant="ghost">
            <FaSpotify />
          </Button>
          <Button as="a" href="#" size="lg" colorScheme="blue" variant="ghost">
            <FaFacebookF />
          </Button>
          <Button as="a" href="#" size="lg" colorScheme="pink" variant="ghost">
            <FaInstagram />
          </Button>
          <Button as="a" href="#" size="lg" colorScheme="cyan" variant="ghost">
            <FaTwitter />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
