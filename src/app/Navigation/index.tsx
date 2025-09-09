import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenParamList } from '../../shared/types';
import ShiftList from '../../screens/ShiftList/ui';
import CurrentShift from '../../screens/CurrentShift/ui';

export const RootStack = createNativeStackNavigator({
  screens: {
    Courses: {
      screen: ShiftList,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      },
    },
    Tags: {
      screen: CurrentShift,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      },
    },
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}
