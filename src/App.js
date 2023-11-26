
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { AlertProvider } from './context/Context';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AlertProvider>
          <main>
          <Header/>
          <LandingSection/>
          <ProjectsSection />
          <ContactMeSection />
          <Footer/>
          <Alert/>
          </main>
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
