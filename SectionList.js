import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View', icon: 'eye' },
      { id: '1', text: 'Text', icon: 'font' },
      { id: '2', text: 'Image', icon: 'image' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView', icon: 'list-alt' },
      { id: '4', text: 'ListView', icon: 'list' },
    ],
  },
];

function SectionListComponent() {
  return (
    <SectionList
      sections={sections}
      style={{ width: '100%' }}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section }) => (
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Icon name={item.icon} size={20} style={styles.icon} />
          <Text style={styles.item}>{item.text}</Text>
        </View>
      )}
    />
  );
}

export default SectionListComponent;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    color: 'gray',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'lightgray',
  },
  header: {
    padding: 10,
    fontSize: 22,
  },
});
