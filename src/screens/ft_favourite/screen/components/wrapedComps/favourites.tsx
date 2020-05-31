import React from 'react';

import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import APP_COLORS from '../../res/colors';
import fav_styles from '../../res/styles/fav_styles';

import { AntDesign } from '@expo/vector-icons';
import { FAV_IMAGE } from '../../res/images';

const FavLists = (props: any) => {
  const { locationName, favouriteList, onfavouriteClick } = props;
  console.log(favouriteList, 'FavLists');
  let list = [];
  if (Object.keys(favouriteList).length !== 0) {
    for (const merchantId in favouriteList) {
      console.log('list: ', favouriteList[merchantId]);
      // const outlet = { merchant: { id: merchantId } }
      const data = {
        merchantLogo: favouriteList[merchantId].merchantLogo,
        merchantName: favouriteList[merchantId].merchantName,
        merchantId: merchantId,
        outletId: favouriteList[merchantId].outletId,
      };
      list.push(data);
    }
  }
  return (
    <View>
      <View style={fav_styles.listItemParent}>
        <Text style={{ color: 'grey' }}>{locationName}</Text>
      </View>
      {list.map((item) => {
        const { merchantId, outletId } = item;
        console.log(merchantId, outletId);
        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => onfavouriteClick({ merchantId, outletId })}
            style={fav_styles.listItem}
          >
            <Image
              style={fav_styles.listItemLogo}
              source={{ uri: item.merchantLogo }}
            />

            <View style={fav_styles.listItemTextParent}>
              <Text style={fav_styles.listItemText}>{item.merchantName}</Text>
            </View>
            <AntDesign
              name='caretright'
              size={12}
              color={APP_COLORS.COLOR_999999}
            />
            <Image style={fav_styles.listItemFavLogo} source={FAV_IMAGE} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FavLists;
