
import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Footer from './components/footer';
import Axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     data: '',
      search: '',
      show: false,
    }
  }


  getLocation = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=pk.3fb22be1b6805592b5a39af7e5dcbe46&q=${this.state.search}&format=json`;

    const req = await Axios.get(url);
    if (this.state.search ===null){
      console.log('hi');
    }
    this.setState({
      data: req.data[0],
      show: true,

    });

  }


  updateSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,

    });
  

  }



  render() {

    return (
      <>
        <h1> City Explore</h1>
        <h3> Where would You like to Explore ?</h3>
        <Form onSubmit={this.getLocation} className='form'>
          <hr />
          <Form.Group onSubmit={this.getLocation} as={Row} controlId="formHorizontalEmail">
            <Form.Label className='label' column sm={2}>
              Enter the name of the City!
        </Form.Label>

            <Col sm={10}>
              <Form.Control onChange={this.updateSearch} className='label' placeholder="name of the city " />
            </Col>
          </Form.Group>
          <br /> <hr />
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button className='label' type="submit"> Explore !</Button>
            </Col>
          </Form.Group>
        </Form>

        { this.state.show?
        <>
         <h2 show={this.state.show} className='wel'> {`Welcome to  ${this.state.data.display_name}`}

         </h2>
          <img className='img1' src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt="img" />
          </>
           :null 

        }
       
        <Footer />
      </>
    );
  }
}


export default App;
