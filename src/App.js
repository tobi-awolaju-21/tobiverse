import React, { useEffect,useRef } from 'react';

import './assets/styles/class.css';
import solidity from './assets/images/solidity.png';
import rust from './assets/images/rust.png';
import truffle from './assets/images/truffle.png';
import ganache from './assets/images/ganache.png';
import chainlink from './assets/images/chainlink.png';
import java from './assets/images/java.png';
import nodejs from './assets/images/nodejs.png';
import reactjs from './assets/images/reactJs.png';
import ipfs from './assets/images/ipfs.png';
import web3js from './assets/images/web3js.png';
import ethersjs from './assets/images/ethersJs.png';
import opensea from './assets/images/opensea.jpg';
import axil from './assets/images/axil.png';
import unnamed from './assets/images/unnamed.jpg'
import AssemblyLanguage from './assets/images/asm.jpg'
import clang from './assets/images/c.png'
import mongodb from './assets/images/mongodb.png'



const App = () => {
  const aboutRef = useRef(null);
  const sections = useRef([]);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Callback function to handle intersection changes
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
      });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1 // Adjust threshold as needed
    });

    // Observe each section
    sections.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up observer when the component is unmounted
    return () => {
      sections.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="splash">
        <h1 style={{ fontFamily: 'BagelFatOne' }}>
          Hello, my name is <span style={{ color: 'white' }}>Tobi Awolaju.</span>
        </h1>
        <h1 style={{ fontFamily: 'BagelFatOne' }}>I'm a software engineer.</h1>
        <button onClick={scrollToAbout} className='button_more'>Know more</button>
      </div>

      
      <section className='abouts' ref={aboutRef}>
      <div style={{ display: 'flex' }}>
      <img className='unnamed' src={unnamed} alt="Profile" />
      <p style={{ fontWeight: 'bold' }}>

        Web3 software engineer | Electronics engineering major.
      </p>
    </div>
      <p style={{width:'90vw'}}>
      I'm Tobi Awolaju A software engineer witha a keen for clean and standard builds
      I hava a strong bacground in Engineering, Electronics engineering major
      and a strong desire to understand the working princeples of 
      every system that intrests me down to the first bit.
      </p>
      </section>

      

      <div className="skills" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[1] = el)}>
        <h3>👾Languages and Tools I abuse---</h3>
        <div className="grid-container">
          {[
            { src: AssemblyLanguage, label: 'Assembly Language' },
            { src: clang, label: 'c/c++' },
            { src: rust, label: 'Rust' },
            { src: solidity, label: 'Solidity' },
            { src: nodejs, label: 'NodeJs' },
            { src: java, label: 'Java' },
            { src: reactjs, label: 'Reactjs' },
            { src: truffle, label: 'truffle' },
            { src: ganache, label: 'Ganache' },
            { src: mongodb, label: 'mongo DB' },
            { src: ipfs, label: 'IPFS' },
            { src: ethersjs, label: 'ethersJs' }
          ].map((skill, index) => (
            <div className="grid-item" key={index}>
              <img className="pfp4" src={skill.src} alt={skill.label} />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="experience" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[2] = el)}>
        <h3>👾Experience</h3>
        <ul>
          <li>Lead Software engineer for an open source compliler for a DePi project</li>
          <li>Lead software engineer as slides a campus social app</li>
          <li>Lead researcher on Among us turning test</li>
          <li>Extensive blockchain engineering experience across Layer-1, Layer-2, and PC provider wallet</li>
          <li>Proficient in Java with a deep understanding of JVM, IO, multi-threading, concurrency, and networking and EVM</li>
        </ul>
      </div>

      <div className="projects" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[3] = el)}>
        <h3>👾Projects ---</h3>
        {[
          {
            title: 'Basquiat',
            imgSrc: opensea,
            description: 'A P2B wallet for direct trade to and from Nigeria local banks and Ethereum blockchain',
            sourceCode: 'Sourcecode',
            tryApp: 'Try App'
          },
          {
            title: 'Footclan (work in progress)',
            imgSrc: axil,
            description: 'An esport platform that allows you to place eth weiger on mobile multiplayer games in custom server matches. currently supports codm, codm warzone, pubg, brawalla,farlight',
            sourceCode: 'Sourcecode',
            tryApp: 'Try App'
          },
          {
            title: 'Footclan (work in progress)',
            imgSrc: axil,
            description: 'An esport platform that allows you to place eth weiger on mobile multiplayer games in custom server matches. currently supports codm, codm warzone, pubg, brawalla,farlight',
            sourceCode: 'Sourcecode',
            tryApp: 'Try App'
          },
          {
            title: 'Footclan (work in progress)',
            imgSrc: axil,
            description: 'An esport platform that allows you to place eth weiger on mobile multiplayer games in custom server matches. currently supports codm, codm warzone, pubg, brawalla,farlight',
            sourceCode: 'Sourcecode',
            tryApp: 'Try App'
          }
        ].map((project, index) => (
          <div className="box" key={index}>
            <h4 style={{ textAlign: 'left' }}>{project.title}</h4>
            <img className="projectimg" src={project.imgSrc} alt={project.title} />
            <p style={{ textAlign: 'left', opacity: 0.7 }}>{project.description}</p>
            <button className="sourceb">{project.sourceCode}</button>
            <button className="tryb">{project.tryApp}</button>
          </div>
        ))}

        <p style={{ width: '100%', textAlign: 'right' }}>
          <a href="https://github.com/tobi-awolaju-21" target="_blank" rel="noopener noreferrer">View more of my projects (25) on Github</a>
        </p>
      </div>

      <div className="contact" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[4] = el)}>
        <h3>👾Get in touch ---</h3>
        <div className="contact_mom">
          <h2>Message me on LinkedIn</h2>
          <div className="footies"></div>
        </div>
      </div>
    </div>
  );
};

export default App;





       

   
