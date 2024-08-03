import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { date } from 'yup';

const Tranding = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingNews();
  }, []);

  const fetchTrendingNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=722e750c2cb94e499f8c5bd75d17db51`);
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {articles.length > 0 && (
        <View>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 7, marginBottom: 15 }}>
            <Image source={{ uri: articles[0].urlToImage }} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, color: 'black' }}>{articles[0].source.name}</Text>
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>{articles[0].title}</Text>
            <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/icons/bbc.png')}
                  style={{ resizeMode: 'contain', maxWidth: '100%' }} />
                <Text style={{ fontSize: 15, paddingRight: 50, color: 'black' }}>{articles[0].source.name}</Text>
                <Image source={require('../assets/icons/hour.png')}
                  style={{ resizeMode: 'contain', maxWidth: '100%' }} />
                <Text style={{ fontSize: 15, color: 'black' }}>just now</Text>
              </View>
              <View style={{ backgroundColor: 'white', paddingBottom: 10 }}>
                <Text style={{ fontSize: 30, color: 'black' }}>...</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Tranding;
