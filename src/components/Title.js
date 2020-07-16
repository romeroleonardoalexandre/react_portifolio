import React, { Component } from 'react'
const TITLES =[
    'Javascript',
    'Vue',
    'Node',
    'PHP'
]
//Class Componet
class Title extends Component {
     
    state = {
        titleIndex: 0,
        fadeIn: false
    }

    componentDidMount(){
        this.timeout = setTimeout(() =>{
            this.setState({fadeIn:false})
        }, 2000)
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.interval)
        clearTimeout(this.timeout)
    }

    animateTitles = () => {
        this.interval = setInterval(()=>{
            
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length
            this.setState({
                titleIndex, fadeIn: true
            })

            this.timeout = setTimeout(() =>{
                this.setState({fadeIn:false})
            }, 2000)

        }, 4000)
    }

    render() {
        const { titleIndex, fadeIn} = this.state
        const title = TITLES[titleIndex]

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>Eu sei programar em {title}</p>
        )
    }
}

export default Title