import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Aboutus from "./components/Aboutus";
import Solutions from "./components/Solutions";
import Projects from "./components/projects";
import ContactUs from "./components/ContactUs";
import ArchitectureDesign from "./components/solutions/ArchitectureDesign";
import TurnKeySolutions from "./components/solutions/TurnKeySolutions";
import GreyStructure from "./components/solutions/GreyStructure";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";

const App = () => {
  useEffect(() => {
    // Function to play welcome sound
    const playWelcomeSound = () => {
      // Check if browser supports Speech Synthesis
      if ('speechSynthesis' in window) {
        // Wait for voices to be loaded
        const playMessage = () => {
          // Create a new speech synthesis utterance with enhanced message
          const utterance = new SpeechSynthesisUtterance("Welcome to RBCo");
          
          // Configure the speech for clarity and realism
          utterance.rate = 0.9; // Natural speaking speed
          utterance.pitch = 1.0; // Natural pitch
          utterance.volume = 0.8; // Clear volume
          
          // Try to get the best quality voice available
          const voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            // Prioritize high-quality voices
            let selectedVoice = null;
            
            // First, try to find a premium English voice (usually more realistic)
            const premiumVoices = voices.filter(voice => 
              voice.lang.startsWith('en') && 
              (voice.name.includes('Premium') || 
               voice.name.includes('Enhanced') ||
               voice.name.includes('Neural') ||
               voice.name.includes('HD') ||
               voice.name.includes('Google'))
            );
            
            if (premiumVoices.length > 0) {
              selectedVoice = premiumVoices[0];
            } else {
              // Fallback to any English voice, preferring female voices for warmth
              const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
              const femaleVoices = englishVoices.filter(voice => 
                voice.name.toLowerCase().includes('female') ||
                voice.name.toLowerCase().includes('woman') ||
                voice.name.toLowerCase().includes('samantha') ||
                voice.name.toLowerCase().includes('victoria') ||
                voice.name.toLowerCase().includes('karen')
              );
              
              selectedVoice = femaleVoices.length > 0 ? femaleVoices[0] : 
                           englishVoices.length > 0 ? englishVoices[0] : 
                           voices[0];
            }
            
            if (selectedVoice) {
              utterance.voice = selectedVoice;
              console.log('Selected voice:', selectedVoice.name, selectedVoice.lang);
            }
          }
          
          // Add event listeners for better control
          utterance.onstart = () => {
            console.log('Welcome message started');
          };
          
          utterance.onend = () => {
            console.log('Welcome message completed');
          };
          
          utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
          };
          
          // Play the welcome message with a small delay
          setTimeout(() => {
            speechSynthesis.speak(utterance);
          }, 1500); // 1.5 second delay for better page load timing
        };
        
        // Ensure voices are loaded before playing
        if (speechSynthesis.getVoices().length === 0) {
          speechSynthesis.addEventListener('voiceschanged', playMessage, { once: true });
        } else {
          playMessage();
        }
      }
    };

    // Only play on first visit (you can remove this check if you want it to play every time)
    const hasPlayedWelcome = sessionStorage.getItem('welcomeSoundPlayed');
    if (!hasPlayedWelcome) {
      playWelcomeSound();
      sessionStorage.setItem('welcomeSoundPlayed', 'true');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <HeaderComponent />
            <Solutions />
            <Aboutus />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/projects" element={
          <div>
            <Projects />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/contact" element={
          <div>
            <ContactUs />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/architecture" element={
          <div>
            <ArchitectureDesign />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/turnkey" element={
          <div>
            <TurnKeySolutions />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
        <Route path="/greystructure" element={
          <div>
            <GreyStructure />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;