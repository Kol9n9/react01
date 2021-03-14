import React from 'react'
import './styles/header.css'
class HeaderComponent extends React.Component
{
    render()
    {
        return (
            <header>
                <h1>Internet shop: <a href="#">{this.props.ShopName}</a></h1>
            </header>
        );
    }
}
export default HeaderComponent;