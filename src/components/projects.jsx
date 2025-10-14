import React, { useState } from "react";

const projectData = {
  
  
  "DHA Phase 8 Boardway Road": [
    {
      id: 4,
      title: "DHA Phase 8 Boardway Road Development",
      coverImage: "/DHA Phase 8 Boardway Road/phase8h2(f).jpg",
      images: [
        "/DHA Phase 8 Boardway Road/phase8h2(1).jpg",
        "/DHA Phase 8 Boardway Road/phase8h2(f).jpg",
        "/DHA Phase 8 Boardway Road/phase8h2(f2).jpg",
        "/DHA Phase 8 Boardway Road/phase8h2(w1).jpg",
        "/DHA Phase 8 Boardway Road/phase8h2(w2).jpg",
        "/DHA Phase 8 Boardway Road/phase8h2(w3).jpg",
        "/DHA Phase 8 Boardway Road/phase8h3(w1).jpg",
        "/DHA Phase 8 Boardway Road/hase8h3t.jpg"
      ],
      description: "Modern residential complex on DHA Phase 8 Boardway Road with premium finishing.",
      status: "Completed",
      location: "DHA Phase 8 Boardway Road"
    }
  ],
  "Askari Sarwar Road": [
    {
      id: 1,
      title: "Askari Sarwar Road Project",
      coverImage: "/Askari ,Sarwar Road/askari1.jpg",
      images: [
        "/Askari ,Sarwar Road/askari1.jpg",
        "/Askari ,Sarwar Road/askarip2.jpg",
        "/Askari ,Sarwar Road/askarip3.jpg",
        "/Askari ,Sarwar Road/askarip4.jpg",
        "/Askari ,Sarwar Road/askarip5.jpg",
        "/Askari ,Sarwar Road/askarip6.jpg",
        "/Askari ,Sarwar Road/askarip7.jpg"
      ],
      description: "Complete residential development at Askari, Sarwar Road with modern construction techniques.",
      status: "Inprogress",
      location: "Askari, Sarwar Road"
    }
  ],
  "DHA Rehbar Phase 11": [
    {
      id: 5,
      title: "DHA Rehbar Phase 11 Project",
      coverImage: "/DHA Rehbar phase 11/Elevation.jpg",
      images: [
        "/DHA Rehbar phase 11/Elevation.jpg",
        "/DHA Rehbar phase 11/elevation design.jpeg",
        "/DHA Rehbar phase 11/file1.jpeg",
        "/DHA Rehbar phase 11/file3.jpeg",
        "/DHA Rehbar phase 11/file4.jpeg",
        "/DHA Rehbar phase 11/file5.jpeg",
        "/DHA Rehbar phase 11/file6.jpeg",
        "/DHA Rehbar phase 11/file7.jpeg",
        "/DHA Rehbar phase 11/file10.jpeg",
        "/DHA Rehbar phase 11/kit5.jpg",
        "/DHA Rehbar phase 11/sil2.jpg",
        "/DHA Rehbar phase 11/sil3.jpg",
        "/DHA Rehbar phase 11/ven1.jpg",
        "/DHA Rehbar phase 11/ven2.jpg"
      ],
      description: "Comprehensive residential development in DHA Rehbar Phase 11 with luxury amenities.",
      status: "Completed",
      location: "DHA Rehbar Phase 11"
    }
  ],
  "DHA Town 9": [
    {
      id: 7,
      title: "DHA Town 9 Development",
      coverImage: "/DHA Town 9/town91.jpg",
      images: [
        "/DHA Town 9/town91.jpg",
        "/DHA Town 9/town92.jpg",
        "/DHA Town 9/town93.jpg",
        "/DHA Town 9/town94.jpg",
        "/DHA Town 9/town95.jpg",
        "/DHA Town 9/town96.jpg"
      ],
      description: "Contemporary residential development in DHA Town 9 with modern design.",
      status: "In Progress",
      location: "DHA Town 9"
    }
  ],
  "Valencia Town Block-G": [
    {
      id: 10,
      title: "Valencia Town Block-G Development",
      coverImage: "/Valenica Town  Block -G/v1h1f2.jpg",
      images: [
        "/Valenica Town  Block -G/v1h1.jpg",
        "/Valenica Town  Block -G/v1h1f1.jpg",
        "/Valenica Town  Block -G/v1h1f2.jpg",
        "/Valenica Town  Block -G/v1h1(f2).jpg",
        "/Valenica Town  Block -G/v1h1(f3).jpg",
        "/Valenica Town  Block -G/v1h1(r2).jpg",
        "/Valenica Town  Block -G/v1h1(r3).jpg",
        "/Valenica Town  Block -G/v1h1r4.jpg"
      ],
      description: "Premium residential development in Valencia Town Block-G with luxury finishing.",
      status: "In Progress",
      location: "Valencia Town Block-G"
    }
  ],
  "DHA Phase 7 Block-X": [
    {
      id: 2,
      title: "DHA Phase 7 Block-X Development",
      coverImage: "/DHA Phase 7 Block-X/phase8X1.jpg",
      images: [
        "/DHA Phase 7 Block-X/phase8X1.jpg",
        "/DHA Phase 7 Block-X/phase8X1-1.jpg",
        "/DHA Phase 7 Block-X/phase8x2.jpg",
        "/DHA Phase 7 Block-X/phase8x3.jpg",
        "/DHA Phase 7 Block-X/phase8x4.jpg",
        "/DHA Phase 7 Block-X/phase8x5.jpg",
        "/DHA Phase 7 Block-X/phase8x6.jpg",
        "/DHA Phase 7 Block-X/phase8x7.jpg"
      ],
      description: "Premium residential construction in DHA Phase 7 Block-X with modern architecture.",
      status: "In Progress",
      location: "DHA Phase 7 Block-X"
    }
  ],
  "DHA Town 9 Block C": [
    {
      id: 8,
      title: "DHA Town 9 Block C Project",
      coverImage: "/DHA Town 9 Block C/t9f.jpg",
      images: [
        "/DHA Town 9 Block C/t9f.jpg",
        "/DHA Town 9 Block C/t9f2.jpg",
        "/DHA Town 9 Block C/t9f3.jpg",
        "/DHA Town 9 Block C/t9f4.jpg",
        "/DHA Town 9 Block C/t9f5.jpg",
        "/DHA Town 9 Block C/t9f6.jpg"
      ],
      description: "Specialized residential development in DHA Town 9 Block C with premium construction.",
      status: "In Progress",
      location: "DHA Town 9 Block C"
    }
  ],
  "DHA Phase 8 Block-U": [
    {
      id: 3,
      title: "DHA Phase 8 Block-U Project",
      coverImage: "/DHA Phase 8 Block- U/phase8h4.jpg",
      images: [
        "/DHA Phase 8 Block- U/phase8h4.jpg",
        "/DHA Phase 8 Block- U/phase8h4(1).jpg",
        "/DHA Phase 8 Block- U/phase8h4(2).jpg"
      ],
      description: "Contemporary residential development in DHA Phase 8 Block-U.",
      status: " Just Started",
      location: "DHA Phase 8 Block-U"
    }
  ],
  
  
  "DHA Rehbar Phase 11 Block-H": [
    {
      id: 6,
      title: "DHA Rehbar Phase 11 Block-H Development",
      coverImage: "/DHA Rehbar Phase 11 Block- H/file24.jpeg",
      images: [
        "/DHA Rehbar Phase 11 Block- H/file24.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file25.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file26.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file28.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file30.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file31.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file32.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file33.jpeg",
        "/DHA Rehbar Phase 11 Block- H/file34.jpeg",
        "/DHA Rehbar Phase 11 Block- H/l1.jpg"
      ],
      description: "Premium residential construction in DHA Rehbar Phase 11 Block-H with modern interiors.",
      status: "Completed",
      location: "DHA Rehbar Phase 11 Block-H"
    }
  ],
 
  

};

