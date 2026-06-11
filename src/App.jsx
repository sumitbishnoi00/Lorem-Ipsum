import { useLocation } from "react-router-dom";
import './App.css'
import Hero from './components/home/Hero';
import HomeContent from './components/home/HomeContent';
import SecondContent from './components/secondPage/SecondContent';
import Footer from './components/common/Footer';
import { act } from "react";


function App() {


  const location = useLocation();

  const activePage = location.pathname === "/second" ? "second" : "home";


  return (
    <>
      <Hero activePage={activePage} />

      {activePage === "home" ? (
        <HomeContent />
      )
        :
        (
          <SecondContent />
        )
      }

      <Footer activePage={activePage} />
    </>
  )
}

export default App
