import React from 'react';
import "./pages.css"
  
const Home = () => {
  return (
    <div
      style={{
        display: 'block',
        height: '100vh',
        margin: "25px",
      }}
    >
        <img id="myself" src={require("../media/zhe_fan.jpg")} alt="myself"></img>
        <br></br>
        <br></br>
        <p>Hey there, I am <b>Zhe Fan</b>, a Masters Student studying <b>Applied Computing</b> at the <b>University of Toronto</b>. With an extensive background in AI/Data science, as well as biomedical sciences, I am looking to build a career as a <b>Data Scientist/Engineer </b> with a focus in biomedical informatics.</p>
        <br></br>
        <br></br>
        <p>Prior to my Masters, I was a <b>neuroscience</b> and <b>computer science</b> student at <b>McGill University</b>. During my undergraduate studies, I was involved with <b>computational biology</b> and <b>neural network</b> research. These experiences helped me build an array of data science techniques, and more importantly, interpersonal skills to effectively work with colleagues with different cultural and educational backgrounds, especially given the interdisciplinary environments I worked in.</p>
    </div>
  );
};
  
export default Home;