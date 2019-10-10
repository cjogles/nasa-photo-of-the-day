import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./component/Header";
import Image from "./component/Image";
import Description from "./component/Description";
import Footer from "./component/Footer";
import styled from 'styled-components';
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
  const Flex = styled.div`
    margin-top: 5rem;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${photo});
    width: 800px;
    height: 1000px;
  `
  const HeadTitle = styled.h1`
    color: white;
    display:flex;
    justify-content: center;
    margin-top:2rem;
  `
  const Definition = styled.p`
    font: bold;
    color: white;
    text-align: center;
  `
  const Background = styled.div`
    background-color:grey;
    text-align: center;
  `
  return (
    <Background>
      <HeadTitle>Space Photo of the Day!</HeadTitle>
        {/* {<Image image={photo}/>} */}
        <Header title={title} date={date}/>
      <Flex>
      
      {/* <Definition>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label="spaceship emoji">🚀</span>!
        </Definition> */}
        
      {/* <Description explanation={explanation}/> */}
        <Footer/>
      </Flex>
      
    </Background>
  );
}

export default App;
