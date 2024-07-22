import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentCourses from "./components/CurrentCourses";
import Footer from "./components/Footer";
import UpcomingCourses from "./components/UpcomingCourses";

function App() {
  return (
    <>
      <div className="">
        <div className="flex  h-screen flex-col w-screen items-center">
          <Navbar />
          <Hero />
          <CurrentCourses />
          <UpcomingCourses />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
