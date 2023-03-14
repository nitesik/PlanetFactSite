import "./Styles.css";
import hamburger from "./Images/icon-hamburger.svg";
import chevron from "./Images/icon-chevron.svg";

import planet_earth from "./Images/planet-earth.svg";
import planet_earth_internal from "./Images/planet-earth-internal.svg";
import geology_earth from "./Images/geology-earth.png";

import planet_mercury from "./Images/planet-mercury.svg";
import planet_mercury_internal from "./Images/planet-mercury-internal.svg";
import geology_mercury from "./Images/geology-mercury.png";

import planet_venus from "./Images/planet-venus.svg";
import planet_venus_internal from "./Images/planet-venus-internal.svg";
import geology_venus from "./Images/geology-venus.png";

import planet_mars from "./Images/planet-mars.svg";
import planet_mars_internal from "./Images/planet-mars-internal.svg";
import geology_mars from "./Images/geology-mars.png";

import planet_jupiter from "./Images/planet-jupiter.svg";
import planet_jupiter_internal from "./Images/planet-jupiter-internal.svg";
import geology_jupiter from "./Images/geology-jupiter.png";

import planet_saturn from "./Images/planet-saturn.svg";
import planet_saturn_internal from "./Images/planet-saturn-internal.svg";
import geology_saturn from "./Images/geology-saturn.png";

import planet_uranus from "./Images/planet-uranus.svg";
import planet_uranus_internal from "./Images/planet-uranus-internal.svg";
import geology_uranus from "./Images/geology-uranus.png";

import planet_neptune from "./Images/planet-neptune.svg";
import planet_neptune_internal from "./Images/planet-neptune-internal.svg";
import geology_neptune from "./Images/geology-neptune.png";

import icon_source from "./Images/icon-source.svg";
import { useState, useEffect } from "react";



function DesktopNav({setPlanet, planet} : any) {

  return (
    <nav>
        <div className="header">THE PLANETS</div>
        <div className="nav-components">
          <div className={`Mercury ${planet === "Mercury" ? "select" : ""}`} onClick={() => setPlanet("Mercury")}>Mercury</div>
          <div className={`Venus ${planet === "Venus" ? "select" : ""}`} onClick={() => setPlanet("Venus")}>Venus</div>
          <div className={`Earth ${planet === "Earth" ? "select" : ""}`} onClick={() => setPlanet("Earth")}>Earth</div>
          <div className={`Mars ${planet === "Mars" ? "select" : ""}`} onClick={() => setPlanet("Mars")}>Mars</div>
          <div className={`Jupiter ${planet === "Jupiter" ? "select" : ""}`} onClick={() => setPlanet("Jupiter")}>Jupiter</div>
          <div className={`Saturn ${planet === "Saturn" ? "select" : ""}`} onClick={() => setPlanet("Saturn")}>Saturn</div>
          <div className={`Uranus ${planet === "Uranus" ? "select" : ""}`} onClick={() => setPlanet("Uranus")}>Uranus</div>
          <div className={`Neptune ${planet === "Neptune" ? "select" : ""}`} onClick={() => setPlanet("Neptune")}>Neptune</div>
        </div>
      </nav>
  )
}

function MobileNavbar({setPlanet} : any) {

  const [menu, setMenu] = useState<boolean>(false);
  
  return (
    <nav>
      <div className="navbar">
        <div className="header">THE PLANETS</div>
        <img src={hamburger} alt="" onClick={() => setMenu(!menu)} />
      </div>
      {menu && <div className="nav-components">
        <div onClick={() => {setPlanet("Mercury"); setMenu(false)}}>
          <div><div className="circle Mercury"></div> <div className="text">MERCURY</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Venus"); setMenu(false)}}>
          <div><div className="circle Venus"></div> <div className="text">VENUS</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Earth"); setMenu(false)}}>
          <div><div className="circle Earth"></div> <div className="text">EARTH</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Mars"); setMenu(false)}}>
          <div><div className="circle Mars"></div> <div className="text">MARS</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Jupiter"); setMenu(false)}}>
          <div><div className="circle Jupiter"></div> <div className="text">JUPITER</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Saturn"); setMenu(false)}}>
          <div><div className="circle Saturn"></div> <div className="text">SATURN</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Uranus"); setMenu(false)}}>
          <div><div className="circle Uranus"></div> <div className="text">URANUS</div></div> <img src={chevron} alt="" />
        </div>
        <div onClick={() => {setPlanet("Neptune"); setMenu(false)}}>
          <div><div className="circle Neptune"></div> <div className="text">NEPTUNE</div></div> <img src={chevron} alt="" />
        </div>
      </div>}
    </nav>
  )
}

