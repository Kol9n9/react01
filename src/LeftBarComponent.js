import React from 'react'
import CategoriesComponent from './CategoriesComponent';
import UserComponent from './UserComponent';
class LeftBarComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            SideBlocks: [
                {
                    Title: "Личный кабинет",
                    Component: UserComponent,
                    Props: {
                        Render: "IndexForm"
                    }
                },
                {
                    Title: "Категории",
                    Component: CategoriesComponent,
                    Props: {
                        Render: "Main"
                    }
                }
            ]
        }
    }
    render()
    {
        return (
            <div>
                
                {this.state.SideBlocks.map((SideBlock,index) => (
                    <div  key={index} className="SideBlock">
                        <div className="SideBlockTitle">
                            <p>{SideBlock.Title}</p>
                        </div>
                        <div className="SideBlockContent">
                            <SideBlock.Component {...SideBlock.Props} />
                        </div>
                    </div>
                ))}
                
            </div>
        );
    }
}
export default LeftBarComponent;