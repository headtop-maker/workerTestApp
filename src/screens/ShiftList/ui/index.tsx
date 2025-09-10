import { View, Text } from 'react-native';
import { useWorkerStore } from '../../../shared/store/store';
import { useEffect } from 'react';

const ShiftList = () => {
  const { getWorkerInfo } = useWorkerStore();

  useEffect(() => {
    getWorkerInfo('45.039268', '38.987221');
  }, [getWorkerInfo]);

  return (
    <View>
      <Text>ShiftList</Text>
    </View>
  );
};

export default ShiftList;
