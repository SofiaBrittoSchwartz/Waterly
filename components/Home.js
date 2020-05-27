import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/10.jpg',
      name: 'name5',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/8.jpg',
      name: 'name6',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'name7',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'name8',
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.imgGalleryContainer}>
      {items.map((item, index) => (
        <View style={styles.itemGallery}>
          <ListItem item={item} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 23,
    textAlign: 'center',
  },
  imgGalleryContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  itemGallery: {
    alignContent: 'center',
  },
});

export default Home;
