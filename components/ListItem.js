import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image source={{uri: item.imgSrc}} style={styles.img} />
        <Text style={styles.text}> {item.name} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
  },
  listItemView: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    width: 140,
    height: 185,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default ListItem;
