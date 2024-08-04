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


  const substack = () => {
    window.open('https://www.substack.com/@kawaiix621', '_blank');
  };
  const warpcast = () => {
    window.open('https://www.warpcast.com/kawaiix621', '_blank');
  };

  const github = () => {
    window.open('https://github.com/tobi-awolaju-21/', '_blank');
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

      <div  className="background-div" >


        {loading ? (
          <div className="glitch">
            <pre id="ascii-donut"></pre>

          </div>
        ) : (
          <div className='glitch2'>
            <h1 style={{ fontFamily: 'BagelFatOne'}}>
           <span style={{ color: 'white' }}>Awolaju Tobi</span>
            </h1>

            <h1 style={{ fontFamily: 'BagelFatOne', fontSize: '18px'}}>
  Blockchain Dev | Art Nerd <span style={{ color: 'white' }}> Kawaiix621</span>
</h1>

 <div style={{display:'flex', textAlign:'center',justifyContent:'center'}}>
            <button onClick={scrollToAbout} className='button_more'>Know More</button>
         
            </div>
          </div>
        )}
      </div>
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
  <h3>🪙 I Abuse</h3>
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
        <li>OpenSourceDev (Blockchain Dev) 2024 - present - Contributing to OpenSource Repos</li>
          <li>Upwork (Freelancer) 2022 - present - worked as Bubble plugin Dev.</li>
          <li>Yapper (Yap yap yap) 2024 - present - Yapping on X, Discord and TG</li>
        </ul>
      </div>

      <div className="projects" style={{ opacity: 0, transition: 'opacity 0.5s' }} ref={(el) => (sections.current[3] = el)}>
        <h3>🪙 Projects ---</h3>
        {[
          
          {
            title: 'Web3 Projects',
            imgSrc: axil,
            description: 'A repo holding all my blockchain projects, 2k users',
            sourceCode: 'View Projects',
            link: 'http://www.goggle.com'
          },
          {
            title: 'Bubble io Plugins',
            imgSrc: axil,
            description: '15+ Bubble io plugins wrtten in Vallina JS to help no code devs',
            sourceCode: 'View Pugins',
            link: 'http://www.goggle.com'
          },
          {
            title: 'My Papers',
            imgSrc: axil,
            description: 'Some CS research Papers I published',
            sourceCode: 'Access Papers',
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
          <button onClick={substack} className='button_more2'>Substack</button>
            <button onClick={github} className='button_more2'>Github</button>
            <button onClick={warpcast} className='button_more2'>Warpcast</button>
         
          <div className="footies"></div>
        </div>
      </div>
    </div>
  );
};

export default App;








