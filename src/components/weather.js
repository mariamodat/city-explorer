import React from 'react';
import Table from 'react-bootstrap/Table';

class Weather extends React.Component {

  render() {


    console.log(this.props.getWeather);
    return (
      <div >

        <img className='imgW' src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World" alt="" />
        <div className='t1'>
        <Table className='t1' striped bordered hover variant="dark" >


          <thead >
            <tr >
              <th > Date </th>
              <th > City Forecast</th>
            </tr>
          </thead>



          {this.props.getWeather.map(city =>
          (
            <>
              <tr >
                <td > {city.time}</td>
                <td  >  {city.forecast}</td>
              </tr>


            </>
          ))

          }


        </Table>
        </div>
      </div>
    );
  }
}



export default Weather;