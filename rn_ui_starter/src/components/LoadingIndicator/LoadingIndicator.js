import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import styles from './Styles';

const DEFAULT_OVERLAY_BACKGROUND = '#00000088';
const DEFAULT_INDICATOR_COLOR = '#FF0000';

export default function LoadingIndicator(props) {
  return (
    <Modal transparent>
      <View style={[styles.container, {backgroundColor: props.overlayColor ?? DEFAULT_OVERLAY_BACKGROUND}]}>
        <ActivityIndicator
          size="large" 
          color={props.indicatorColor ?? DEFAULT_INDICATOR_COLOR}/>
      </View>
    </Modal>
  );
}