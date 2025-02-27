import './App.css'
import MyScene from './components/3D/MyScene'
import './components/3D/Styles.css'
import { useState } from 'react'

function App() {
  const [categoria, setCategoria] = useState(false);

  if(categoria){
    return (
      <>
        < MyScene categoria={categoria}/>
      </>
    )
  } else {
    return (
      <div>
        <h2>Seleccionar Categoria</h2>
        <button onClick={() => setCategoria('anticonceptivos')}>Anticonceptivos</button>
        <button onClick={() => setCategoria('bullying')}>Bullying</button>
        <button onClick={() => setCategoria('its')}>ITS</button>
        <button onClick={() => setCategoria('salud_mental')}>Salud Mental</button>
      </div>
    )
  }
}

export default App
