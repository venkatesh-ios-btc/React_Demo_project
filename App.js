import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TaskHeader from './components/TaskHeader';
import TabNavigation from './components/TabNavigation';
import AssetButton from './components/AssetButton';
import AssetDropdown from './components/AssetDropdown';
import data from './data/data.json';
import styles from './styles/styles';

const App = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [expandedAssetIndex, setExpandedAssetIndex] = useState(null);
  const [checkmarks, setCheckmarks] = useState({});

  const { tasks, assets } = data;

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
    setExpandedAssetIndex((prev) => (prev === index ? null : index));
  };

  const handleAssetToggle = (index) => {
    setExpandedAssetIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ScrollView style={styles.container}>
      <TaskHeader task={tasks[0]} />
      <TabNavigation />
      <View style={styles.assetButtonsContainer}>
        {assets.map((asset, index) => (
          <AssetButton
            key={index}
            index={index}
            asset={asset}
            isSelected={selectedButtonIndex === index}
            onPress={handleButtonPress}
          />
        ))}
      </View>
      {assets.map((asset, index) => (
        <AssetDropdown
          key={index}
          asset={asset}
          index={index}
          isExpanded={expandedAssetIndex === index}
          onToggle={handleAssetToggle}
          tasks={tasks}
          checkmarks={checkmarks}
          setCheckmarks={setCheckmarks}
        />
      ))}
    </ScrollView>
  );
};

export default App;
