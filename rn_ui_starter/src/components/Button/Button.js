import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './Styles';

const DEFAULT_BACKGROUND_COLOR = '#FF0000';
const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_BORDER_RADIUS = 5;
const DEFAULT_DISABLE_OPACITY = 0.5;
const DEFAULT_HIGHLIGHT_OPACITY = 0.5;

export default function Button(props) {
  var [isPress, setIsPress] = React.useState(false);

  const type = props.type ?? 'default';
  const isOutlined = type === 'outlined';

  const bkgColor = isOutlined ? 'transparent' : (props.bkgColor ?? DEFAULT_BACKGROUND_COLOR);
  const disabled = props.disabled ?? false;
  const disableOpacity = props.disableOpacity ?? DEFAULT_DISABLE_OPACITY;
  const highlightBkgColor = isOutlined ? 'transparent' : (props.highlightBkgColor ?? bkgColor);  
  const highlightOpacity = props.highlightOpacity ?? DEFAULT_HIGHLIGHT_OPACITY;
  const highlightTitle = props.highlightTitle ?? props.title;
  const title = isPress ? highlightTitle : props.title;
  const borderRadius = props.borderRadius ?? DEFAULT_BORDER_RADIUS;
  const borderWidth = props.borderWidth ?? DEFAULT_BORDER_WIDTH;
  const borderColor = props.borderColor ?? bkgColor;
  const titleStyle = props.titleStyle ?? {};
  
  var touchProps = {
    activeOpacity: highlightOpacity,
    disabled: disabled,
    underlayColor: highlightBkgColor,
    style: [      
      styles.btnDefault,      
      { backgroundColor: bkgColor },
      { borderRadius: borderRadius },
      { borderWidth: borderWidth},
      { borderColor: borderColor },
      disabled ? {opacity: disableOpacity} : {},
    ],
    onPress: () => props.onPress(),
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  return (
    <View style={[styles.container, props.style, styles.btnDefaultShadow]}>
      <TouchableHighlight {...touchProps}>
        <Text style={[styles.btnTitle, titleStyle]}>
          {title}	
        </Text>	
      </TouchableHighlight>
    </View>
  );
}