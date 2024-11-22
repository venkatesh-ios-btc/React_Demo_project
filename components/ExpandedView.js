import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles/styles';
import ImageCaptureComponent from './ImageCaptureComponent';

const ExpandedView = ({
  lineItem,
  imageCapture,
  handleImageCaptures,
  selectedRadio,
  setSelectedRadio,
  remarks,
  setRemarks,
}) => {
  if (!lineItem) return null;

  return (
    <View style={styles.expandedContainer}>
      {/* Images Section */}
      {lineItem.imageCapture?.length > 0 && (
        <View style={[styles.expandedInfo, styles.roundedContainer]}>
          <Text style={styles.expandedText}>Images:</Text>
          <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
            {/* Render the ImageCaptureComponent */}
            <View style={styles.captureContainer}>
              <ImageCaptureComponent onCapture={handleImageCaptures} />
              <TouchableOpacity style={styles.captureButton}>
                <Text style={styles.captureText}>Capture Image</Text>
              </TouchableOpacity>
            </View>

            {/* Display Captured Images */}
            {imageCapture.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri: image.uri }} style={styles.image} />
                <Text style={styles.imageText}>
                  {image.location?.latitude.toFixed(4)},{' '}
                  {image.location?.longitude.toFixed(4)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Textbox Section */}
      {lineItem.valueCapture && (
        <View style={styles.view2}>
          <Text style={styles.expandedText}>Captured Value:</Text>
          {lineItem.capturedValue ? (
            <Text style={styles.textBox}>{lineItem.capturedValue}</Text>
          ) : (
            <Text style={styles.textBox}>No captured value available</Text>
          )}
        </View>
      )}

      {/* Radio Buttons Section */}
      {lineItem.isNA && (
        <View style={styles.view3}>
          <Text style={styles.expandedText}>Select Option:</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedRadio === 'Yes' && styles.selected,
              ]}
              onPress={() => setSelectedRadio('Yes')}
            >
              <View style={styles.radioCircle}>
                {selectedRadio === 'Yes' && (
                  <View style={styles.selectedInnerCircle} />
                )}
              </View>
              <Text style={styles.radioText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedRadio === 'No' && styles.selected,
              ]}
              onPress={() => setSelectedRadio('No')}
            >
              <View style={styles.radioCircle}>
                {selectedRadio === 'No' && (
                  <View style={styles.selectedInnerCircle} />
                )}
              </View>
              <Text style={styles.radioText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedRadio === 'NA' && styles.selected,
              ]}
              onPress={() => setSelectedRadio('NA')}
            >
              <View style={styles.radioCircle}>
                {selectedRadio === 'NA' && (
                  <View style={styles.selectedInnerCircle} />
                )}
              </View>
              <Text style={styles.radioText}>NA</Text>
            </TouchableOpacity>
          </View>

          {/* Remarks Section */}
          <TextInput
            style={styles.remarksTextArea}
            placeholder="Enter remarks..."
            multiline
            numberOfLines={3}
            value={remarks}
            onChangeText={setRemarks}
          />

          {/* Submit and Cancel Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ExpandedView;
