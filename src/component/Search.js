import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { date } from 'yup';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=722e750c2cb94e499f8c5bd75d17db51`);
      setResults(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 5 }}>
          <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder='Search'
          placeholderTextColor='#4E4B66'
          value={query}
          onChangeText={text => setQuery(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 7 }} onPress={handleSearch}>
          <Image source={require('../assets/icons/search2.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        results.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            {article.urlToImage && (
              <Image source={{ uri: article.urlToImage }} style={styles.articleImage} />
            )}
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleSource}>{article.source.name}</Text>
              <Text style={styles.articleTime}>{new Date(article.publishedAt).toLocaleTimeString()}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 15,
  },
  searchIcon: {
    resizeMode: 'contain',
    maxWidth: '100%',
  },
  searchInput: {
    width: '75%',
    fontSize: 20,
    color: 'black',
  },
  articleContainer: {
    marginBottom: 20,
  },
  articleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  articleContent: {
    backgroundColor: 'white',
    padding: 10,
  },
  articleTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  articleSource: {
    fontSize: 15,
    color: 'black',
  },
  articleTime: {
    fontSize: 15,
    color: 'black',
  },
});

export default Search;
