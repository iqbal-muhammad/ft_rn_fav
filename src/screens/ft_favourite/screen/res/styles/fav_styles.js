import { StyleSheet } from 'react-native';
import APP_COLORS from '../colors';
export default StyleSheet.create({
  emptyParent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_COLORS.COLOR_BACKGROUND,
  },

  noFav: {
    fontSize: 28,
    paddingTop: 27,
    paddingLeft: 27,
    paddingRight: 16,
    textAlign: 'justify',
    fontFamily: 'MuseoSans500',
    lineHeight: 24,
    color: APP_COLORS.COLOR_THEME,
    letterSpacing: 1,
  },
  favExplain: {
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 27,
    paddingRight: 16,
    textAlign: 'justify',
    fontFamily: 'MuseoSans500',
    color: APP_COLORS.COLOR_THEME,
    letterSpacing: 1,
  },
  listItemParent: {
    borderBottomWidth: 0.5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: APP_COLORS.COLOR_WHITE,
    alignItems: 'center',
    paddingStart: 15,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  listItemLogo: {
    height: 40,
    width: 40,
  },
  listItemTextParent: {
    paddingStart: 15,
    paddingTop: 10,
    flexDirection: 'column',
    flex: 1,
  },
  listItemText: {
    color: APP_COLORS.COLOR_BUTTON,
    flex: 1,
    fontFamily: 'MuseoSans500',
  },
  listItemFavLogo: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 30,
    width: 30,
  },
});
