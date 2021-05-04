
import './App.css';
import React from 'react';
import Myform from './components/form';

import Footer from './components/footer';
import Axios from 'axios';
import Header from './components/header'
import Weather from './components/weather'
import Reasults from './components/results'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     data: '',
      search: '',
      show: false,
      weatherData:'',
    }
  }


  getLocation = async (e) => {
    e.preventDefault();
    try 
    {

      let url = `https://us1.locationiq.com/v1/search.php?key=pk.3fb22be1b6805592b5a39af7e5dcbe46&q=${this.state.search}&format=json`;
  
      const req = await Axios.get(url);
     
      this.setState({
        data: req.data[0],  
      });
    }

catch (error)
{

  console.log(error.response) ;
 }
 this.getWeatherData()
}


  getWeatherData = async () => {
    const expressWeatherUrl = `http://localhost:5000/weather`;
    const expressReq = await Axios.get(expressWeatherUrl);
    console.log(expressReq.data);
    this.setState({
      weatherData: expressReq.data,
      show: true
    })
    console.log('the weather datta',this.state.weatherData);
  };




  updateSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,

    });
  

  }



  render() {

    return (
      <>
      <Header/>
    <Myform  getLocation={this.getLocation}
    updateSearch={this.updateSearch}
    />

     <Reasults
     show={this.state.show}
     data={this.state.data}

     />
     {this.state.show &&

       <Weather
       getWeather={this.state.weatherData}
       show={this.state.show}/>       

     }
        <Footer />
      </>
    );
  }
}


export default App;
