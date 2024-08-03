import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { date } from 'yup';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=722e750c2cb94e499f8c5bd75d17db51`);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {item.urlToImage ? (
          <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
        ) : (
          <Image source={require('../assets/icons/news.png')} style={styles.newsImage} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.regionText}>{item.source.name}</Text>
        <Text style={styles.headlineText}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.sourceContainer}>
            <Image source={require('../assets/icons/bbc.png')} style={styles.sourceImage} />
            <Text style={styles.sourceText}>{item.source.name}</Text>
            <Image source={require('../assets/icons/hour.png')} style={styles.timeImage} />
            <Text style={styles.timeText}>{new Date(item.publishedAt).toLocaleTimeString()}</Text>
          </View>
          <View style={styles.moreOptions}>
            <Text style={styles.moreText}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.url}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginRight: 10,
  },
  newsImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '70%',
  },
  regionText: {
    fontSize: 15,
    color: 'black',
  },
  headlineText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  sourceText: {
    fontSize: 10,
    paddingRight: 5,
    color: 'black',
  },
  timeImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  timeText: {
    fontSize: 10,
    color: 'black',
  },
  moreOptions: {
    alignItems: 'flex-end',
  },
  moreText: {
    fontSize: 15,
    color: 'black',
  },
});

export default NewsSection;
