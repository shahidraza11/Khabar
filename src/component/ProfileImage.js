import React, { useState } from 'react';
import { View, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const ProfileImage = () => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const { uri } = response.assets[0];
          cropImage(uri);
        }
      }
    );
  };

  const cropImage = (uri) => {
    ImageCropPicker.openCropper({
      path: uri,
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then((image) => {
        setImageUri(image.path);
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to crop image');
        console.log('Crop Error: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Image source={require('../assets/icons/Frame.png')} style={styles.icon} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 75,
    borderColor: 'black',
    height: 135,
    width: 135,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  placeholder: {
    height: 135,
    width: 135,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
  },
  image: {
    height: 135,
    width: 135,
    borderRadius: 75,
  },
  icon: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 100,
    right: 10,
  },
});

export default ProfileImage;
