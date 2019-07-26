import React, { useEffect } from 'react';
import { Typography, Button, Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

import { useSelector, useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/actions/search';
import { movieResults,isSearchingLoading } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';
import styles from './style';

export default ({ history, location }) => {
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchingLoading(state));
  const dispatch = useDispatch();
  const classes = styles();

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !movies) {
      dispatch(searchMovie({ movieName }));
    }
  });

  const handleGoToHomeClick = event => {
    history.push('/');
  };

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (<MovieResult key={index} {...value}/>));
    }else if(!isLoading){
      return(
        <div className={classes.noResultsContainer}>
          <Typography className={classes.noResultsText}>No existen resultados</Typography>
          <Button variant="contained" color="primary" onClick={handleGoToHomeClick}>Ir a inicio</Button>
        </div>
      )
    }else {
      return <CircularProgress size={100} color="primary"/>
    }
  };

  return (
    <Container>
      {renderMovies()}
    </Container>
  )
}
