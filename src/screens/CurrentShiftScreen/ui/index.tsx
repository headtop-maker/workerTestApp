import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CurrentShift from '../../../features/CurrentShift/ui';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useWorkerStore } from '../../../shared/store/store';

const CurrentShiftScreen = () => {
  const { currentPositionWorkerList, currentId } = useWorkerStore();

  const currentShift = currentPositionWorkerList?.find(
    item => item.id === currentId,
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: currentShift?.companyName });
  }, [currentShift?.companyName, navigation]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CurrentShift />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CurrentShiftScreen;
