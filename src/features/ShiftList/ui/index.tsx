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
import useLocation from '../../../shared/hooks/useLocation';

const ShiftList = () => {
  const {
    currentPositionWorkerList,
    isLoading,
    error,
    getWorkerInfo,
    setCurentId,
  } = useWorkerStore();

  const navigation = useNavigation();
  const { location } = useLocation();

  const handleRefetch = useCallback(() => {
    if (location) {
      getWorkerInfo(String(location.latitude), String(location.longitude)); // demo 45.039268 38.987221
    }
  }, [getWorkerInfo, location]);

  useEffect(() => {
    handleRefetch();
  }, [getWorkerInfo, handleRefetch, location]);

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

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} />}
      {!location && (
        <Text style={styles.errorText}>Нет данных о местоположении</Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {currentPositionWorkerList && (
        <FlatList
          data={currentPositionWorkerList}
          keyExtractor={item => 'currentWorker' + item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          refreshing={isLoading}
          onRefresh={handleRefetch}
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
