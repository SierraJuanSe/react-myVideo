import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@styles/components/CarouselItem.scss';
import playIcon from '@images/play-icon.png';
import plusIcon from '@images/plus-icon.png';
import removeIcon from '@images/remove-icon.png';
import { setFavorite, deleteFavorite } from '../actions';
// import { setFavorite, deleteFavorite, setPlaying } from '../actions';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, source, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
      source,
    });
  };
  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };

  // const handleSetPlaying = () => {
  //   props.setPlaying({
  //     id,
  //     cover,
  //     title,
  //     year,
  //     contentRating,
  //     duration,
  //     source,
  //   });
  // };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          {/* <Link to={`/player/${id}`} onClick={handleSetPlaying}> */}
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          </Link>
          {!isList ? (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Plus Icon'
              onClick={handleDeleteFavorite}
            />
          )}

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  source: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  // setPlaying,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
