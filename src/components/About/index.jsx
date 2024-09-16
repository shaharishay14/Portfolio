import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLettes from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
        <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLettes 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}
                />
            </h1>    
            <br />
            <p>
                I’m a computer science student based in Israel, 
                with a passion for building full-stack applications. 
                I specialize in both backend and frontend development, 
                creating dynamic and user-friendly solutions.
            </p>
            <p>
                I enjoy tackling complex problems through clean, 
                efficient code and am always eager to expand my knowledge across various technologies. 
                From backend logic and databases to designing intuitive user interfaces, 
                I strive to deliver seamless and impactful user experiences.
            </p>
            <p>
                With a strong foundation in Python, JavaScript, and React, 
                I’ve worked on multiple projects, ranging from web applications to mobile platforms. 
                I am driven by a desire to bring ideas to life through code, 
                constantly seeking opportunities to refine my skills and develop innovative solutions.
            </p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faPython} color="#4B8BBE"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
            </div>
        </div>
        </div>
        <Loader type="pacman" />
    </>
  );
};

export default About;

