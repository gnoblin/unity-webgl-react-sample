import React from "react";
import { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import "./App.css"

const buildName = "test7";

const unityContext = new UnityContext({
  loaderUrl: "Build/" + buildName + ".loader.js",
  dataUrl: "Build/"+ buildName + ".data",
  frameworkUrl: "Build/"+ buildName + ".framework.js",
  codeUrl: "Build/"+ buildName + ".wasm",
});

function App() {

  const [rotation, setRotation] = useState("rotation");

  //unity from react
  function rotate() {
    unityContext.send("Cube", "Rotator", 4);
  }

  // react from unity
  useEffect( function(){
    unityContext.on("SetRotation", function (rot) {
      setRotation(rot);
    });

  }, []);


  return (
  <div>
    <div>
      <Unity unityContext={unityContext} className={"unity-canvas"} />
    </div>
    <div className={"btn"}>
      <button onClick={rotate}> Rotate</button>
      <div> {rotation} </div>
    </div>
  </div>);
}

export default App;
