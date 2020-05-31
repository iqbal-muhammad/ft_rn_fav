import React from 'react';
import { AsyncStorage } from 'react-native';

//Screen
import FavouriteScreen from './screen/index';

//Port
import { Port as Contract } from './screen/port';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectExposeFunction } from '../../redux/appStore/app.selectors';

interface Props {}

interface State {
  adaptor: Contract;
}

class Favourite extends React.Component<any, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      adaptor: {
        data: {
          favourite: {},
        },
        CallBacks: {
          onfavouriteClick: (data) => {
            this.favouriteClickHandler(data);
          },
        },
      },
    };
  }
  UNSAFE_componentWillMount() {
    const data = {
      'persist:FT_NotificationModule_3':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      JWT:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW4iOiJjYmZlNWM1OC1mMjEzLTQ3MGMtYTk5OS0xNmI0YzM5Y2IzZjEiLCJpYXQiOjE1OTA3NTI2ODh9.l5EAEtI-NRXaAEVPgqyJck8fbqq2hzrnVJKOu82Yj7Y',
      'persist:t5': '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      userSessionToken: '98e5dabe-40ce-4f4e-805a-ee689e1942c2',
      'persist:profile_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      'persist:external_webpage_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      'persist:ft_outlet_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      user:
        '{"userId":5294575,"firstName":"Hamza","lastName":"Hamza","countryOfResidence":"Greece","currency":"AED","demographicsUpdated":1,"email":"testqakh@gmail.com","gender":"male","mobilePhone":"1","nationality":"Greece","profileImage":"https://entertainer-profile-images.s3.amazonaws.com/5294575_Gzlub91wpL1FNddlpIjyQRgHk9G9slTS.png","pushNotifications":1,"savings":10171,"dateOfBirth":"19/05/1998"}',
      AppConfigs:
        '{"apiToken":"cbfe5c58-f213-470c-a999-16b4c39cb3f1","serectKey":"77a657ae-da11-4e34-82a1","is_captcha_verification":false,"app_without_validation_screen_ios":"True","captcha_secret_key_ios":"6Ld5OdUUAAAAAErYc3d7-tfX-oTsA8LIct8Ab583","cart_url":"https://entcartut.theentertainerme.com/products2019?et=1&utm_source=app&utm_medium=cart-icon&utm_campaign=cart_icon_app_gbl","is_lookup_based":"1","seamless_login_required":false,"is_s_p":false,"captcha_secret_key_android":"6LffrdUUAAAAABazwM_NLgHLYGtKnidSyVyHCQ8O","is_live_chat_enabled":true,"disabled_captcha_app_versions_ios":"101,1.0","locations":1,"lookup_update_columns":"first_name,last_name","log_analytics":true}',
      'persist:ft_merchant_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      'persist:globalroot':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      category:
        '{"apiName":"Restaurants and Bars","displayName":"FOOD & BEVERAGES","image":"https://s3.amazonaws.com/entertainer-app-assets/categories/food.png"}',
      'persist:ft_auth_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      location:
        '{"active":true,"lat":26.22876,"name":"Bahrain","is_careem_enabled":0,"flag":"BH","currency":"BHD","lng":50.584381,"reload_background":false,"id":3,"is_show_category":false,"background":"https://s3-us-west-2.amazonaws.com/product-locations/backgrounds/3.png","language":"ar"}',
      'persist:ft_search_outlet_module':
        '{"_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}',
      favouriteList:
        '{"5294575":{"Egypt":{"46814":{"merchantName":"CASCADA - Egypt","merchantLogo":"https://offerengine.theentertainerme.com/cascada---egypt-x23889308/merchant_primary_logo_%28non-retina%29_-_merchant2019110101532.jpg","outletId":80438}},"Dubai & N. Emirates":{"12705":{"merchantName":"Denny\'s - Dubai","merchantLogo":"https://offerengine.theentertainerme.com/dennys---dubai-x22124084/merchant_primary_logo_%28non-retina%29_-_merchant.jpg","outletId":72109},"35680":{"merchantName":"Cafe Bateel - Dubai","merchantLogo":"https://offerengine.theentertainerme.com/cafe-bateel---dubai-x035682/merchant_primary_logo_%28non-retina%29_-_merchant.jpg","outletId":60655}},"Bahrain":{"3098":{"merchantName":"Currytree Restaurant","merchantLogo":"https://offerengine.theentertainerme.com/currytree-restaurant-x035846/merchant_primary_logo_%28non-retina%29_-_merchant.png","outletId":5643}}}}',
      homeSection:
        '[{"sectionIdentifier":"main_cover","data":[{"tileIdentifier":"messaging_tile","data":{"messages":["Ka-ching! You’ve saved AED 2769 so far, way to go Hamza!","AED 2769 saved so far! You’re on fire Hamza!","Whoa, AED 2769 worth SAVINGS! You should be proud of yourself Hamza.","Ooh, your savings worth AED 2769 look so good! Keep \'em coming Hamza!","Where’s the party at Hamza!? Cheers for saving AED 2769!"],"mainTopImage":"https://app-home-tiles.s3.amazonaws.com/white_label_background/banner.png"}},{"tileIdentifier":"savings_tile","data":{"savingThisYear":2769,"offersUsed":101}}]},{"sectionIdentifier":"categories","data":[{"apiName":"Restaurants and Bars","displayName":"FOOD & BEVERAGES","image":"https://s3.amazonaws.com/entertainer-app-assets/categories/food.png"},{"apiName":"Body","displayName":"BEAUTY & FITNESS","image":"https://s3.amazonaws.com/entertainer-app-assets/categories/body.png"},{"apiName":"Leisure","displayName":"ATTRACTIONS & LEISURE","image":"https://s3.amazonaws.com/entertainer-app-assets/categories/leisure.png"},{"apiName":"Retail","displayName":"FASHION & RETAIL","image":"https://s3.amazonaws.com/entertainer-app-assets/categories/retail.png"}]},{"sectionIdentifier":"featured_sections","data":[{"deepLink":"https://www.theentertainerme.com/connect/view/sign-up","image":"https://app-home-tiles.s3.amazonaws.com/new_featured/chb/TEB_GenericDeliveryComms_02.04.20_KA_Tile.jpg","title":"Register with VIP key-chalhoub 2020"},{"deepLink":"chalhoubentertainer://appsearch?search=festive","image":"https://app-home-tiles.s3.amazonaws.com/featured/chalhoub_session_for_saving.jpg","title":"Save this holiday season with our festive offers"},{"deepLink":"chalhoubentertainer://OpenCategory?category=FoodAndDrink","image":"https://app-home-tiles.s3.amazonaws.com/new_featured/chb/chalhoub+-+Marketing+tiles+A.jpg","title":"Bites & feasts for every taste"},{"deepLink":"chalhoubentertainer://OpenCategory?category=BeautyAndFitness","image":"https://app-home-tiles.s3.amazonaws.com/new_featured/chb/chalhoub+-+Marketing+tiles+B.jpg","title":"Spas, salons, gyms & more"},{"deepLink":"chalhoubentertainer://Help","image":"https://app-home-tiles.s3.amazonaws.com/new_featured/chb/chalhoub+-+Marketing+tiles+C+(Option+A).jpg","title":"Read through our frequently asked questions"}]}]',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW4iOiJjYmZlNWM1OC1mMjEzLTQ3MGMtYTk5OS0xNmI0YzM5Y2IzZjEiLCJzZXNzaW9uX3Rva2VuIjoiOThlNWRhYmUtNDBjZS00ZjRlLTgwNWEtZWU2ODllMTk0MmMyIiwiaWF0IjoxNTkwNzUyNzAxfQ.VPL1PHwOEdzkKGMJoT94yZcuq6ofo3_OiHJFbMc-cZg',
    };
    //this.writeLocalStorage(data);
  }

  writeLocalStorage = (data) => {
    // console.log(data, 'writeLocalStorage');
    var o = data;
    for (var property in o) {
      if (o.hasOwnProperty(property)) {
        AsyncStorage.setItem(property, o[property]);
      }
    }
  };
  componentDidMount(): void {
    console.log('componentDidMount');
    this.getFavouriteList();
  }

  getFavouriteList = async () => {
    console.log('getFavouriteList');
    const asyncObject = await AsyncStorage.multiGet(['user', 'favouriteList']);
    let user = asyncObject[0][1];
    user = JSON.parse(user);
    const userId = user.userId;
    let favouriteList = asyncObject[1][1];
    if (favouriteList === null || favouriteList === undefined) {
      favouriteList = {};
    } else {
      favouriteList = JSON.parse(favouriteList);
    }

    //checking if use exits in favourite List object or not.....if not.. adding userID into favourite List object
    if (favouriteList[userId]) {
      favouriteList = favouriteList[userId];
    }
    console.log('getFavouriteList: ', favouriteList);
    console.log('user: ', user);
    this.setState({
      adaptor: {
        data: {
          ...this.state.adaptor.data,
          favourite: favouriteList,
        },
        CallBacks: { ...this.state.adaptor.CallBacks },
      },
    });
  };

  favouriteClickHandler = (data: any) => {
    const { merchantId, outletId } = data;
    console.log('merchantId: ', data);
    const exposeData = {
      type: 'favourite',
      data: {
        merchantId: merchantId,
        outletId: outletId,
      },
    };
    this.props.exposeFunction && this.props.exposeFunction(exposeData);
  };

  render() {
    return <FavouriteScreen {...this.state.adaptor} />;
  }
}

const mapStateToProps = createStructuredSelector({
  exposeFunction: selectExposeFunction,
});

export default connect(mapStateToProps, null)(Favourite);
