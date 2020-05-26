import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Waterly',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  text: {
    color: 'green',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
