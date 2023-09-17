import Header from './Component/Header'
import {Canvas} from "@react-three/fiber"
import { Suspense } from "react";
import {OrbitControls} from "@react-three/drei"
import './style/App.css'

import { Model } from "./Models/Computer";

function App () {
  return (
    <div className="App">
 
<Canvas className='Canvas' camera = {{positon:[2,2,10],zoom:5,}}>
  <OrbitControls/>
  <color attach = 'background' args = {['lightblue']}/>
  <hemisphereLight intensity = {2.35}/>
  <spotLight
  positon = {[10,10,10]}
  angle = {0.2}
  penumbra={3}
  intensity={1}
  castShadow
  />
  <Suspense >
  <Model/>
  </Suspense>

</Canvas>
<Header></Header>


</div>

    
  )};


export default App;
