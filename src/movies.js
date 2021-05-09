import React from 'react';
// import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
// import Card from 'react-bootstrap/Card'
class Movie extends React.Component {

  render() {
    console.log('getMovies', this.props.getMovie);

    return (
      <>
{this.props.getMovie.map(movie =>
  <Card className='card' style={{ width: '23rem' , fontSize:'20px', }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.image}`} />
  <Card.Body>
    <Card.Title style={{fontSize:'30px' , fontWeight:'bolder'}}>{movie.title}</Card.Title>
    <Card.Text className='overView'>
     {movie.overview}
    </Card.Text>
    {`⭐⭐⭐⭐${movie.votes}`}
  </Card.Body>
  <Card.Text>
  {` Average Votes 👍${movie.avg}`}
    </Card.Text>
    <Card.Text>
    {`Popularity  ⭐${movie.popularity}`}
    </Card.Text>
    <Card.Text>
     {`Released on  📅 ${movie.released_on}`}
    </Card.Text>
    <hr />
    
</Card>

)}
     
      </>
    );
  }
}

export default Movie;