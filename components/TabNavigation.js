import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

const TabNavigation = () => (
  <View style={styles.tabContainer}>
    <TouchableOpacity style={styles.tabButton}>
      <Text style={styles.tabText}>SOP</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabButton}>
      <Text style={styles.tabText}>PREREQUISITE</Text>
    </TouchableOpacity>
  </View>
);

export default TabNavigation;
