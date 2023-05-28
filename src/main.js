import React from "react";
import data from './data.json';
import Cards from './card';
import Form from 'react-bootstrap/Form';


class Main extends React.Component{

  constructor(props){
    super(props)
    this.state={
      favorites:0,
      arr:data
    }
  }



  filterCategory = (e) => {
    let userChoice = e.target.value;
    let newData = [];
    data.filter(item =>{
      if(userChoice === "all"){
        this.setState({arr:data})
      }
      else if (userChoice === item.category){
        newData.push(item);
        this.setState({arr:newData});
      }
    })
    
  }

    render(){
        return(
          <>
          <Form.Select aria-label="Default select example" onChange={this.filterCategory}>
          <option value="all">All</option>
          <option value="nature">Nature</option>
          <option value="places">Places</option>
          <option value="animal">Animal</option>
        </Form.Select>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            {this.state.arr.map(item=>{
              return(
                <Cards
                  image_url={item.image_url}
                  title={item.title}
                  description = {item.description}
                />
  )})}
</div>
</>
        )
    }
}

export default Main;