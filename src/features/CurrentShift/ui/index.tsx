import { View, Text, Image, StyleSheet } from 'react-native';

import { useWorkerStore } from '../../../shared/store/store';

const CurrentShift = () => {
  const { currentPositionWorkerList, currentId } = useWorkerStore();

  const currentShift = currentPositionWorkerList?.find(
    item => item.id === currentId,
  );
  return (
    <View>
      {currentShift && (
        <View style={styles.container}>
          <View style={styles.companyContainer}>
            <Image source={{ uri: currentShift.logo }} style={styles.image} />
            <View>
              <Text style={styles.companyName}>{currentShift.companyName}</Text>
              <Text style={styles.address}>{currentShift.address}</Text>
            </View>
          </View>

          <Text style={styles.dateStart}>
            📅 {currentShift.dateStartByCity}
          </Text>
          <Text style={styles.timeStart}>
            🕒 {currentShift.timeStartByCity} – {currentShift.timeEndByCity}
          </Text>

          <Text style={styles.currentWorkers}>
            👥 {currentShift.currentWorkers}/{currentShift.planWorkers}{' '}
            сотрудников
          </Text>

          <Text style={styles.workType}>
            🔧 {currentShift.workTypes[0].name}
          </Text>

          <Text style={styles.price}>💰 {currentShift.priceWorker} ₽</Text>

          <View style={styles.rating}>
            <Text style={styles.ratingText}>
              {currentShift.customerFeedbacksCount} отзывов
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: 12,
  },
  companyContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  dateStart: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  timeStart: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  currentWorkers: {
    fontSize: 18,
    marginBottom: 4,
  },
  workType: {
    fontSize: 18,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 8,
  },
  rating: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { marginLeft: 8, fontSize: 18, color: '#555' },
});

export default CurrentShift;
