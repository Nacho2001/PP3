import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import readData from './callbacks/readData';
import NormalButton from './components/NormalButton';
import CustomButton from './components/CustomButton';
import MyToolbar from './components/Toolbar';
//import "./App.css";

export default function App() {
  const [colors, setColors] = useState();
  useEffect(() => {
    const getColors = async () => {
      const data = await readData();
      setColors(data);
    }
    getColors();
  }, [])
  let texto;
  if (colors) {
    texto = `Datos leidos exitosamente!`
    button = <CustomButton colors={colors}/>
  } else {
    texto = `No se ha leido ningún color desde Firestore`
    button = <NormalButton/>
  }
  return (
    <View>
      {/*<MyToolbar/>*/}
      <Text>{texto}</Text>
      {button}
    </View>
  );
}


