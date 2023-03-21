// Color set
const colorSet = {
  redColor: '#FF0000',
  greenColor: '#00FF00',
  blueColor: '#0000FF',
  whiteColor: '#FFFFFF',
}

const imageSet = {
  imgAvatar: require('../assets/images/default_profile_avatar.png'),
}

// Font sizes
const fontSizeSet = {
  sizeSmall: 10,
  sizeNormal: 16,
  sizeBig: 24,
  sizeHuge: 32,
};

// Global App Style Sheet
const styleSet = {
  flex1: {
    flex: 1
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  alignItemCenter: {
    alignItems: 'center'
  }
}

// Export all styles as single dict
const StyleDict = {
  imageSet,
  colorSet,
  fontSizeSet,
  styleSet,
};

export default StyleDict;
