import React from 'react';
import Skill from '../components/Skill';
import EmptyContentSkill from '../components/EmptyContentSkill';
import '../styles/Skills.css'
import { BiLogoFigma, BiGitRepoForked,BiCog, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoPython, BiLogoHtml5, BiLogoNodejs } from 'react-icons/bi';
import { SiVite, SiPowershell, SiAmazonaws, SiElectron} from 'react-icons/si';
import {BsFileWordFill} from 'react-icons/bs';

function Skills ()
{
  const accordionData = [
    { 
      logo: <BiLogoReact className="icon-large"/>,
      title: 'React',
      content: `Skilled in utilizing React to develop modern, responsive user interfaces. Experienced in crafting interactive web applications through efficient component-based development, ensuring dynamic and seamless user experiences.`
    },
    {
      logo: <BiLogoJavascript className="icon-large"/>,
      title: 'Javascript',
      content: `Proficient in leveraging JavaScript to design and develop dynamic and interactive web pages, utilizing a combination of front-end technologies and frameworks to enhance user engagement and deliver seamless user experiences.`
      
      
    },
    {
      logo: <BiLogoNodejs className="icon-large"/>,
      title: 'Node.js',
      content: `Experience harnessing the capabilities of Node.js and REST APIs to tackle intricate challenges. Applied this knowledge to develop innovative solutions, showcasing proficiency in server-side JavaScript and effective communication between clients and servers.`
      
      
    },
    {
      logo: <BiSolidFileCss className="icon-large"/>,
      title: 'CSS',
      content: ``
    },{
      logo: <BiGitRepoForked className="icon-large"/>,
      title: 'Git',
      content: ``
    },
    {
      logo: <BiCog className="icon-large"/>,
      title: 'C++',
      content: ``
    },
    {
      logo: <SiAmazonaws className="icon-large"/>,
      title: 'AWS',
      content: ``
    },
    {
      logo: <SiElectron className="icon-large"/>,
      title: 'Electron',
      content: ``
    },
    {
      logo: <BiLogoFigma className="icon-large"/>,
      title: 'Figma',
      content: ``
    },
    {
      logo: <BiLogoPython className="icon-large"/>,
      title: 'Python',
      content: ``
    },
    {
      logo: <SiPowershell className="icon-large"/>,
      title: 'Powershell',
      content: ``
    },
    {
      logo: <BsFileWordFill className="icon-large"/>,
      title: 'VBA',
      content: ``
    },
    {
      logo: <SiVite className="icon-large"/>,
      title: 'Vite',
      content: ``
    },

  ];
  
  return (
    <>
    
        <section className="skills-section" id='skills'>
          <div className="skills-title">
          <h2>Skill Summary</h2>
          <h3>A list of many of the important technologies I'm familiar with.</h3>
          </div>
          
      
          <div className="skills-container">
            {accordionData.map(({ title, content, logo }) => (
              content === "" ? (
                <EmptyContentSkill title={title} content={content} logo={logo} />
              ) : (
                <Skill title={title} content={content} logo={logo} />
              )
            ))}
          </div>
          
    
        
          
        </section>
    </>
  )
}

export default Skills
