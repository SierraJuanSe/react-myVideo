import React from 'react';
import Header from '@components/Header.jsx';
import Search from '@components/Search.jsx';
import Categories from '@components/Categories.jsx';
import Carousel from '@components/Carousel.jsx';
import CarouselItem from '@components/CarouselItem.jsx';
import Footer from '@components/Footer.jsx';
import useInitialState from '../hooks/useInitialState';
import '@styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {initialState.mylist.map((video) => <CarouselItem key={video.id} {...video} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Trends'>
        <Carousel>
          {initialState.trends.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {initialState.originals.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
