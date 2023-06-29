'use client'
import React from "react";
import "./nav.css";
import Link from "next/link";
import { useState } from "react";

function IconMenu({funcion}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
      onClick={funcion}
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}


function Nav() {

  const [navBar, setNavBar] = useState(false)

  const handleNav = () =>{
    console.log ("Hola");
    let newNav = !navBar;
    setNavBar(newNav);
  }

  return (
    <nav >
      <h3>Edie</h3>
      <IconMenu funcion={handleNav}/>
      {
        navBar ? (
          <div id="navSecondary">
            <ul>
                <li>
                <Link href={"#"}>Home</Link>
                </li>
                <li>
                <Link href={"#"}>Services</Link>
                </li>
                <li>
                <Link href={"#"}>Our Works</Link>
                </li>
                <li>
                <Link href={"#"}>Clients</Link>
                </li>
                <li>
                <Link href={"#"}>Contact</Link>
                </li>
            </ul>
            <div className="gris" onClick={handleNav}>

            </div>
          </div>
        ):(
          ""
        )
      }
      
      <ul>
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>Services</Link>
        </li>
        <li>
          <Link href={"#"}>Our Works</Link>
        </li>
        <li>
          <Link href={"#"}>Clients</Link>
        </li>
        <li>
          <Link href={"#"}>Contact</Link>
        </li>
      </ul>
      
    </nav>
  );
}

export default Nav;
