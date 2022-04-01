import React, { Component } from 'react'
import CardList from '../Components/category-list/category-list.component';

export class Homepage extends Component {

    constructor(){
        super();
        this.state={
            categories: []
            // categories: [  {
            //     "id": 1,
            //     "name": "Book"
            // }]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((category)=>{
            this.setState(()=> {
                return {categories: category}
            })
            
        })
    }

  render() {
    return (
      <div>
          
          <CardList list={this.state.categories}/>
      </div>
    )
  }
}

export default Homepage