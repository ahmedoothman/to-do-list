import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Box = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={styles.content}>{colorName + ' ' + hexCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { borderRadius: 5, backgroundColor: '#2aa198', padding: 10, margin: 15 },
  content: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Box;
