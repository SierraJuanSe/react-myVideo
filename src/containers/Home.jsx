import React from 'react';
import { connect } from 'react-redux';
import Search from '@components/Search.jsx';
import Categories from '@components/Categories.jsx';
import Carousel from '@components/Carousel.jsx';
import CarouselItem from '@components/CarouselItem.jsx';
import '@styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  return (
    <div className='App'>
      <Search />

      {mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {mylist.map((video) => <CarouselItem key={video.id} {...video} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Trends'>
        <Carousel>
          {trends.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {originals.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
