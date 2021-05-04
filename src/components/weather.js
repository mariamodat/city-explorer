import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

class Weather extends React.Component {

  render() {


    console.log(this.props.getWeather);
    return (
      <>
        <Table striped bordered hover variant="dark" className='table'>
          <thead className='table'>
            <tr className='table'>
              <th className='table'>#</th>
              <td> </td>
            </tr>
          </thead>

       

            {this.props.getWeather.map(city =>
            (
              <>
                <tr>
                  <td className='table'> {city.time}</td>
                </tr>
                <tr>
                  <td className='table1' colSpan="2">  {city.forecast}</td>
                </tr>


              </>
            ))

            }

          
        </Table>
      </>
    );
  }
}



export default Weather;