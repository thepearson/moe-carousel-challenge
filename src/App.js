import './App.css';
import image1 from './images/image01.jpg';
import image2 from './images/image02.jpg';
import image3 from './images/image03.jpg';
import image4 from './images/image04.jpg';
import image5 from './images/image05.jpg';
import image6 from './images/image06.jpg';
import image7 from './images/image07.jpg';
import image8 from './images/image08.jpg';
import image9 from './images/image09.jpg';
import image10 from './images/image10.jpg';
import Carousel from './components/Carousel';

const items = [
  {
    title: 'The River',
    image: image1,
    url: 'https://www.example.com'
  },
  {
    title: 'The Forest',
    image: image2,
    url: 'https://www.example.com'
  },
  {
    title: 'The Sculpture',
    image: image3,
    url: 'https://www.example.com'
  },
  {
    title: 'The Street',
    image: image4,
    url: 'https://www.example.com'
  },
  {
    title: 'The Bus',
    image: image5,
    url: 'https://www.example.com'
  },
  {
    title: 'The Mountain',
    image: image6,
    url: 'https://www.example.com'
  },
  {
    title: 'The Rain',
    image: image7,
    url: 'https://www.example.com'
  },
  {
    title: 'The Beach',
    image: image8,
    url: 'https://www.example.com'
  },
  {
    title: 'The Flags',
    image: image9,
    url: 'https://www.example.com'
  },
  {
    title: 'The Flower',
    image: image10,
    url: 'https://www.example.com'
  },
]

function App() {
  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
}

export default App;
