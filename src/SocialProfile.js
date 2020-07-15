import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render() {
        const { image, link } = this.props.social_profile;

        return (
            <div style={{ display:'inline-block' }}>
                <a href={link}><img src={image} style={{ width:35, height:35, margin:10}} alt="social" /></a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render() {
        return (
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
    }
}

export default SocialProfiles