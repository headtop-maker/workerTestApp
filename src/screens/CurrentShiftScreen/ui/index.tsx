import CurrentShift from '../../../features/CurrentShift/ui';

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useWorkerStore } from '../../../shared/store/store';
import withSafeArea from '../../../shared/HOC/withSafeArea';

const CurrentShiftScreen = () => {
  const { currentPositionWorkerList, currentId } = useWorkerStore();

  const currentShift = currentPositionWorkerList?.find(
    item => item.id === currentId,
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: currentShift?.companyName });
  }, [currentShift?.companyName, navigation]);

  return <CurrentShift />;
};

export default withSafeArea(CurrentShiftScreen);
