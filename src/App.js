
import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Footer from './components/footer';
import axios from 'axios';


class App extends React.Component {

constructor (props){
  super(props);
  this.state = {
    data: '',
    search: '',
    show : false,
  }
}



getLocation= async(e)=> {
  e.preventDefault();
let url =`https://us1.locationiq.com/v1/search.php?key=pk.3fb22be1b6805592b5a39af7e5dcbe46&q=${this.state.search}&format=json`;

let req= await axios.get(url);
this.setState({
  data:req.data[0],
  show: true,

});

}


updateSearch=(e)=>{
  e.preventDefault();
  this.setState({
    search: e.target.value,
  })
  
}




  render() { 

    return (
      <>
      <h1> City Explore</h1>
      <h3> Where would You like to Explore ?</h3>
      <Form onSubmit={this.getLocation} className='form'>
      <hr/>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label className='label' column sm={2}>
          Enter the name of the City!
        </Form.Label>
        
        <Col sm={10}>
          <Form.Control onChange={this.updateSearch} className='label'  placeholder="name of the city "  />
        </Col>
      </Form.Group>
    <br/> <hr/>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button className='label' type="submit">Explore !</Button>
        </Col>
      </Form.Group>
    </Form>
    <h2>
       {/* {this.data.display_name} */}
       Welcome To 
       </h2>
    <img src="" alt=""/>
    <Footer/>
      </>
      );
  }
}
 


export default App;
