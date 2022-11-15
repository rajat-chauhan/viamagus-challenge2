
import './App.css';
import Video from './components/Video';

const video_url = [ 
  {id: 1, url: 'https://www.youtube.com/watch?v=90r1L3wtIiU', link:"https://img.youtube.com/vi/90r1L3wtIiU/0.jpg"},
  {id: 2, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 3, url: 'https://www.youtube.com/watch?v=m3PyA-tjahc', link:"https://img.youtube.com/vi/m3PyA-tjahc/0.jpg"},
  {id: 4, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 5, url: 'https://www.youtube.com/watch?v=90r1L3wtIiU', link:"https://img.youtube.com/vi/90r1L3wtIiU/0.jpg"},
  {id: 6, url: 'https://www.youtube.com/watch?v=P-DhwN87JDY', link:"https://img.youtube.com/vi/P-DhwN87JDY/0.jpg"},
  {id: 7, url: 'https://www.youtube.com/watch?v=m3PyA-tjahc', link:"https://img.youtube.com/vi/m3PyA-tjahc/0.jpg"},
  {id: 8, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 9, url: 'https://www.youtube.com/watch?v=90r1L3wtIiU', link:"https://img.youtube.com/vi/90r1L3wtIiU/0.jpg"},
  {id: 10, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 11, url: 'https://www.youtube.com/watch?v=m3PyA-tjahc', link:"https://img.youtube.com/vi/m3PyA-tjahc/0.jpg"},
  {id: 12, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 13, url: 'https://www.youtube.com/watch?v=90r1L3wtIiU', link:"https://img.youtube.com/vi/90r1L3wtIiU/0.jpg"},
  {id: 14, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
  {id: 15, url: 'https://www.youtube.com/watch?v=m3PyA-tjahc', link:"https://img.youtube.com/vi/m3PyA-tjahc/0.jpg"},
  {id: 16, url: 'https://www.youtube.com/watch?v=EUvF8k3zxqA', link:"https://img.youtube.com/vi/EUvF8k3zxqA/0.jpg"},
];

function App() {
  return (
    <div className="App">
      <Video urls={video_url}/>
    </div>
  );
}

export default App;
