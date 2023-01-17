import { Dimensions, Platform, StyleSheet } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const parentHeight = '100%';
export const parentWidth = '100%';

export const GlobalStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexRow: { flexDirection: 'row' },
  verticalAlign: {
    justifyContent: 'center',
  },
  horizentalAlign: {
    alignItems: 'center',
  },
  containerCenterStretch: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  containerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerStart: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containerStartRow: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerItemStart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  containerItemRowStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  containerCenterStart: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  containerEnd: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  containerCenterEnd: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  containerRowCenterEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerRowStart: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  containerRowEnd: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  containerSpace: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerSpaceEvenly: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  containerSpaceAround: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerRowSpace: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentRowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containercolumnSpace: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  selfStretch: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  parentWidth: {
    width: '100%',
  },
  parentHeight: {
    height: '100%',
  },
  parentSize: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },

  //text
  capitalize: {
    textTransform: 'capitalize',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  //justify

  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  fullWidth: {
    width: screenWidth,
  },
  fullHeight: {
    height: screenHeight,
    maxHeight: screenHeight,
  },
  fullFlex: {
    flex: 1,
  },
  //   densePadding: {
  //     padding: horizontalScale(2),
  //   },
  //   normalPaddingHorizontal: {
  //     paddingHorizontal: horizontalScale(10),
  //   },
  //   doublePaddingHorizontal: {
  //     paddingHorizontal: horizontalScale(20),
  //   },
  //   normalPaddingVertical: {
  //     paddingVertical: verticalScale(10),
  //   },
  //   normalPaddingTop: {
  //     paddingTop: horizontalScale(10),
  //   },
  //   densePaddingTop: {
  //     paddingTop: horizontalScale(2),
  //   },
  //   halfPaddingTop: {
  //     paddingTop: horizontalScale(5),
  //   },
  //   doublePaddingVertical: {
  //     paddingVertical: verticalScale(20),
  //   },
  //   paddingVertical: {
  //     paddingVertical: verticalScale(15),
  //   },
  //   normalpaddingVertical: {
  //     paddingVertical: verticalScale(10),
  //   },
  //   halfPaddingVertical: {
  //     paddingVertical: verticalScale(5),
  //   },
  //   densepaddingVertical: {
  //     paddingVertical: verticalScale(2),
  //   },

  //   denceSpacingLeft: {
  //     paddingLeft: horizontalScale(5),
  //   },

  //   paddingLeft: {
  //     paddingLeft: horizontalScale(10),
  //   },
  //   paddingRight: {
  //     paddingRight: horizontalScale(10),
  //   },
  //   densePaddingLeft: {
  //     paddingLeft: horizontalScale(5),
  //   },
  //   normalPadding: {
  //     padding: horizontalScale(10),
  //   },
  //   doublePadding: {
  //     padding: horizontalScale(20),
  //   },
  //   normalPaddingBottom: {
  //     paddingBottom: horizontalScale(10),
  //   },
  //   doublePaddingBottom: {
  //     paddingBottom: horizontalScale(15),
  //   },
  //   doubleDensePadding: {
  //     padding: horizontalScale(5),
  //   },

  //   spacingLeft: {
  //     paddingLeft: horizontalScale(10),
  //   },
  //   spacingRight: {
  //     paddingRight: horizontalScale(10),
  //   },
  //   denseSpacingLeft: {
  //     paddingLeft: horizontalScale(5),
  //   },

  //   margin0: {
  //     margin: 0,
  //     marginRight: 0,
  //     marginLeft: 0,
  //     marginVertical: 0,
  //     marginBottom: 0,
  //     marginHorizontal: 0,
  //     marginTop: 0,
  //   },

  //   //margin
  //   marginLeft: {
  //     marginLeft: horizontalScale(8),
  //   },

  //   defaultMargin: {
  //     marginLeft: horizontalScale(60),
  //   },

  //   defaultMarginTop: {
  //     marginTop: horizontalScale(24),
  //   },

  //   denseMarginRight: {
  //     marginRight: horizontalScale(5),
  //   },
  //   denseMarginLeft: {
  //     marginLeft: horizontalScale(5),
  //   },
  //   marginTop: {
  //     marginTop: horizontalScale(10),
  //   },
  //   marginRight: {
  //     marginRight: horizontalScale(10),
  //   },
  //   doubleMarginTop: {
  //     marginTop: horizontalScale(20),
  //   },
  //   extraMarginTop: {
  //     marginTop: horizontalScale(30),
  //   },
  //   noSpacing: {
  //     margin: 0,
  //     padding: 0,
  //   },
  //   doubleMarginHorizontal: {
  //     marginHorizontal: horizontalScale(20),
  //   },
  //   marginHorizontal: {
  //     marginHorizontal: horizontalScale(10),
  //   },

  //radius
  roundedRadius: {
    borderRadius: screenWidth,
  },

  //fontWeight
  bold: {
    fontWeight: '700',
  },

  //position

  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },

  positionTop: {
    top: 0,
    left: 0,
    right: 0,
  },

  top: {
    top: 0,
  },

  left: {
    left: 0,
  },
  left3: {
    left: 3,
  },

  right: {
    right: 0,
  },
  right7: {
    right: 7,
  },
  positionAuto: {
    left: 'auto',
    right: 'auto',
  },
  positionZero: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  //zindex
  index4: {
    zIndex: 4,
  },

  formHeight: {
    height: screenHeight - 200,
  },

  //borderColor
  scroll: {
    overflow: 'scroll',
  },

  rounded: {
    borderRadius: screenHeight * screenWidth,
  },

  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeight600: {
    fontWeight: '600',
  },
  fontWeight500: {
    fontWeight: '500',
  },

  //fontFamily
  fontBold: {
    // fontFamily: 'bold',
    fontWeight: 'bold',
  },
  medium: {
    fontWeight: '500',
  },
  fontSemiBold: {
    fontWeight: '600',
  },
  fontItalic: {
    fontFamily: 'italic',
  },
  fontNormal: {
    fontWeight: '400',
  },

  //overflow
  overflowHidden: {
    overflow: 'hidden',
  },

  //size
  screenWidth: {
    width: screenWidth,
  },
  screenHeight: {
    height: screenHeight,
  },

  //border Radius
  radiusDense: {
    borderRadius: 4,
  },
  radius: {
    borderRadius: 8,
  },
  radiusDouble: {
    borderRadius: 15,
  },
  radiusTriple: {
    borderRadius: 24,
  },
});
