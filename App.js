import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
