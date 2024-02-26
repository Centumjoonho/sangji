import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

export default function AppLayout() {
  // Set up the auth context and render our layout inside of it.
  return (
    <>
    <StatusBar translucent={false}/>
    <Tabs>
        <Tabs.Screen 
            name="exerciseinfo"
            options={{
                header : () => <></>,
                title : "운동 이력",
                tabBarIcon : ({focused}) => {
                    return <Image source={require('../../../assets/ic_exercise.png')} 
                                  style={{width : 25, height : 25 }}/>
                }
            }}
        />
        <Tabs.Screen 
            name="setting"
            options={{
                header : () => <></>,
                title : "설정",
                tabBarIcon : ({focused}) => {
                    return <Image source={require('../../../assets/ic_gear.png')} 
                                  style={{width : 25, height : 25 }}/>
                }
            }}
        />
    </Tabs>
    </>
  );
}