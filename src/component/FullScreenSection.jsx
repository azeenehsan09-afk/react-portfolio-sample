import { Box } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground,
  backgroundColor,
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      minHeight="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default FullScreenSection;