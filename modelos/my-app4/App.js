import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ViroARScene, ViroBox, ViroMaterials, ViroARSceneNavigator } from '@reactvision/react-viro';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './config/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const MultiUserARScene = () => {
  const [cubeColor, setCubeColor] = useState('red');

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('gameState')
      .doc('cube')
      .onSnapshot(doc => {
        if (doc.exists) {
          setCubeColor(doc.data().color);
        }
      });

    return () => unsubscribe();
  }, []);

  const handleCubeClick = () => {
    const newColor = cubeColor === 'red' ? 'blue' : 'red';
    setCubeColor(newColor);
    firestore()
      .collection('gameState')
      .doc('cube')
      .set({ color: newColor });
  };

  ViroMaterials.createMaterials({
    red: { diffuseColor: '#ff0000' },
    blue: { diffuseColor: '#0000ff' },
  });

  return (
    <ViroARScene>
      <ViroBox
        position={[0, 0, -1]}
        scale={[0.3, 0.3, 0.3]}
        materials={cubeColor}
        onClick={handleCubeClick}
      />
    </ViroARScene>
  );
};

const MultiUserARApp = () => {
  return (
    <ViroARSceneNavigator
      initialScene={{ scene: MultiUserARScene }}
      style={{ flex: 1 }}
    />
  );
};

export default MultiUserARApp;