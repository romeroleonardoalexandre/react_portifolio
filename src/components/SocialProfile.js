import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles';

//Stateless Function Component
const SocialProfile = (props) => (
    <div style={{ display:'inline-block' }}>
        <a href={props.social_profile.link}>
            <img src={props.social_profile.image} style={{ width:35, height:35, margin:10}} alt="social" />
        </a>
    </div>
)

const SocialProfiles = () => (
    <div>
        <h1>Redes Sociais</h1>
        <div>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return (
                    <SocialProfile key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE}/>
                )
            })
        }
        </div>
        
    </div>
)

export default SocialProfiles