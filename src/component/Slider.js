import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Slider = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sports', 'Politics', 'Business', 'Health', 'Travel', 'Science'];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedCategory(category)} style={styles.categoryButton}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
              {category}
            </Text>
            {selectedCategory === category && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 30,
  },
  categoryText: {
    fontSize: 15,
    color: 'black',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
  },
  underline: {
    marginTop: 2,
    height: 2,
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default Slider;
