import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Items = ({name, image}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Items;
