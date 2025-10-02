import React from 'react'
import { BsGithub,BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href='https://github.com/SaikumarUCM' target="_">
            <BsGithub/>
        </a>
        <a href='https://www.linkedin.com/in/saikumarpas/' target="_">
            <BsLinkedin/>
        </a>
        
    </div>
  )
}

export default SocialMedia