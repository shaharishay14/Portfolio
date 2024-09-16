import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLettes from '../AnimatedLetters';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','S', 'h', 'a', 'h', 'a', 'r', ' ', 'I', 's', 'h', 'a', 'y']
  const jobArray = [' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
          <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                  <AnimatedLettes letterClass={letterClass} 
                  strArray={nameArray} idx={15} />
                  <br />
                  <AnimatedLettes letterClass={letterClass} 
                  strArray={jobArray} idx={22} />
              </h1>
              <h2>React / Python / Java / C# / SQL / HTML / CSS</h2>
              <Link to="/contact" className="flat-button">CONTACT ME</Link>
          </div>
          <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );    
};

export default Home;