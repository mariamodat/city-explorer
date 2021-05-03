import React from 'react';
class Reasults extends React.Component {
  state = {}
  render() {
    return (
      <>

        { this.props.show ?
          <>
            <h2 show={this.props.show} className='wel'> {`Welcome to  ${this.props.data.display_name}`}

            </h2>
            <img className='img1' src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.data.lat},${this.props.data.lon}&zoom=10`} alt="img" />
          </>
          : null

        }
      </>
    );
  }
}

export default Reasults;