function Home() {
  
  const [view, setView] = useState("OVERVIEW");
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [planet, setPlanet] = useState<string>("Earth");
  
  const [data] = useState<any>({
    Earth: {
      description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      overview: planet_earth,
      internal: planet_earth_internal,
      geology: geology_earth,
      rotation: "0.99 DAYS",
      revolution: "365.26 DAYS",
      radius: "6,371 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Earth",
      temperature: "16°C "
    },
    Mercury: {
      description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      overview: planet_mercury,
      internal: planet_mercury_internal,
      geology: geology_mercury,
      rotation: "58.6 DAYS",
      revolution: "87.97 DAYS",
      radius: "2,439.7 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Mercury",
      temperature: "430°C "
    },
    Venus: {
      description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      overview: planet_venus,
      internal: planet_venus_internal,
      geology: geology_venus,
      rotation: "243 DAYS",
      revolution: "224.7 DAYS",
      radius: "6,051.8 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Venus",
      temperature: "471°C "
    },
    Mars: {
      description: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16-17% sulfur.",
      overview: planet_mars,
      internal: planet_mars_internal,
      geology: geology_mars,
      rotation: "1.03 DAYS",
      revolution: "1.88 YEARS",
      radius: "3,389.5 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Mars",
      temperature: "-28°C "
    },
    Jupiter: {
      description: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      overview: planet_jupiter,
      internal: planet_jupiter_internal,
      geology: geology_jupiter,
      rotation: "9.93 HOURS",
      revolution: "11.86 YEARS",
      radius: "69,911 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Jupiter",
      temperature: "-108°C "
    },
    Saturn: {
      description: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      overview: planet_saturn,
      internal: planet_saturn_internal,
      geology: geology_saturn,
      rotation: "10.8 HOURS",
      revolution: "29.46 YEARS",
      radius: "58,232 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Saturn",
      temperature: "-138°C "
    },
    Uranus: {
      description: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      overview: planet_uranus,
      internal: planet_uranus_internal,
      geology: geology_uranus,
      rotation: "17.2 HOURS",
      revolution: "84 YEARS",
      radius: "25,362 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Uranus",
      temperature: "-195°C "
    },
    Neptune: {
      description: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      overview: planet_neptune,
      internal: planet_neptune_internal,
      geology: geology_neptune,
      rotation: "16.08 HOURS",
      revolution: "164.79 YEARS",
      radius: "24,622 KM",
      wikipedia: "https://en.wikipedia.org/wiki/Neptune",
      temperature: "-201°C "
    }
  })
  
  function getWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", getWidth);
  }, [width]);
  
  return (
    <div className="container">
      {width >= 700 ? <DesktopNav planet={planet} setPlanet={setPlanet} /> : <MobileNavbar setPlanet={setPlanet} />}
      <hr />
      <section>
        <div className={`mobile-views ${planet}`}>
          <div onClick={(e) => setView("OVERVIEW")} className={(view === "OVERVIEW") ? "selected" : ""}>OVERVIEW</div>
          <div onClick={(e) => setView("INTERNAL")} className={(view === "INTERNAL") ? "selected" : ""}>STRUCTURE</div>
          <div onClick={(e) => setView("SURFACE")} className={(view === "SURFACE") ? "selected" : ""}>SURFACE</div>
        </div>
        <div className="content">
          <div className="left">
            {view === "OVERVIEW" && <img src={data[planet].overview} alt="" />}
            {view === "INTERNAL" && <img src={data[planet].internal} alt="" />}
            {view === "SURFACE" && <div><img src={data[planet].overview} alt="" /><img src={data[planet].geology} className="surface" /></div>}
          </div>
          <div className="right">
            <div>
              <div className="title">{planet}</div>
              <div className="description">{data[planet].description}</div>
              <div className="source">Source: <a href={data[planet].wikipedia} target="_blank">Wikipedia <img src={icon_source} alt="icon" /></a></div>
            </div>
            <div className={`views ${planet}`}>
              <div onClick={(e) => setView("OVERVIEW")} className={(view === "OVERVIEW") ? "selected" : ""}><span>1</span> OVERVIEW</div>
              <div onClick={(e) => setView("INTERNAL")} className={(view === "INTERNAL") ? "selected" : ""}><span>2</span> INTERNAL STRUCTURE</div>
              <div onClick={(e) => setView("SURFACE")} className={(view === "SURFACE") ? "selected" : ""}><span>3</span> SURFACE GEOLOGY</div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div className="fact">ROTATION TIME</div>
          <div className="stat">{data[planet].rotation}</div>
        </div>
        <div>
          <div className="fact">REVOLUTION TIME</div>
          <div className="stat">{data[planet].revolution}</div>
        </div>
        <div>
          <div className="fact">RADIUS</div>
          <div className="stat">{data[planet].radius}</div>
        </div>
        <div>
          <div className="fact">AVERAGE TEMP.</div>
          <div className="stat">{data[planet].temperature}</div>
        </div>
      </footer>
    </div>
  )
}

export default Home;