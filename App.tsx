import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import Widget from './src/components/Widget'; // Carrega arquivo index por padrão

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Widget />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}