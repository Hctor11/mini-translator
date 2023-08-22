"use client";
import Form from "./components/Form";
import "./styles/style.sass";
import ToggleMode from "./components/ToggleMode";
import TranslateForm from "./components/NewDropdown";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import {FaGithub, FaLinkedin, FaDribbble, FaBehance} from "react-icons/fa"


const Home = () => {
  const message = 'created with <3 by Hctor11'
  return (
    <div className="content">
      <nav>
        <Image className="icon-image" src="/brand.svg" width={150} height={100} alt="img"/>
        <ToggleMode />
      </nav>
      <main>
        <Form></Form>
        <TranslateForm />
      </main>
      <footer>
      <Image className="inverse-icon" src="/iso.svg" width={70} height={40} alt="img"/>
        <IconContext.Provider value={{ size: '1.5em' }}>
        <div className="icon-container">
          <Link href='https://github.com/Hctor11' target="_blank" style={iconStyle}>
            <FaGithub/>
          </Link>
          <Link href='https://linkedin.com/in/hectorrivera222/' target="_blank" style={iconStyle}>
            <FaLinkedin/>
          </Link>
          <Link href='https://dribbble.com/hectorrivera222' target="_blank" style={iconStyle}>
            <FaDribbble/>
          </Link>
          <Link href='https://www.behance.net/hctorrivera3' target="_blank" style={iconStyle}>
            <FaBehance/>
          </Link>
        </div>
        </IconContext.Provider>
      </footer>
    </div>
  );
};

const iconStyle = {
  display: 'inline-block',
  width: '32px'
}


export default Home;
