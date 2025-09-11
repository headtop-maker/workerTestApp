import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenParamList } from '../../shared/types';
import ShiftListScreen from '../../screens/ShiftListScreen/ui';
import CurrentShiftScreen from '../../screens/CurrentShiftScreen/ui';

export const RootStack = createNativeStackNavigator({
  screens: {
    ShiftListScreen: {
      screen: ShiftListScreen,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      },
    },
    CurrentShiftScreen: {
      screen: CurrentShiftScreen,
      options: {
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
