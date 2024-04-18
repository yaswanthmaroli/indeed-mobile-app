import {Dimensions, Platform} from 'react-native';

const DIM = {
  deviceWidth: Math.round(Dimensions.get('screen').width),
  deviceHeight: Math.round(Dimensions.get('screen').height),
  deviceFont: Math.round(Dimensions.get('screen').fontScale),
};

const icons = {
  logoindeed: require('./icons/indeedlogo.png'),
  logoflower: require('./icons/indeedflower.png'),
  message: require('./icons/comment.png'),
  bell: require('./icons/bell.png'),
  hamburger: require('./icons/hamburger.png'),
  search: require('./icons/search.png'),
  location: require('./icons/location.png'),
  save: require('./icons/bookmark.png'),
  restrict: require('./icons/restrict.png'),
};

const Colors = {
  bgColor: '#fff',
  borderColor: '#E8E8E8',
  textColor: '#000',
  placeholderColor: '#939090',
  onlineBackgroundColor: '#C0EBAA',
  onlineTextColor: '#329500',
  salaryBgColor: '#D6D6D6',
  salaryTextColor: '#575F52',
};

export {icons, DIM, Colors};
