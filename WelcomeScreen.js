import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

const WelcomeScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Welcome</Text>
      {userEmail ? <Text>Welcome, {userEmail}!</Text> : null}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default WelcomeScreen;
