import React from 'react'
import './styles/categories.css'
class CategoriesComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Categories: []
        }
      //  this.changeCategoryVisible = this.changeCategoryVisible.bind(this);
    }
    LoadCategories()
    {
        const cat = [
            // {
            //     CategoryID: 0,
            //     Name: "Телефоны",
            //     CategoryParrentID: null,
            //     CountGoods: 25,
            //     IsVisible : true,
            //     Childrens: []
            // },
            // {
            //     CategoryID: 1,
            //     Name: "Компьютеры",
            //     CategoryParrentID: null,
            //     CountGoods: 2,
            //     IsVisible : true,
            //     Childrens: []
            // },
            {
                CategoryID: 2,
                Name: "Комплеткующие",
                CategoryParrentID: null,
                CountGoods: 20,
                IsVisible : true,
                Childrens: []
            },
            {
                CategoryID: 3,
                Name: "Процессоры",
                CategoryParrentID: 2,
                CountGoods: 10,
                IsVisible : false,
                Childrens: []
            },
            {
                CategoryID: 4,
                Name: "Intel",
                CategoryParrentID: 3,
                CountGoods: 10,
                IsVisible : false,
                Childrens: []
            },
            {
                CategoryID: 5,
                Name: "Core",
                CategoryParrentID: 4,
                CountGoods: 10,
                IsVisible : false,
                Childrens: []
            },
            {
                CategoryID: 6,
                Name: "i9",
                CategoryParrentID: 5,
                CountGoods: 10,
                IsVisible : false,
                Childrens: []
            },
        ];
        for(let i = 0; i < cat.length; i++)
        {
            if(cat[i].CategoryParrentID)
            {
                let parentCategory = -1;
                parentCategory = this.findParrentCategory(cat, cat[i].CategoryParrentID)
                if(parentCategory !== null)
                    parentCategory.Childrens.push(cat[i]);
                
                cat.splice(i,1);
                i = --i;
            }
        }
        this.setState({
            Categories : cat
        })
        
    }
    changeCategoryVisible = (ID) =>
    {
        const parrentID = parseInt(ID);

        // const categories = this.state.Categories.slice();
        // const categoryID = parseInt(e.target.parentNode.getAttribute("id").split("category#")[1]);
        const parent = this.state.Categories.find((category) => {
             if(category.CategoryID === parrentID)
                 return category;
         });
        console.log(parent);

        parent.Childrens.map((children) => {
             children.IsVisible = true;
             console.log("chil", children.IsVisible);
         })
        //  /*for(let i = 0; i < parent.Childrens.length; i++)
        //  {
        //      parent.Childrens[i].IsVisible = true;
        //  }*/
        //this.state.Categories[0].Childrens[0].IsVisible = true;
        // console.log('state', this.state.Categories);
        // console.log('cat', categories);

         this.setState({Categories : this.state.Categories});
    }
    render()
    {
        console.log(this.state.Categories);
        
        
        const categories = this.state.Categories.map(function cat(category,index){
            
            if(!category.IsVisible) return; 

            if(category.Childrens.length !== 0)
            {
                const subcategories = category["Childrens"].map((subcategory) => cat(subcategory),this);               
                return <li key={index} onClick={() => this.changeCategoryVisible(category.CategoryID)}>
                    <p>{category.Name}</p>
                    <ul>
                        {subcategories}
                    </ul>
                    </li>;
            }
            return <li key={index}><p>{category.Name}</p></li>
        },this);
        

        return (
            <ul className="MainCategories">
                {categories}
            </ul>
        );
    }
    componentDidMount()
    {
        this.LoadCategories();
 
    }
    findParrentCategory(array, parrentID, index = 0)
    {
        let findParrent = null;
        for(let i = 0; i < array.length; i++)
        {
            if(array[i].CategoryID === parrentID)
            {
                findParrent = array[i];
                break;
            }
        }
        if(findParrent !== null) return findParrent;
        if(index === array.length) return null;

        for(let i = 0; i < array.length; i++)
        {
            if(array[i].Childrens.length !== 0)
            {
                findParrent = this.findParrentCategory(array[i].Childrens,parrentID,index);
                if(findParrent !== null) return findParrent;
            }
        }
        return null;
    }
   
}
export default CategoriesComponent;