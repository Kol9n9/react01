import React from 'react'
import './styles/navigation.css'
class NavigationComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            navigation: [{
                title: "Главная",
                link: "#"
            },
            {   
                title: "Товары",
                link: "#"
            },
            {
                title: "Контакты",
                link: "#"
            },
            {
                title: "Форум",
                link: "#"
            }]
        };
    }
    render()
    {
        return(
            <nav>
                <ul>
                    {this.state.navigation.map((link,index) => {
                        return (<li key={index}><a href={link.link}>{link.title}</a></li>)
                    })}
                </ul>
            </nav>
        );
    }
}
export default NavigationComponent;