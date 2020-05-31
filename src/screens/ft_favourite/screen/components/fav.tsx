import React from 'react';

import { ScrollView } from 'react-native';

import FavLists from './wrapedComps/favourites';

import Empty from './empty';
interface State {}

export default class Fav extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    //fetching data from props
    let favouritesHTML = [];
    const favouriteList = this.props.data.favourite;
    if (favouriteList && favouriteList !== {}) {
      for (const location in favouriteList) {
        favouritesHTML.push(
          <FavLists
            locationName={location}
            favouriteList={favouriteList[location]}
            onfavouriteClick={this.props.calbacks.onfavouriteClick}
          />
        );
      }
    }

    if (favouritesHTML.length === 0) {
      return <Empty />;
    } else {
      return <ScrollView>{favouritesHTML}</ScrollView>;
    }
  }
}
