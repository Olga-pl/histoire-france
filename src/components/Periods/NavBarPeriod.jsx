import { useEffect, useState } from "react";

export const NavBarPeriod = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 900);
    });
  }, []);

  return (
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger p-md-3">
       <div className="container">
         <a href="/" className="navbar-brand">Histoire de France</a>
         <button
         type="button"
         className="navbar-toggler"
         data-target="#navbarNav"
         data-toggle="collapse"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-lable="Toggle Navbar"
         >
           <span className="navbar-toggler-icon"> </span>
         </button>

         <div className="collapse navbar-collapse" id="navbarNav">
           <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#header" className="nav-link text-white page-scroll">Home</a>
              </li>
              <li className="nav-item">
                <a href="#periods" className="nav-link text-white page-scroll">Epoques</a>
              </li>
              <li className="nav-item">
                <a href="#wars" className="nav-link text-white page-scroll">Guerres et batailles</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-white page-scroll">À propos</a>
              </li>
            </ul>
         </div>
       </div>
     </nav>
  )
}


export default NavBarPeriod