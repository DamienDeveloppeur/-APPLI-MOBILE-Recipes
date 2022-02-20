/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useFetchRecipes } from './src/api/recipes/useFetchRecipes';

const Section = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const App = () => {
  const {getAllRecipes} = useFetchRecipes()

  useEffect(() => {
    console.log("LOL")

    getAllRecipes()
  }, [])
  return (
    <>
     <Section text="gergreq"></Section>
    </>
  );
};

export default App;
