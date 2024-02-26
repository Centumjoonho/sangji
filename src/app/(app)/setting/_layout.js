// When want to use common components such as header, and so on, se can use Layout route
// for creating layout route, we need to make file named _layout.js 
// this is it!

import { Text } from 'react-native';
import { Slot, Stack } from 'expo-router';

export default function SettingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
            name='index'
            options={{
              // header : () => <Header />,
              title : '설정'
            }}
        />
      </Stack>
    </>
  )
}
