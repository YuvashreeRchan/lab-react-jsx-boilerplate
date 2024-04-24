import './App.css';
import imageData from './components/DataComponent';


function App() {
  // code here
  const images =imageData();
  return(
    <div className="gallery-box">
      <h1>Kalvium Gallery</h1>
      <div className="image-row">
        {images.map(image => (
          <div>
            <img src={image.img} alt={`Image ${image.id}`} className="full-size"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
