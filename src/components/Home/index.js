import {Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-ss.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e','d','i','s'];
    const titleArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 
        'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r','.'];
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        },4000)
    });

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={22} />
                </h1>
                <h2>Software / Mechatronics Engineer </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"></Loader>
        </>
    );
}

export default Home;