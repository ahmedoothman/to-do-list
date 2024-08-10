import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Box from './components/BoxColor';
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
function FlatListComponent() {
  return (
    <FlatList
      data={COLORS}
      renderItem={({ item }) => (
        <Box colorName={item.colorName} hexCode={item.hexCode}></Box>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 5, backgroundColor: 'black' }}></View>
      )}
      ListHeaderComponent={
        <Text style={styles.ListHeader}>
          Here are some boxes of different colors
        </Text>
      }
      ListEmptyComponent={<Text style={styles.noData}>No Data</Text>}
      keyExtractor={(item) => item.hexCode}
    ></FlatList>
  );
}

export default FlatListComponent;

const styles = StyleSheet.create({
  ListHeader: {
    padding: 20,
    fontSize: 20,
    backgroundColor: 'lightgray',
  },
  noData: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 200,
    backgroundColor: 'lightgray',
    width: '50%',
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
});
