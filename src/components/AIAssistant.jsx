import React, { useState, useEffect } from 'react';

// Predefined responses for common questions
const responses = {
  default: "I'm sorry, I don't have specific information about that. Please contact our team for personalized assistance. Visit our contact page or call us for immediate support.",
  
  greeting: "Hello! I'm RBCo's AI assistant. I can tell you about our construction services, project locations, or connect you with our expert team. How can I assist you today?",
  
  services: "RBCo specializes in comprehensive construction services:\n\n1. Architecture Design\n2. Grey Structure Construction\n3. Turn-key Solutions\n4. Modern Construction Solutions\n\nFor detailed pricing and timelines, please contact our sales team through our contact page.",
  
  contact: "Ready to start your project? Reach us through:\n- WhatsApp: Click the WhatsApp button below\n- Contact Page: Visit our contact section for direct consultation\n- Schedule a Site Visit: Our team can meet you at your location\n\nWe'll respond within 24 hours with a detailed proposal.",
  
  about: "RBCo is your premier construction partner with:\n- 10+ years of industry expertise\n- Certified construction professionals\n- Modern construction techniques\n- Quality material sourcing\n- On-time project delivery\n\nContact us to discuss how we can bring your construction vision to life.",
  
  projects: "Our portfolio showcases projects across residential and commercial sectors:\n- Modern Houses\n- Commercial Buildings\n- Industrial Structures\n- Architectural Innovations\n\nVisit our Projects page for detailed case studies, or contact us to discuss your specific project needs.",
  
  location: "We operate throughout the region with completed projects in multiple areas. For a site visit or project consultation in your area, please contact our team through the WhatsApp button or contact page.",
  
  materials: "We source premium construction materials including:\n- High-grade cement\n- Quality steel\n- Sustainable materials\n- Modern fixtures\n\nFor material specifications and costs, please contact our procurement team.",
  
  timeline: "Project timelines vary based on scope:\n- Grey Structure: 4-6 months\n- Turn-key Projects: 6-12 months\n- Custom Builds: Timeline provided after consultation\n\nContact us for a detailed timeline for your specific project.",
  
  construction_process: "Our construction process follows these key steps:\n1. Initial Consultation\n2. Design & Planning\n3. Material Selection\n4. Construction Phase\n5. Quality Checks\n6. Project Delivery\n\nContact us to start your construction journey with a free consultation.",
  
  grey_structure: "Our Grey Structure service includes:\n- Foundation work\n- RCC framework\n- Walls and ceiling\n- Basic electrical & plumbing\n\nContact us for a free site visit and quote.",
  
  architecture: "Our architectural services feature:\n- Modern design concepts\n- 3D visualization\n- Sustainable planning\n- Interior layouts\n\nSchedule a meeting with our architects through our contact page.",
  
  turnkey: "Our Turn-key Solutions provide:\n- Complete project management\n- Material procurement\n- Construction supervision\n- Interior finishing\n- Final delivery\n\nContact us for end-to-end project quotes.",
  
  quality: "We maintain quality through:\n- Regular inspections\n- Material testing\n- Expert supervision\n- Quality certifications\n\nContact us to learn more about our quality assurance process.",
  
  pricing: "Our pricing is transparent and competitive. We offer:\n- Detailed cost breakdowns\n- Flexible payment plans\n- Clear project milestones\n\nContact our team for a customized quote for your project.",
  
  expertise: "Our team includes:\n- Licensed architects\n- Structural engineers\n- Project managers\n- Skilled laborers\n\nConnect with our experts through our contact page for professional consultation."
};

// Function to find the best matching response
const findResponse = (message) => {
  const input = message.toLowerCase();
  
  // Greetings
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return responses.greeting;
  }

  // Services and Solutions
  if (input.includes('service') || input.includes('offer') || input.includes('provide') || input.includes('solution')) {
    return responses.services;
  }

  // Contact and Communication
  if (input.includes('contact') || input.includes('reach') || input.includes('call') || input.includes('email') || input.includes('whatsapp')) {
    return responses.contact;
  }

  // Company Information
  if (input.includes('about') || input.includes('company') || input.includes('who')) {
    return responses.about;
  }

  // Projects and Portfolio
  if (input.includes('project') || input.includes('portfolio') || input.includes('work') || input.includes('example')) {
    return responses.projects;
  }

  // Location and Areas
  if (input.includes('location') || input.includes('address') || input.includes('where') || input.includes('area')) {
    return responses.location;
  }

  // Construction Process
  if (input.includes('process') || input.includes('how') || input.includes('steps') || input.includes('procedure')) {
    return responses.construction_process;
  }

  // Materials
  if (input.includes('material') || input.includes('quality') || input.includes('cement') || input.includes('steel')) {
    return responses.materials;
  }

  // Timeline
  if (input.includes('time') || input.includes('duration') || input.includes('long') || input.includes('schedule')) {
    return responses.timeline;
  }

  // Grey Structure
  if (input.includes('grey') || input.includes('structure') || input.includes('foundation') || input.includes('rcc')) {
    return responses.grey_structure;
  }

  // Architecture
  if (input.includes('architecture') || input.includes('design') || input.includes('plan') || input.includes('drawing')) {
    return responses.architecture;
  }

  // Turn-key Solutions
  if (input.includes('turn') || input.includes('key') || input.includes('complete') || input.includes('full')) {
    return responses.turnkey;
  }

  // Quality Assurance
  if (input.includes('quality') || input.includes('standard') || input.includes('check') || input.includes('inspection')) {
    return responses.quality;
  }

  // Pricing and Costs
  if (input.includes('price') || input.includes('cost') || input.includes('budget') || input.includes('payment')) {
    return responses.pricing;
  }

  // Team and Expertise
  if (input.includes('team') || input.includes('expert') || input.includes('staff') || input.includes('professional')) {
    return responses.expertise;
  }
  
  return responses.default;
};

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const newMessage = {
      content: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking for a more natural feel
    setTimeout(() => {
      const response = findResponse(inputMessage);
      const aiResponse = {
        content: response,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 500);
  };

  // Add initial greeting when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = {
        content: "Hello! I'm RBCo's AI assistant. How can I help you with construction, real estate, or our services today?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="font-medium">AI Assistant</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">RBCo AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
                <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-500 text-sm">AI is typing...</div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;