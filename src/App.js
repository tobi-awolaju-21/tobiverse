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

const Portfolio = () => {

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const viewportHeight = window.innerHeight / 3;
      const totalHeight = document.body.scrollHeight * 0.55;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      let newOpacity = 1 - (scrollTop / viewportHeight);
      newOpacity = Math.min(1, Math.max(0, newOpacity));
      // document.querySelector('.headies').style.opacity = newOpacity;

      newOpacity = (scrollTop / totalHeight) - 1;
      newOpacity = Math.min(Math.max(0, newOpacity), 1);
      document.querySelector('.footies').style.opacity = newOpacity;

      newOpacity = (scrollTop / totalHeight * 20) - 1;
      newOpacity = Math.min(Math.max(0, newOpacity), 1);
      document.querySelector('.skills').style.opacity = newOpacity;

      newOpacity = (scrollTop / totalHeight * 3) - 1;
      newOpacity = Math.min(Math.max(0, newOpacity), 1);
      document.querySelector('.experience').style.opacity = newOpacity;

      newOpacity = (scrollTop / totalHeight * 2) - 1;
      newOpacity = Math.min(Math.max(0, newOpacity), 1);
      document.querySelector('.projects').style.opacity = newOpacity;
    };

    // Add event listener to the window object
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
      <p>
        Web3 software engineer | Electronics engineering major.
      </p>
    </div>
      <p style={{width:'90vw'}}>
      I'm Tobi Awolaju (Black Tea) 

Innovative Web3 Software Engineer with a strong 
foundation in Electronics Engineering. Passionate about leveraging
 blockchain technology to create decentralized applications and solutions. Experienced
  in developing smart contracts, blockchain protocols, and integrating Web3 functionalities. Adept at 
bridging the gap between 
traditional electronics engineering principles and cutting-edge 
Web3 innovations.
      </p>
      </section>

    

      <div className="skills">
        <h3>👾Languages and Tools I abuse---</h3>

        <div className="grid-container">
          {[
            { src: AssemblyLanguage, label: 'Assembly Language' },
            { src: solidity, label: 'Solidity' },
            { src: rust, label: 'Rust' },
            { src: truffle, label: 'truffle' },
            { src: ganache, label: 'Ganache' },
            { src: chainlink, label: 'chainlink' },
            { src: java, label: 'Java' },
            { src: nodejs, label: 'NodeJs' },
            { src: reactjs, label: 'Reactjs' },
            { src: ipfs, label: 'IPFS' },
            { src: web3js, label: 'web3js' },
            { src: ethersjs, label: 'ethersJs' }
          ].map((skill, index) => (
            <div className="grid-item" key={index}>
              <img className="pfp4" src={skill.src} alt={skill.label} />
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="experience">
        <h3>👾Experience</h3>
        <ul>
          <li>Lead Software engineer for an open source compliler for a DePi project</li>
          <li>Lead software engineer as slides a campus social app</li>
          <li>Lead researcher on Amoung us turning test</li>
          
          <li>Extensive blockchain engineering experience across Layer-1, Layer-2, and PC provider wallet</li>
          <li>Proficient in Java with a deep understanding of JVM, IO, multi-threading, concurrency, and networking and EVM</li>
        </ul>
      </div>

      <div className="projects">
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

      <div className="contact">
        <h3>👾Get in touch ---</h3>

        <div className="contact_mom">
          <h2>Message me on Linkedin</h2>


          <div class="footies">
          </div>


        </div>
      </div>
    </div>
  );
};

export default Portfolio;