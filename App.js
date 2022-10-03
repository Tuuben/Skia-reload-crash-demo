/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {Canvas, Circle} from "@shopify/react-native-skia";
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


const App: () => Node = () => {

  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
          <Text>Hello world</Text>
        </View>
        <Canvas style={{ width: 100, height: 100 }}>
          <Circle cx={50} cy={50} r={50} color="lightblue" />
        </Canvas>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