// Flatten all projects from all categories into one array
const allProjects = Object.values(projectData).flat();

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Our Recent Projects
        </h2>
        
        {/* Book Site Visit CTA */}
        <div className="text-center mb-12">
          <a 
            href="tel:+923001234567" 
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
             Book Site Visit - Call Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">{project.location}</span>
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-600 text-white' :
                      project.status === 'Inprogress' ? 'bg-yellow-600 text-white' :
                      project.status === 'In Progress' ? 'bg-yellow-600 text-white' :
                      project.status === 'Portfolio' ? 'bg-purple-600 text-white' :
                      project.status === 'Just Started' ? 'bg-blue-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex items-center gap-6 mb-6">
                  <p className="text-blue-400">Location: {selectedProject.location}</p>
                  {selectedProject.status && (
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      selectedProject.status === 'Completed' ? 'bg-green-600 text-white' :
                      selectedProject.status === 'Inprogress' ? 'bg-yellow-600 text-white' :
                      selectedProject.status === 'In Progress' ? 'bg-yellow-600 text-white' :
                      selectedProject.status === 'Portfolio' ? 'bg-purple-600 text-white' :
                      selectedProject.status === 'Just Started' ? 'bg-blue-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      Status: {selectedProject.status}
                    </span>
                  )}
                </div>
                
                {/* Book Site Visit Button in Modal */}
                <div className="text-center mb-6">
                  <a 
                    href="tel:+923001234567" 
                    className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book Site Visit
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;