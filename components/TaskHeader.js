import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const TaskHeader = ({ task }) => (
  <View style={styles.taskHeader}>
    <Text style={styles.status}>{task.status}</Text>
    <View style={styles.timeContainer}>
      <Text style={styles.time}>⏱️ {task.time}</Text>
    </View>
    <Text style={styles.taskType}>{task.type}</Text>
    <Text style={styles.taskId}>{task.taskId}</Text>
    <Text style={styles.taskFrequency}>{task.frequency}</Text>
  </View>
);

export default TaskHeader;
