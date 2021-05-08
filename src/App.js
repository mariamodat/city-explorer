
import './App.css';
import React from 'react';
import Myform from './components/form';

import Footer from './components/footer';
import Axios from 'axios';
import Header from './components/header'
import Weather from './components/weather'
import Reasults from './components/results'
import Movie from './movies';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      search: '',
      show: false,
      show2: false,
      weatherData: '',
      moviesData: '',
    }
  }


  getLocation = async (e) => {
    e.preventDefault();
    try {

      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.search}&format=json`;

      const req = await Axios.get(url);

      this.setState({
        data: req.data[0],
      });
    }

    catch (error) {
      this.setState({
        dataErr: error.response.data.error,
        msg: error.response.status,

      })
      console.log(error.response);
    }
    this.getWeatherData();
    this.getMoviesFunc();
  }


  getWeatherData = async () => {
    const expressWeatherUrl = `${process.env.REACT_APP_SERVER}/weatherl?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    const expressReq = await Axios.get(expressWeatherUrl);
    console.log(expressReq.data);
    this.setState({
      weatherData: expressReq.data,
      show: true

    })
    console.log('the weather datta', this.state.weatherData);
  };


  getMoviesFunc = async () => {
    const expressMovies = `${process.env.REACT_APP_SERVER}/movies?query=${this.state.search}`
    let movReq = await Axios.get(expressMovies);
    this.setState({
      moviesData: movReq.data,
      show2: true,
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
        <Header />
        <Myform getLocation={this.getLocation}
          updateSearch={this.updateSearch}
        />

        <Reasults
          show={this.state.show}
          data={this.state.data}

        />
        {this.state.show &&
          <>
            <Weather
              getWeather={this.state.weatherData}
              show={this.state.show} />

          </>

        }

        {this.state.show2 &&
           <Movie getMovie={this.state.moviesData}
            show={this.state.show2} />}

        <Footer />
      </>
    );
  }
}


export default App;
