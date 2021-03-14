import React from 'react'
import LeftBarComponent from './LeftBarComponent'
import './styles/maincontent.css'
class MainContent extends React.Component{
    render()
    {
        return (
            <div className="wrapper">
                <aside className="LeftBar">
                    <LeftBarComponent/>
                </aside>
                <main className="Content">

                </main>
                <aside className="RightBar">

                </aside>
            </div>
        );
    }
}
export default MainContent;