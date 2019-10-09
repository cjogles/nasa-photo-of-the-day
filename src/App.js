import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header";
import Image from "./component/Image";
import Description from "./component/Description";
import Footer from "./component/Footer";
function App() {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState([]);
  useEffect(() => {
    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            console.log("Successful axios get request from NASA API: ", response);
            setPhoto(response.data.url);
            setTitle(response.data.title);
            setDate(response.data.date);
            setExplanation(response.data.explanation);
          })
        .catch(error => {
            console.log("There has been an error: ", error);
        });
    }, []);
  return (
    <div className="App">
      <h1>Space Photo of the Day!</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="spaceship emoji">🚀</span>!
      </p>
      <Header title={title} date={date}/>
      <Image image={photo}/>
      <Description explanation={explanation}/>
      <Footer/>
    </div>
  );
}

export default App;
