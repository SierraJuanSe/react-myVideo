import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@styles/components/Player.scss';
import NotFound from '@containers/NotFound.jsx';
import { setPlaying } from '../actions';

const Player = (props) => {
  const { playing, match } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.setPlaying(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.push('/')}>
          Go back
        </button>
      </div>
    </div>
  ) :
    <NotFound />;
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  setPlaying,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

