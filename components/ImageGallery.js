// ImageGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ImageGallery = ({ images }) => {
  return (
    <View style={styles.container}>
      {images.length > 0 ? (
        <FlatList
          data={images}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            item.document ? (
              <Image
                source={{ uri: item.document }}
                style={styles.image}
                resizeMode="contain"
              />
            ) : null
          )}
        />
      ) : (
        <Text style={styles.noImageText}>No images available</Text>
      )}
    </View>
  );
};
