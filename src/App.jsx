import { ChakraProvider } from "@chakra-ui/react";
import Header from "./component/Header";
import LandingSection from "./component/LandingSection";
import ProjectsSection from "./component/ProjectsSection";
import ContactMeSection from "./component/ContactMeSection";
import Footer from "./component/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./component/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
