import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { Port as port } from './port';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favourite from './components/fav';
import APPLICATION_STRINGS from '../screen/res/strings';
import APP_COLORS from '../screen/res/colors';
import { LOGO_3X } from '../screen/res/images';
import GlobalStyles from '../screen/res/styles/globalStyles';

const Tab = createMaterialTopTabNavigator();
export default class FavouriteMain extends React.Component<port> {
  //for removing warning
  //https://stackoverflow.com/questions/60586470/how-to-remove-warning-in-react-native
  favouriteComponent = () => {
    console.log(this.props.data, 'favouriteComponent');
    return <Favourite calbacks={this.props.CallBacks} data={this.props.data} />;
  };

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View
          style={{
            flex: 1,
            backgroundColor: APP_COLORS.COLOR_BACKGROUND,
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: APP_COLORS.COLOR_WHITE,
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                alignSelf: 'center',
                resizeMode: 'cover',
                height: 43,
                width: 43,
                marginTop: 0,
              }}
              source={LOGO_3X}
            />
          </View>

          <Tab.Navigator
            tabBarOptions={{
              inactiveTintColor: APP_COLORS.COLOR_666666,
              activeTintColor: APP_COLORS.COLOR_BLACK,
              style: {
                backgroundColor: Colors.white,
                marginTop: 0,
                marginBottom: 0,
                height: 40,
              },
              indicatorStyle: {
                height: 3,
                backgroundColor: APP_COLORS.COLOR_THEME,
              },
              labelStyle: {
                fontFamily: 'MuseoSans700',
                lineHeight: 16,
              },
            }}
          >
            <Tab.Screen
              name='Fav'
              component={this.favouriteComponent}
              options={{
                title: APPLICATION_STRINGS.TITLE_STRING,
              }}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    );
  }
}
