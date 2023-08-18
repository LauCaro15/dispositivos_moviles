import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button, View } from 'react-native';

const WelcomSlide = () => {
    const navigation = useNavigation();

    const goToRegister = () => {
      navigation.navigate("Registro");
    };

    const goToLogin = () => {
      navigation.navigate("Login");
    };

  return (
    <View>
        <Text>Slides</Text>
        <Button title="Registrarse" onPress={goToRegister}/>
        <Button title="Iniciar Sesión" onPress={goToLogin}/>
    </View>
  );
};

export default WelcomSlide;
