import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import { useWorkerStore } from '../../../shared/store/store';

import { WorkerListResponse } from '../../../shared/types';
import { useCallback, useEffect } from 'react';
import ShiftItem from '../../../entities/ShiftItem/ui';
import { useNavigation } from '@react-navigation/native';

const ShiftList = () => {
  const {
    currentPositionWorkerList,
    isLoading,
    error,
    getWorkerInfo,
    setCurentId,
  } = useWorkerStore();

  const navigation = useNavigation();

  useEffect(() => {
    getWorkerInfo('45.039268', '38.987221');
  }, [getWorkerInfo]);

  const handleNavigate = useCallback(
    (id: string) => {
      setCurentId(id);
      navigation.navigate('CurrentShiftScreen');
    },
    [navigation, setCurentId],
  );

  const renderItem = useCallback(
    ({ item }: { item: WorkerListResponse[0] }) => {
      return <ShiftItem {...item} handleNavigate={handleNavigate} />;
    },
    [handleNavigate],
  );
  // указать параметры оптимизации
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {currentPositionWorkerList && (
        <FlatList
          data={currentPositionWorkerList}
          keyExtractor={item => 'currentWorker' + item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: { alignSelf: 'center' },
});

export default ShiftList;
