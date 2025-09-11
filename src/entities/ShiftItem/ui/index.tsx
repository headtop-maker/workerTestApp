import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WorkerListResponse } from '../../../shared/types';

const ShiftItem: FC<
  WorkerListResponse[0] & { handleNavigate: (id: string) => void }
> = ({
  logo,
  companyName,
  currentWorkers,
  priceWorker,
  customerRating,
  isPromotionEnabled,
  id,
  handleNavigate,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(id)}
    >
      <Image source={{ uri: logo }} style={styles.image} />

      <View style={styles.flex1}>
        <Text style={styles.companyText}>{companyName}</Text>

        <Text style={styles.workers}>Работников: {currentWorkers}</Text>

        <Text style={styles.prices}>Цена за работника: {priceWorker} ₽</Text>

        <View style={styles.ratingContainer}>
          {customerRating && (
            <Text style={styles.ratingText}>Рейтинг: {customerRating}</Text>
          )}
        </View>
      </View>

      {isPromotionEnabled && (
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>PROMO</Text>
        </View>
      )}
    </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: { flex: 1 },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  companyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  workers: {
    fontSize: 14,
    color: '#666',
  },
  prices: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
  promoContainer: {
    backgroundColor: '#ff5252',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  promoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ShiftItem;
