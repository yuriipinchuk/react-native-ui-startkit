import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';

const DEFAULT_IMAGE = require('../../../assets/images/default_profile_avatar.png');

export default function PlaceholderImage(props) {
  // loadState => -1: loading, 0: failed, 1: success
  var [loadState, setLoadState] = React.useState(-1);

  const _onLoadingError = () => {
    this.setState({ loadState: 0 });
  };

  return (
    <View style={props.style ?? {}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={props.source}
        />
    </View>
  );
}
