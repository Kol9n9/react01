import React from 'react'
import './styles/usercomponent.css'
class UserComponent extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        switch(this.props.Render)
        {
            case "IndexForm":
                return (
                    <form className="userAuthorization" action="#">
                        <input id="userLogin" type="text" placeholder="Логин"/>
                        <input id="userPassword" type="password" placeholder="Пароль"/>        
                        <input type="button" value="Войти"/>
                        <input type="button" value="Регистрация"/>
                    </form>
                );
            default:
                return (<h1>ERROR</h1>);

        }
    }
}
export default UserComponent;