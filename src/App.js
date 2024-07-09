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

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);

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
            <h1 style={{ fontFamily: 'BagelFatOne' }}>
              Hello, my name is <span style={{ color: 'white' }}>Tobi Awolaju.</span>
            </h1>
            
            <h1 style={{ fontFamily: 'BagelFatOne' }}>I'm a software engineer.</h1>
            <button onClick={scrollToAbout} className='button_more'>Know more</button>
          </>
        )}
      </div>


      <section className='abouts' ref={aboutRef}>
        <div style={{ display: 'flex' }}>
          <img className='unnamed' src={unnamed} alt="Profile" />
          <h3 style={{ fontWeight: 'bold' }}>
            About me
          </h3>
        </div>
        <p style={{ width: '90vw' }}>
          I'm Tobi Awolaju A software engineer witha a keen for clean and standard builds
          I hava a strong bacground in Engineering, Electronics engineering major
          and a strong desire to understand the working princeples of
          every system that intrests me down to the first bit.
        </p>
      </section>



      <div className="skills" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[1] = el)}>
        <h3>👾I use and  abuse---</h3>
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
            title: 'CompilerX',
            imgSrc: axil,
            description: 'A high-performance compiler designed for modern programming languages, focusing on optimization and speed.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          },
          {
            title: 'LangInter',
            imgSrc: axil,
            description: 'A versatile language interpreter supporting multiple scripting languages, aimed at providing a seamless development experience.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          },
          {
            title: 'SearchPro',
            imgSrc: axil,
            description: 'An advanced search engine designed to deliver precise and fast search results using cutting-edge algorithms.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          },
          {
            title: 'NFTMarketplace',
            imgSrc: axil,
            description: 'A marketplace for creating, buying, and selling NFTs (non-fungible tokens) with features such as auctions, royalties, and cross-chain interoperability.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          },
          {
            title: 'DAOPlatform',
            imgSrc: axil,
            description: 'A platform for creating and managing Decentralized Autonomous Organizations (DAOs) with voting mechanisms, treasury management, and proposal tracking.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          },
          {
            title: 'BlockchainIdentity',
            imgSrc: axil,
            description: 'A decentralized identity verification system leveraging blockchain to provide secure and verifiable digital identities.',
            sourceCode: 'See Source Code',
            link: 'http://www.goggle.com'
          }
        ].map((project, index) => (
          <div className="box" key={index}>
            <img className="projectimg" src={project.imgSrc} alt={project.title} />
            <h4 style={{ textAlign: 'left' }}>{project.title}</h4>
            <p style={{ textAlign: 'left', opacity: 0.7 }}>{project.description}</p>
            <button className="sourceb">{project.sourceCode}</button>
          </div>
        ))}


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








