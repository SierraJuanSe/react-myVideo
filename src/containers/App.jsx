import React from 'react';
import Header from '@components/Header.jsx';
import Search from '@components/Search.jsx';
import Categories from '@components/Categories.jsx';
import Carousel from '@components/Carousel.jsx';
import CarouselItem from '@components/CarouselItem.jsx';
import Footer from '@components/Footer.jsx';
import '@styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Nuevo'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
