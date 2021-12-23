import React, { useState } from 'react'
import { 
  StyleSheet, Text, View,
  SafeAreaView, Platform, StatusBar
} from 'react-native'

import RootNavigation from './Navigation'

export default function App() {
  return (
    <SafeAreaView style={ styles.AndroidSafeArea }>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
