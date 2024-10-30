import "../index.css";
import {
  Users,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import "../App.css";
import { StrictMode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import Login from "./Login";
import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";
import UserData from "./UserData";

const Landingpage = () => {
  const [Logged, setLogged] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLogged(localStorage.getItem("name"));
  });
  const handleLogOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("jwtToken");
    handleSuccess("logout succefully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const [signUpBtn, setSignUpBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const handleUser = () => {
    if(Logged){
        navigate("/UserData");
    }else{
        handleError("Pls Login into Socio.")
    }
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-12 h-12 animate-spin-slow">
                <img
                  src="/WhatsApp Image 2024-03-10 at 18.12.58_46090b81.jpg"
                  alt="Socio Logo"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Socio</h1>
                <p className="text-sm text-cyan-400">Social Connect</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              {Logged ? (
                <>
                  <div style={{ color: "white" }}>Welcome : {Logged}</div>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-cyan-400 hover:text-cyan-300 font-medium border border-cyan-400 rounded-lg hover:border-cyan-300 transition-colors"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setLoginBtn(true)}
                    className="px-4 py-2 text-cyan-400 hover:text-cyan-300 font-medium border border-cyan-400 rounded-lg hover:border-cyan-300 transition-colors"
                  >
                    Log in
                  </button>

                  <button
                    onClick={() => setSignUpBtn(true)}
                    className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
                  >
                    Register
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-cyan-400">Socio</span>
            </h1>
            <p className="text-2xl text-cyan-400 font-medium mb-8">
              "Connecting Knowledge, Inspiring Growth."
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join our vibrant community of learners and educators in a space
              where knowledge meets collaboration.
            </p>

           
                <button
                  onClick={() => handleUser()}
                  className="px-8 py-4 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 flex items-center mx-auto gap-2 font-bold"
                >
                  Start Learning Today <ChevronRight className="h-5 w-5" />
                </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards with Hover Animation */}
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <Users className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Connect with Peers
              </h3>
              <p className="text-gray-300">
                Collaborate with students worldwide and share knowledge.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <BookOpen className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Interactive Learning
              </h3>
              <p className="text-gray-300">
                Engage with interactive content and real-time discussions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <Users className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Global Community
              </h3>
              <p className="text-gray-300">
                Join a diverse community of learners from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Socio is more than just a learning platform – it's a community
                where knowledge meets collaboration. We believe in the power of
                social learning and connection to drive educational success.
              </p>
              <p className="text-gray-300 text-lg">
                Our mission is to create an inclusive space where students can
                connect, learn, and grow together. Through innovative tools and
                a supportive community, we're transforming how education happens
                online.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-cyan-400 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Socio?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Global Community Access
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Interactive Learning Tools
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Expert-Led Sessions
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-300">support@socio.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-300">
                    123 Education Street, Learning City
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              ></textarea>
              <button className="w-full py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Features</li>
                <li className="hover:text-cyan-400 cursor-pointer">Pricing</li>
                <li className="hover:text-cyan-400 cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">About Us</li>
                <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
                <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Privacy</li>
                <li className="hover:text-cyan-400 cursor-pointer">Terms</li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  Copyright
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Twitter</li>
                <li className="hover:text-cyan-400 cursor-pointer">LinkedIn</li>
                <li className="hover:text-cyan-400 cursor-pointer">Facebook</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>© 2024 Socio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* login model */}
      <Modal show={loginBtn} onHide={() => setLoginBtn(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>

      {/* signUp model */}
      <Modal show={signUpBtn} onHide={() => setSignUpBtn(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SignUp />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Landingpage;
