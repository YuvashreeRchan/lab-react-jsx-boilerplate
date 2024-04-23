import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

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
