import React from 'react';
import {Text} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';

const HomeScreen = () => {
  return (
    <>
      <Text>Instagram Clone</Text>
      <ProfilePicture uri={'https://c1.10times.com/speaker/1588320557/5eabd92da868c.jpeg'}/>
      <ProfilePicture uri={'https://c1.10times.com/speaker/1588320557/5eabd92da868c.jpeg'}/>
      <ProfilePicture uri={'https://c1.10times.com/speaker/1588320557/5eabd92da868c.jpeg'}/>
      <ProfilePicture uri={'https://c1.10times.com/speaker/1588320557/5eabd92da868c.jpeg'}/>
    </>
  );
};

export default HomeScreen;
