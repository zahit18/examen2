import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Welcome');
      setEmail('')
      setPassword('')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"  />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} color='#f194ff'/>
    </View>
  );
};

export default LoginScreen;
