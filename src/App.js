import './App.css';
import garlic from './images/garlic.jpg';
import bird from './images/bird.jpg';
import couple from './images/couple.jpg';
import church from './images/church.jpg';
import paint from './images/paint.jpg';
import road from './images/road.jpg';
import sand from './images/sand.jpg';
import sunset from './images/sunset.jpg';

import { useRef, useState, useEffect } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const default_settings = {
  speed: 0,
  factor: 1
}

const items = [
  {
    id: 'garlic',
    content: {
      title: 'Vampire problem?',
      sub: "Try our new product, you'll never believe the results!",
      link: 'https://tuigarden.co.nz/how-to-guide/garlic-growing-guide/'
    },
    image: garlic,
    settings: {...default_settings}
  },
  {
    id: 'bird',
    content: {
      title: 'Hummingbird',
      sub: 'The best coffee money can buy.',
      link: 'https://www.hummingbirdcoffee.com/'
    },
    image: bird,
    settings: {...default_settings}
  },
  {
    id: 'couple',
    content: {
      title: 'Looking for love?',
      sub: "Dating apps you'll actually want to use!",
      link: 'https://www.elle.com/uk/life-and-culture/culture/g31147560/best-dating-apps/'
    },
    image: couple,
    settings: {...default_settings}
  },
  {
    id: 'church',
    content: {
      title: 'Belief',
      sub: 'Descover religion in 2022',
      link: 'https://www.verywellmind.com/religion-improves-health-2224007'
    },
    image: church,
    settings: {...default_settings}
  },
  {
    id: 'paint',
    content: {
      title: 'Colorize your life',
      sub: 'Find the right paint for your project',
      link: 'https://www.resene.co.nz/'
    },
    image: paint,
    settings: {...default_settings}
  },
  {
    id: 'road',
    content: {
      title: 'NZ Roadtrip',
      sub: 'Build Your Own Adventure!',
      link: 'https://www.theroadtrip.co.nz/'
    },
    image: road,
    settings: {...default_settings}
  },
  {
    id: 'sand',
    content: {
      title: 'Sandy much?',
      sub: 'The great desert biome',
      link: 'https://ucmp.berkeley.edu/exhibits/biomes/deserts.php'
    },
    image: sand,
    settings: {...default_settings}
  },
  {
    id: 'sunset',
    content: {
      title: 'Planning a funeral?',
      sub: 'Gee & Hickton Funeral Directors - Serving Wellington families since 1946',
      link: 'https://geeandhickton.co.nz/'
    },
    image: sunset,
    settings: {...default_settings}
  }
];

const options = {
  pages: items.length,
  horizontal: true,
  enabled: false, 
  innerStyle: {
    width: "100%", 
    margin: "0 auto"
  },
  style: { 
    top: '0', 
    left: '0', 
    right: '0' 
  }
}




function App() {
  const ref = useRef()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    ref.current.scrollTo(index)
  }, [index])

  const updateIndex = i => {
    setIndex(i)
  }

  return (
    <div className="App">
      <button className="nav nav-left" onClick={() => updateIndex((index === 0) ? items.length - 1 : index - 1)}></button>
    <>
      <Parallax {...options} ref={ref}>
        {items.map((item, i) => (<>
          <ParallaxLayer 
            {...item.settings}
            offset={i}
            key={item.id} 
            style={{
              background: `url(${item.image}) no-repeat center center fixed`}}
            />
          <ParallaxLayer 
            {...item.settings}
            speed="0.5"
            offset={i}
            key={`${item.id}-title`}>
              <div className="content-container-color"></div>
            </ParallaxLayer>
          <ParallaxLayer 
            {...item.settings}
            speed="1"
            offset={i}
            key={`${item.id}-title`}>
              <div className="content-container">
                <h1 className="title">{item.content.title}</h1>
                <p className="sub">{item.content.sub}</p>
                <a className="button-link" href={item.content.link}>View</a>
              </div>
            </ParallaxLayer>
        </>
        ))}
      </Parallax>
    </>
      <button className="nav nav-right" onClick={() => updateIndex((index === (items.length - 1)) ? 0 : index + 1)}></button>
    </div>
  );
}

export default App;
