import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';
import styles from '../styles/styles';

const ImageCapture = ({ onCapture }) => {
  const handleCapture = () => {
    // Launch the camera
    launchCamera(
      {
        mediaType: 'photo', // Capture photos
        cameraType: 'back', // Use the back camera
        saveToPhotos: true, // Save to photo library
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Capture Cancelled', 'You cancelled the image capture.');
        } else if (response.errorCode) {
          Alert.alert('Error', `Error capturing image: ${response.errorMessage}`);
        } else {
          const { uri } = response.assets[0];

          // Optionally fetch location
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;

              // Call the parent handler with image and location data
              onCapture({
                uri,
                location: { latitude, longitude },
              });
            },
            (error) => {
              Alert.alert('Location Error', 'Could not fetch location.');
              // Call the parent handler with only image data if location fails
              onCapture({ uri, location: null });
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
      }
    );
  };

  return (
    <View style={styles.imageCaptureContainer}>
      <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
        <Text style={styles.captureText}>Capture Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCapture;
