import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Dimitar</h2>
        <div className='prompt'>
          <p>A Technical Product Manager with a passion to become a web developer.</p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GitHubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>MySQL, MS SQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Kotlin</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home