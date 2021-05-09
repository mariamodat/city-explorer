import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Myform extends React.Component {

  render() {
    
    return (
      <div className='star'>
 
        <Form onSubmit={this.props.getLocation} className='form'>
          <hr />
          <Form.Group onSubmit={this.props.getLocation} as={Row} controlId="formHorizontalEmail">
            <Form.Label className='label'>
              Enter the name of the City!
        </Form.Label>

            <Col sm={10}>
              <Form.Control style={{textAlign:'center'}} onChange={this.props.updateSearch} className='label' placeholder="name of the city " />
            </Col>
          </Form.Group>
          <br /> <hr />
          <Form.Group as={Row}>
            <Col sm={{ span: 10, }}>
              <Button className='label' type="submit"> Explore !</Button>
            </Col>
          </Form.Group>
        </Form>


      </div>
    );
  }
}

export default Myform;