import { useState } from 'react';
import { getUser } from '../apis/auth';

export const useGetMyHomeUserInfo = () => {
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    email: '',
  });

  const getUserData = async () => {
    const getLoginUserData = await getUser();

    const { data } = getLoginUserData;
    const loginUserName = data.fullName.split('/')[0];

    setProfile({
      ...profile,
      name: loginUserName,
      image: data.image,
      email: data.email,
    });
  };

  return { profile, getUserData };
};
