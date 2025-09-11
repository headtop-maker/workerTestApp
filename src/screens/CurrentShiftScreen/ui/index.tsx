import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CurrentShift from '../../../features/CurrentShift/ui';
import { StyleSheet } from 'react-native';

const CurrentShiftScreen = () => {
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
