// When want to use common components such as header, and so on, se can use Layout route
// for creating layout route, we need to make file named _layout.js 
// this is it!

import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { Header } from '../../../components/ExerciseInfo/header';
import { COLORS } from '../../../../common/styles/color';
import { DetailsScreen } from '../../(app)/exerciseinfo/delete';

export default function ExerciseInfoLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            // header : () => <Header />,
            title: '운동 이력 조회'
          }}
        />
        <Stack.Screen
          name='add'
          options={{
            title: '운동 이력 추가'
          }}
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.BLUE,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='delete'
          options={{
            title: '운동 이력 삭제'
          }}

          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.BLUE,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack>
    </>
  )
}
