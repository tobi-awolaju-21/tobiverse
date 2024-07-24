import React, { useEffect, useState, useRef } from 'react';

import './assets/styles/class.css';
import solidity from './assets/images/solidity.png';
import rust from './assets/images/rust.png';
import truffle from './assets/images/truffle.png';
import ganache from './assets/images/ganache.png';
import java from './assets/images/java.png';
import nodejs from './assets/images/nodejs.png';
import reactjs from './assets/images/reactJs.png';
import ipfs from './assets/images/ipfs.png';
import ethersjs from './assets/images/ethersJs.png';
import axil from './assets/images/axii.jpg';
import unnamed from './assets/images/unnamed.jpg'
import AssemblyLanguage from './assets/images/asm.jpg'
import clang from './assets/images/c.png'
import mongodb from './assets/images/mongodb.png'



const App = () => {
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const sections = useRef([]);

  window.scrollTo(0, 0);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    sections.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const preTag = document.getElementById('ascii-donut');
    let A = 1,
      B = 1;

    const asciiframe = () => {
      const b = [];
      const z = [];
      A += 0.07;
      B += 0.03;
      const cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B);

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? '\n' : ' ';
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j),
          st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i),
            cp = Math.cos(i),
            h = ct + 2,
            D = 1 / (sp * h * sA + st * cA + 5),
            t = sp * h * cA - st * sA;

          const x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
            y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
            o = x + 80 * y,
            N = 0 | (
              8 *
              ((st * sA - sp * ct * cA) * cB -
                sp * ct * sA -
                st * cA -
                cp * ct * sB)
            );
          if (22 > y && y > 0 && x > 0 && 80 > x && D > z[o]) {
            z[o] = D;
            b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
          }
        }
      }
      preTag.innerHTML = b.join('');
    };

    const interval = setInterval(asciiframe, 50);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>

      <div className={`splash ${loading ? 'loading' : ''}`}>
        {loading ? (
          <div className="glitch">
            <pre id="ascii-donut"></pre>

          </div>
        ) : (
          <>
            <h1 style={{ fontFamily: 'BagelFatOne'}}>
           <span style={{ color: 'white' }}>Awolaju Tobi</span>
            </h1>

            <h1 style={{ fontFamily: 'BagelFatOne' }}> I love Zk and Christ <span  style={{ color: 'white' }}>🐙</span> </h1>
            <div style={{display:'flex'}}>
            <button onClick={scrollToAbout} className='button_more'>About me</button>
            <button onClick={scrollToAbout} className='button_more'>Writings</button>
         
            </div>
          </>
        )}
      </div>


      <section className='abouts' ref={aboutRef}>
        <div style={{ display: 'flex' }}>
          <img className='unnamed' src={unnamed} alt="Profile" />
        </div>
        <p style={{ width:'80%', margin:'10%', marginTop:'5px' }}>
          Hi! I'm Tobi, Loves blockchain,legos and tmnt. 
          an Hobbist Animator and programmer. I've been writing Js for a while now,
          and Rust🦀 is my favorite programming language.
          Compiler design is easily my favorite subject in computer science: I've implemented
          several of my own programming languages
          which you can see below, and read about on my blog.
          I have an unending fondness for Turing Tarpits and
          SKI combinator calculus. </p>
      </section>



<div className="skills" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[1] = el)}>
  <h3>🪙 I Use</h3>
  <div className="scroll-container">
    {[...Array(2)].map((_, i) =>
      [
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
        <div className="grid-item" key={`${i}-${index}`}>
          <img className="pfp4" src={skill.src} alt={skill.label} />
          <p>{skill.label}</p>
        </div>
      ))
    )}
  </div>
</div>




      <div className="experience" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[2] = el)}>
        <h3>🪙 Experience</h3>
        <ul>
          <li>Upwork (Freelancer) 2024 - present - work on gender slider</li>
          <li>SLIDES (Senior Software Engineer) 2024 - present - wrap implementation</li>
          <li>Game starts (Senior Software Engineer) 2024 - present - catapurt delivery system</li>
          <li>Lisk Signature (Senior Software Engineer) 2024 - present - worked on dating app for minors</li>
        </ul>
      </div>

      <div className="projects" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[3] = el)}>
        <h3>🪙 Projects ---</h3>
        {[
          {
            title: 'CompilerX',
            imgSrc: axil,
            description: 'A high-performance compiler designed for modern programming languages, focusing on optimization and speed.',
            sourceCode: 'Github',
            link: 'http://www.goggle.com'
          },
          {
            title: 'LangInter',
            imgSrc: axil,
            description: 'A versatile language interpreter supporting multiple scripting languages, aimed at providing a seamless development experience.',
            sourceCode: 'Try it out',
            link: 'http://www.goggle.com'
          },
          {
            title: 'SearchPro',
            imgSrc: axil,
            description: 'An advanced search engine designed to deliver precise and fast search results using cutting-edge algorithms.',
            sourceCode: 'Github',
            link: 'http://www.goggle.com'
          },
          {
            title: 'NFTMarketplace',
            imgSrc: axil,
            description: 'A marketplace for creating, buying, and selling NFTs (non-fungible tokens) with features such as auctions, royalties, and cross-chain interoperability.',
            sourceCode: 'Github',
            link: 'http://www.goggle.com'
          },
          {
            title: 'DAOPlatform',
            imgSrc: axil,
            description: 'A platform for creating and managing Decentralized Autonomous Organizations (DAOs) with voting mechanisms, treasury management, and proposal tracking.',
            sourceCode: 'Gthub',
            link: 'http://www.goggle.com'
          },
          {
            title: 'BlockchainIdentity',
            imgSrc: axil,
            description: 'A decentralized identity verification system leveraging blockchain to provide secure and verifiable digital identities.',
            sourceCode: 'Github',
            link: 'http://www.goggle.com'
          }
        ].map((project, index) => (
          <div className="box" key={index}>
            <img className="projectimg" src={project.imgSrc} alt={project.title} />
<div className='boxmini'> 
<h4 style={{ textAlign: 'left' }}>{project.title}</h4>
            <p style={{ textAlign: 'left', opacity: 0.7 }}>{project.description}</p>
            <button className="sourceb">{project.sourceCode}</button>
        
   </div>
  </div>
        ))}


      </div>

      <div className="contact" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[4] = el)}>
        <h3>🪙 Get in touch ---</h3>
        <div className="contact_mom">
          <div>
            <a
              className="sourceb"
              href="https://www.linkedin.com/in/awolaju/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on LinkedIn
            </a>
          </div>
          <div className="footies"></div>
        </div>
      </div>
    </div>
  );
};

export default App;








