import React, { useEffect, useRef, Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Fav from './screens/ft_favourite/index';
import * as Font from 'expo-font';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setExposeFun } from './redux/appStore/app.actions';

class App extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      MuseoSans300: require('./assets/fonts/museosans_100-webfont.ttf'),
      MuseoSans300: require('./assets/fonts/museosans_300-webfont.ttf'),
      MuseoSans500: require('./assets/fonts/museosans_500-webfont.ttf'),
      MuseoSans700: require('./assets/fonts/museosans_700-webfont.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    this.props.onSetExposeFun(this.props.exposeFunction);
    console.log(
      this.props.StaticData,
      'StatisData',
      this.props.Module,
      'ModuleData'
    );
    if (this.props.isTemplate === true) {
      //NOTE:: this will execute only if user running template
      //because we only need to load static data only if module running
      //standalone
    } else {
      //NOTE: run only when standalone module is loading
    }
  }

  render() {
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <Stack.Navigator initialRouteName='Test'>
        <Stack.Screen
          name='Test'
          component={Fav}
          options={{
            headerShown: false,

            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch, props) => ({
  onSetExposeFun: (data) => dispatch(setExposeFun(props.exposeFunction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
