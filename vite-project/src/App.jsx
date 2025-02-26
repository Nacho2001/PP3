import { useState, useEffect, useRef } from 'react'
import 'aframe';
//import 'aframe-particule-system-component';
import {Entity, Scene} from 'aframe-react';

function App() {
  const [count, setCount] = useState(0)
  function showme(){
    console.log(count)
  }
  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.addEventListener('click', showme);
    }
    return () => {
      if (box){
        box.removeEventListener('click', showme);
      }
    }
  }, []);
  return (
    <>
      <div>
      <Scene>
        <Entity 
          ref={boxRef}
          geometry={{primitive: 'box'}} 
          material={{color: 'red'}} 
          position={{x: 0, y: 0, z: -5}}
          onClick={() => setCount(count + 1)}
        />
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
        <Entity events={{
          click: showme()
        }}/>
      </Scene>
      </div>
    </>
  )
}

export default App
