import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';
import NormalButton from './components/NormalButton';
import firebaseConnect from './callbacks/firestoreConnect';
import readData from './callbacks/readData';
import { useEffect, useState } from 'react';
import setData from './callbacks/setData';

export default function App() {
  const [colors, setColors] = useState();
  useEffect(() => {
    const getColors = async () => {
      const data = await readData();
      setColors(data);
    }
    getColors()
  }, [])
  const cambioColor = () => {
    switch (colors.color) {
      case "red":
        setColors({
          color: "blue",
          text: "black"
        })
        //async setData(colors);
        break;
      case "blue":
        setColors({
          color: "red",
          text: "white"
        })
        //setData(colors);
        break;
      default:
        setColors({
          color: "",
          text: ""
        })
        //setData(colors);
        break;
    }
    setData(colors);
  }
  let button;
  if (colors != null) {
    button = <CustomButton colors={colors} cambioColor={cambioColor}/>
  } else {
    button = <NormalButton/>
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        {button}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
