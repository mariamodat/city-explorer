import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'
// import Card from 'react-bootstrap/Card'
class Movie extends React.Component {

  render() {
    console.log('getMovies', this.props.getMovie);

    return (
      <CardColumns >
{this.props.getMovie.map(movie =>
  <Card className='card' style={{ width: '20rem' , fontSize:'20px', }}>
  <Card.Img variant="top" className='cardimg' src={`https://image.tmdb.org/t/p/w500${movie.image}`} />
  <Card.Body>
    <Card.Title className='title1' style={{fontSize:'26px' , fontWeight:'bolder' , }}>{movie.title}</Card.Title>
    <Card.Text className='overView'>
     {movie.overview}
    </Card.Text >
    {`⭐⭐⭐⭐${movie.votes}`}
  </Card.Body>
  <Card.Text className='rates'>
  {` Average Votes 👍${movie.avg}`}
    </Card.Text>
    <Card.Text  className='rates'>
    {`Popularity  ⭐${movie.popularity}`}
    </Card.Text>
    <Card.Text  className='rates'>
     {`Released on  📅 ${movie.released_on}`}
    </Card.Text>
    
    
</Card>

)}
     
      </CardColumns>
    );
  }
}

export default Movie;