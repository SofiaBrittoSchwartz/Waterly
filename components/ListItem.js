import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

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
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  listItemView: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  img: {
    height: (Dimensions.get('window').height - 240) / 3,
    width: (Dimensions.get('window').width - 50) / 2,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default ListItem;
