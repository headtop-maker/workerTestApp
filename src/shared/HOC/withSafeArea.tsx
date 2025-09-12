import React from 'react';
import { StyleSheet } from 'react-native';
import { dp } from '../lib/getDP';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const withSafeArea =
  (Component: React.ComponentType) => (props: Record<string, unknown>) => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Component {...props} />
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

export default withSafeArea;
