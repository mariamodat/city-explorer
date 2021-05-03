
import './App.css';
import React from 'react';
import Myform from './components/form';

import Footer from './components/footer';
import Axios from 'axios';
import Header from './components/header'
import Reasults from './components/results'


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
      <Header/>
    <Myform  getLocation={this.getLocation}
    updateSearch={this.updateSearch}
    />

     <Reasults
     show={this.state.show}
     data={this.state.data}

     />
       
        <Footer />
      </>
    );
  }
}


export default App;
