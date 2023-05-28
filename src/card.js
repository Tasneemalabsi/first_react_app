import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Cards extends React.Component{
    constructor(props){
        super(props)
        this.state={
          favorites:0,
        }
      }

      addFavorites = () => {
        this.setState({favorites: this.state.favorites+1})
    }

    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              {this.props.description}
              </Card.Text>
              <Card.Text>
              ⭐ {this.state.favorites}
              </Card.Text>
              <Button variant="primary" onClick={this.addFavorites}>Add to favorites</Button>
            </Card.Body>
          </Card>
        )
    }
}


export default Cards;


