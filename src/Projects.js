import React, { Component } from 'react'
import PROJECTS from './data/projects'
import SOCIAL_PROFILES from './data/socialProfiles';
import SocialProfiles from './SocialProfile'

class Project extends Component{
    render() {
        const { title, image, description, link } = this.props.project;

        return (
            <div style={{ display:'inline-block' }}>
                <h3>{title}</h3>
                <img src={image} style={{ width:200, height:120}} alt="projeto" />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component{
    render() {
        return (
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
    }
}

export default Projects