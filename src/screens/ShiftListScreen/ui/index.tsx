import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ShiftList from '../../../features/ShiftList/ui';
import { StyleSheet } from 'react-native';
import { dp } from '../../../shared/lib/getDP';

const ShiftListScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ShiftList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: dp(5),
  },
});

export default ShiftListScreen;
