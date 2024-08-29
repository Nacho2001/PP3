import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import readData from './callbacks/readData';
import NormalButton from './components/NormalButton';

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
  } else {
    texto = `No se ha leido ningún color desde Firestore`
  }
  return (
    <View style={{"marginTop": "50px", "marginLeft":"50%"}}>
      {/*<Text>{texto}</Text>*/}
      <NormalButton style={{"height": "50px", "width":"100px"}}/>
    </View>
  );
}


