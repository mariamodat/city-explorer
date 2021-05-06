import React from 'react';
import Table from 'react-bootstrap/Table';

class Weather extends React.Component {

  render() {


    console.log(this.props.getWeather);
    return (
      <>
        <img className='imgW' src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World" alt="" />
        <Table striped bordered hover variant="dark" >
          <div className='tblBk'>

            <thead className='table'>
              <tr className='table'>
                <th className='table'> Date </th>
                <th> City Forecast</th>
              </tr>
            </thead>



            {this.props.getWeather.map(city =>
            (
              <>
                <tr>
                  <td className='table'> {city.time}</td>
                  <td className='table1' colSpan="2">  {city.forecast}</td>
                </tr>


              </>
            ))

            }

          </div>
        </Table>
      </>
    );
  }
}



export default Weather;