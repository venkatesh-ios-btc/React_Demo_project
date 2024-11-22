import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const AssetDropdown = ({ asset, index, isExpanded, onToggle, tasks, checkmarks, setCheckmarks }) => (
  <View>
    <TouchableOpacity onPress={() => onToggle(index)} style={styles.assetHeader}>
      <Text style={styles.assetText}>{asset.name}</Text>
      <Text>{isExpanded ? '🔽' : '▶️'}</Text>
    </TouchableOpacity>
    {isExpanded && (
      <View style={styles.assetDropdown}>
        {tasks
          .filter((task) => task.assetId === asset.id)
          .map((task, taskIndex) => (
            <View key={taskIndex}>
              <Text style={styles.taskText}>{task.name}</Text>
            </View>
          ))}
      </View>
    )}
  </View>
);

export default AssetDropdown;
