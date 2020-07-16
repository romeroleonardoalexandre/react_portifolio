import React, { Component } from 'react'
import PROJECTS from '../data/projects'

const Project = (props) => (
    <div style={{ display:'inline-block' }}>
        <h3>{props.project.title}</h3>
        <img src={props.project.image} style={{ width:200, height:120}} alt="projeto" />
        <p>{props.project.description}</p>
        <a href={props.project.link}>{props.project.link}</a>
    </div>
)


const Projects = () => (
    <div>
        <h1>Meus projetos</h1>
        {
            PROJECTS.map(PROJECT => {
                return (
                    <Project key={PROJECT.id} project={PROJECT}/>
                )
            })
        }
    </div>
)


export default Projects