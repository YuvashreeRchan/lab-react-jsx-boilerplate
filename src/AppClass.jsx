import { Component } from "react";
import "./App.css"
import imageData from './components/DataComponent';

export default class AppClass extends Component{
  
  // code here
  render(){
    return (
      <div className="gallery-box">
        <h1>Kalvium Gallery</h1>
        <div className="image-row">
          {imageData().map(image => (
            <div>
              <img src={image.img} alt={`Image ${image.id}`} className="full-size"/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
