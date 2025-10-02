import React from 'react'
import {motion} from 'framer-motion'
import './Work.scss'
import { AppWrap } from '../../wrapper'

const projects = [
  { title: 'Cost Optimization of AWS Account', description: 'AWS Lambda function in Python using boto3 that deletes unused EBS snapshots', tools: 'Python, boto3, AWS Services, Serverless Framework', github: 'https://github.com/SaikumarUCM/Cost-Optimization-EBS-Snapshot', website:'' },
  { title: 'Bash/Unix Script', description: 'Bash Script to Retrieve the List of resources in the AWS Account', tools: 'Bash, AWS, Github', github: 'https://gist.github.com/SaikumarUCM/586b6acf2a35dd058785896bb3f65aef', website: '' },
  { title: 'Movie Booking Application', description: 'Application used to book the movie tickets in the near my area', tools: 'Java,react, Sprinig boot,TypeScript,Docker', github: 'https://github.com/SaikumarUCM/Movie-Ticket-Booking-System', website:'' },
  { title: 'Intelligent Financial Document Analyzer (Spring AI, RAG)', description: 'Developed a Spring Boot application integrating OpenAI API to implement Retrieval-Augmented Generation (RAG), enabling context-aware AI responses', tools: 'Java, Spring, Spring AI, PG Vector', github: 'https://github.com/SaikumarUCM/Intelligent-Financial-Document-Analyzer-Spring-AI-RAG-', website: '' },
  { title: 'Harris Corner Detection', description: 'Application used to detect corners in images', tools: 'Python, OpenCV', github: 'https://github.com/SaikumarUCM/Harris-Corner-Detection', website: ''},
]
const Work = () => {
  return (
    <div className='app__work'>
      <div className='app__work-projects'>
        <div className='app__work-projects-title'>
          PROJECTS
          <svg className="blinking">
            <circle cx="20" cy="20" r="10" fill="red" />
            Sorry, your browser does not support inline SVG.  
          </svg> 
        </div>
        <div className='app__work-projects-list'>
          {projects.map((project, index) => (
            <motion.div
                whileHover={{ scale: 1.008 }}
                whileInView = {{x: index % 2 === 0 ? [-50, 0] : [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__work-projects-item'
                key={index}
              >
                <div className='app__work-projects-s1'>
                  <div className='app__work-projects-item-title'>{project.title}</div>
                  <div className='app__work-projects-item-description'>{project.description}</div>
                  <div className='app__work-projects-item-tools'>{project.tools}</div>
                </div>
                <div className='app__work-projects-s2'>
                  <div className='app__work-projects-item-links'>
                    <a href={project.github} target='_blank' rel='noreferrer'> <span>Repository</span> </a>
                    {project.website!=='' ? (
                      <a href={project.website} target='_blank' rel='noreferrer'> <span>Try It Out</span> </a>
                    ) : (
                      <></>
                    )
                    }
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='app__work-experience'>
        <div className='app__work-experience-title'>
          EXPERIENCE
        </div>
        <div className='app__work-experience-list'>
          <motion.div
            whileHover={{ scale: 1.008 }}
            whileInView = {{x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__work-experience-item'
          >
            <div className='app__work-experience-s1'>
              <div className='' style={{display: 'flex'}}>
                <div className='app__work-experience-item-title'>Software Developer</div>
                <div className='app__work-experience-item-company' style={{paddingLeft:"8px"}}>Mike Keith Insurance</div>
              </div>
              
              <div className='app__work-experience-item-date'>Jan 2025 - Current</div>
            </div>
            <div className='app__work-experience-item-description'>● Developed RESTful APIs using Spring MVC and Spring Boot, leveraging Spring Cloud design patterns (Circuit Breaker, API Gateway, Service Discovery) to build resilient and scalable microservices. <br></br>
            ● Implemented Kafka-based asynchronous messaging to integrate the Order Service with the Notification Service 
            ● Built responsive ReactJs components with ES6+ and Jest tests, improving frontend performance and boosting user interaction speed by 30%.
            </div>  
          </motion.div>
        </div>
        <div className='app__work-experience-list'>
          <motion.div
            whileHover={{ scale: 1.008 }}
            whileInView = {{x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__work-experience-item'
          >
            <div className='app__work-experience-s1'>
              <div className='' style={{display: 'flex'}}>
                <div className='app__work-experience-item-title'>Software Developer</div>
                <div className='app__work-experience-item-company' style={{paddingLeft:"8px"}}>IndiaMART</div>
              </div>
              
              <div className='app__work-experience-item-date'>Jan 2022 - Apr 2023</div>
            </div>
            <div className='app__work-experience-item-description'>● Developed RESTFul microservice APIs using Java Spring Boot, boosting data processing efficiency by 40%.
●  Developed security and automation scripts using Python and Spark to monitor and validate the Event Notifications.</div>  

            
          </motion.div>
        </div>
        <div className='app__work-experience-list'>
          <motion.div
            whileHover={{ scale: 1.008 }}
            whileInView = {{x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__work-experience-item'
          >
            <div className='app__work-experience-s1'>
              <div className='' style={{display: 'flex'}}>
                <div className='app__work-experience-item-title'>Software Developer co-op</div>
                <div className='app__work-experience-item-company' style={{ paddingLeft: "8px"}}>Hexaware Technologies</div>
              </div>
              
              <div className='app__work-experience-item-date'>Jan 2021 - Noc 2021</div>
            </div>
            <div className='app__work-experience-item-description'>● Built and optimized React UI for application and implemented Cypress E2E tests, reducing production bugs by 30%.
● Worked on JavaEE platform using Servlets, JSP, EJBs, developing enterprise solutions, handling server-side logic.
● Achieved 80% code coverage with unit tests and integration tests using JUnit, Mockito and Test Containers.
● Documented the API’s using Swagger and Integrated the application with AWS SDK for aws services.</div>  

            
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Work, 'work')