import {
  primaryColor,
  white,
  borderColor,
  sectionHeaderColor,
  iconFontSize,
  bodyFontSize,
  globalFontRegular,
  globalFontMedium,
  globalPadding,
  globalPaddingSmall,
  globalPaddingTiny,
  globalMargin,
  globalMarginSmall,
} from '../shared/sharedStyles'
import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

const EventManagerStyles = {
  // ROW STYLES
  cardContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: 'transparent',
    borderRadius: 30/2,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: globalMargin,
    overflow: 'hidden',
  },

  // IMAGE STYLES
  cardImage: {
    borderTopLeftRadius: 30/2,
    borderBottomLeftRadius: 30/2,
    height: 80,
    width: 80,
  },

  // HEADER STYLES
  cardWrapper: {
    padding: globalPaddingSmall,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionHeader: {
    color: sectionHeaderColor,
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    marginBottom: globalMarginSmall,
  },
  cardSubHeader: {
    color: sectionHeaderColor,
    // flex: 1,
    // flexWrap: 'wrap',
    fontFamily: globalFontMedium,
    fontSize: bodyFontSize,
    paddingTop: 2,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...EventManagerStyles, ...overrides})
}

export default {
  createStyles,
}