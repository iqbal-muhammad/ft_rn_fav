import React from 'react';

import { Text, View, Image } from 'react-native';
import APP_STRINGS from '../res/strings';

import fav_styles from '../res/styles/fav_styles';
import { MAIN_SRC } from '../res/images';
export default class Empty extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{ ...fav_styles.emptyParent }}>
        <Image source={MAIN_SRC} />
        <Text style={fav_styles.noFav}>{APP_STRINGS.NO_FAV}</Text>
        <Text style={fav_styles.favExplain}>{APP_STRINGS.FAV_EXPLAIN}</Text>
      </View>
    );
  }
}
