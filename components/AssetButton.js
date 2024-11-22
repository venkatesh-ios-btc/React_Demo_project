import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../styles/styles';

const AssetButton = ({ index, asset, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.assetButton, isSelected && styles.selectedButton]}
    onPress={() => onPress(index)}
  >
    <Progress.Circle
      size={40}
      progress={asset.completionPer}
      color="#50A964"
      thickness={3}
      unfilledColor="#ccc"
      animated
      style={styles.progressCircle}
    />
    <Text style={styles.assetButtonText}>{index + 1}</Text>
  </TouchableOpacity>
);

export default AssetButton;
