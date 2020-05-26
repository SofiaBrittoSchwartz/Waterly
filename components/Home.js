import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {v4 as uuid} from 'uuid';

import ListItem from './ListItem';

const Home = ({title}) => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'name1',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'name2',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'name3',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/5.jpg',
      name: 'name4',
    },
  ]);

  return (
    <View style={styles.header}>
      <FlatList
        data={items}
        numColumns={2}
        style={styles.list}
        contentContainerStyle={styles.listAlign}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 23,
    textAlign: 'center',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
