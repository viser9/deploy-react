import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentCourses from "./components/CurrentCourses";
import Footer from "./components/Footer";
import UpcomingCourses from "./components/UpcomingCourses";
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className="">
        <div className="flex  h-screen flex-col w-screen items-center">
          <Navbar />
          <Hero />
          <CurrentCourses />
          <UpcomingCourses />
          <Footer />
          {/* <Modal close={close}/> */}
          <div>
            <button onClick={openModal}>Open Modal</button>
            {isOpen && <Modal close={closeModal} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
