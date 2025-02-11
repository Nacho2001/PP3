import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <View style={styles.container}>
        <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
          <color attach="background" args={["#5724E9"]} />
          <mesh>
            <boxGeometry args={[1,0,1]} />
            <meshBasicMaterial color="hotpink" />
          </mesh>
        </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
