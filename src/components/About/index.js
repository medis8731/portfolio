import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAws, faCss3, faDocker, faGitAlt, faHtml5, faJava, faJsSquare, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        },3000)
    });

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am Mahdis Salehpoor, a Mechanical and Mechatronics Engineering graduate student at the University of Waterloo. I have a strong foundation in Computer Engineering, having graduated with distinction from the University of Manitoba.
                </p>
                <p>
                    I am passionate about technology and enjoy working on projects that involve software development, robotics, and automation. My professional experience includes roles as an Automated Test Engineer at Monteris Medical, where I developed automated scripts and test matrices, and as a Software Developer at Canada Life Assurance Company, where I developed a full stack website and generated machine learning models to predict system issues.
                </p>
                <p>
                    I have hands-on experience with a variety of programming languages, including Python, C++, and Java, and am proficient with AWS services. My projects include optimization of cloud architecture, data logging systems for heavy-duty vehicles, and the implementation of optimization algorithms and path planning for a shopping assistant system.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNode} color="#68a063"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color="#f89820"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faAws} color=" #FF9900"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faDocker} color="#0db7ed"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#4584b6" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default About;
