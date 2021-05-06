import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
class Movie extends React.Component {

  render() {
    console.log('getMovies', this.props.getMovie);

    return (
      <>

        <CardColumns>
          {this.props.getMovie.map(movie => {
            return (

              <>
                <Card bg="primary" text="white" style={{ width: '18rem' }}>
                  <Card.Header className='title'>{movie.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{movie.avg}</Card.Title>
                    <img src={`${movie.image}`} alt="movies"/>
                    <Card.Text>
                      {movie.overview}
                    </Card.Text>
   
      <Card.Title>{movie.votes}</Card.Title>
                    <Card.Title>{movie.popularity}</Card.Title>
                    <Card.Title>{movie.released_on}</Card.Title>

                  </Card.Body>
                </Card>


              </>

            )

          })}
        </CardColumns>
      </>
    );
  }
}

export default Movie;