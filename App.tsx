import React, { useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Coffee,
  Code,
  Database,
  Link,
  Cog,
  Award,
  Send
} from 'lucide-react';

function App() {
  const contactFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = contactFormRef.current;
    if (!form) return;

    // Basic form validation
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Here you would typically handle the form submission
    alert('Message sent successfully!');
    form.reset();
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 hover-scale">
              Naguru Indra Kalyan Reddy
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
              Java Full Stack Developer (Fresher)
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 hover-scale">
              <MapPin className="text-blue-500" size={20} />
              <span>Bengaluru / Kadapa</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 hover-scale">
              <Mail className="text-blue-500" size={20} />
              <a href="mailto:kalyanarc111@gmail.com" className="hover:text-blue-500">
                kalyanarc111@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8 hover-scale">
              <Phone className="text-blue-500" size={20} />
              <a href="tel:+916302203822" className="hover:text-blue-500">
                +91 6302203822
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/indra-kalyan-reddy-37b066164"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Kalyanreddy353"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://instagram.com/kalyan_reddy_353"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram size={24} />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1--pD8tcdHUlML-hMSXX78t-ry0mKd7Bf/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="w-64 h-64 mx-auto">
              <img
                src="https://i.ibb.co/Q72qfPcQ/Whats-App-Image-2025-02-12-at-18-39-34-65ffeed9.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-blue-500 hover-glow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 hover-scale">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Coffee size={40} className="text-blue-500 mb-4" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Code size={40} className="text-blue-500 mb-4" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Code size={40} className="text-blue-500 mb-4" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Database size={40} className="text-blue-500 mb-4" />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Link size={40} className="text-blue-500 mb-4" />
              <span>JDBC</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover-card">
              <Cog size={40} className="text-blue-500 mb-4" />
              <span>JEE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 hover-scale">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover-card">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop"
                alt="Restaurant Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Restaurant Page</h3>
                <p className="text-gray-400">
                  Developed a food order section with a responsive UI, increasing user engagement by 25%.
                  Designed interactive menus and an order processing system.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover-card">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop"
                alt="Todo List Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">To-Do List</h3>
                <p className="text-gray-400">
                  Created a user-friendly task management app with features like task addition,
                  removal, completion marking, and status filtering.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover-card">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
                alt="CMOS Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Ripple Carry Adder</h3>
                <p className="text-gray-400">
                  Designed a 4-bit ripple carry adder using hybrid CMOS-memristor technology.
                  Simulated and verified results using LTSPICE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 hover-scale">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-2">BTech in Electronics and Communication Engineering</h3>
              <p className="text-gray-400 mb-2">KSRM College of Engineering, Kadapa</p>
              <p className="text-blue-500 font-semibold">CGPA: 7.4</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-2">Intermediate (MPC)</h3>
              <p className="text-gray-400 mb-2">Narayana Junior College, Kadapa</p>
              <p className="text-blue-500 font-semibold">CGPA: 7.0</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover-card">
              <h3 className="text-xl font-bold mb-2">10th (SSC)</h3>
              <p className="text-gray-400 mb-2">DR YSR Sports School, Kadapa</p>
              <p className="text-blue-500 font-semibold">CGPA: 8.7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 hover-scale">Certifications</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4 hover-card">
              <Award className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold mb-2">Web Development</h3>
                <p className="text-gray-400">Rinex Organization</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4 hover-card">
              <Award className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold mb-2">Responsive Web Development</h3>
                <p className="text-gray-400">Infosys Springboard</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4 hover-card">
              <Award className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold mb-2">Java Full Stack Web Development</h3>
                <p className="text-gray-400">Tap Academy</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4 hover-card">
              <Award className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold mb-2">Java Basic Certificate</h3>
                <p className="text-gray-400">HackerRank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 hover-scale">Get in Touch</h2>
          <form 
            ref={contactFormRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">Copyright © 2025 Naguru Indra Kalyan Reddy</p>
            <p className="text-gray-400 mb-4">Designed & Developed by Indra Kalyan Reddy</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;