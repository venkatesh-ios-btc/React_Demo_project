import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 16,
  },
  taskHeader: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  status: {
    backgroundColor: 'green',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  taskType: {
    color: '#A7A7A7',
    fontSize: 16,
    marginTop: 8,
  },
  taskId: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 4,
  },
  taskFrequency: {
    color: '#A7A7A7',
    fontSize: 14,
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  tabButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#333',
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  tabText: {
    color: '#A7A7A7',
    fontSize: 14,
  },
  assetButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  assetButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#50A964',
  },
  assetButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  assetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  assetText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  assetDropdown: {
    backgroundColor: '#1F1F1F',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  taskText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
});

export default styles;
