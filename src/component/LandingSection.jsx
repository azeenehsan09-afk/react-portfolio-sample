import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Azeen Ehsan";
const bio1 = "BS Computer Science Student at FAST-NUCES";
const bio2 = "Passionate about Front-End Development and creating responsive, user-friendly web experiences";

const LandingSection = () => (
  <FullScreenSection
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar
        size="2xl"
        src="https://images.unsplash.com/vector-1754112354428-874fda8f5fe8?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Heading size="2xl">
        {greeting}
      </Heading>

      <Text fontSize="xl" textAlign="center">
        {bio1}
      </Text>

      <Text fontSize="xl" textAlign="center">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;