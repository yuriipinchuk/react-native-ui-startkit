import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../AppStyles';
import { Button, LoadingIndicator } from '../../components';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  showLoadingDialog = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={[AppStyles.styleSet.flex1, AppStyles.styleSet.justifyCenter, AppStyles.styleSet.alignItemCenter]}>        
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Button'}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Round Button'}
          borderRadius={17}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Outlined'}
          titleStyle={{color: 'red'}}
          borderColor={'red'}
          type={'outlined'}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Outlined Round'}
          titleStyle={{color: 'red'}}          
          borderColor={'red'}
          borderRadius={17}
          type={'outlined'}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'HighLight Title'}
          highlightTitle={'Pressed'}
          highlightOpacity={0.9}
          borderRadius={17}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Disabled'}
          disabled={true}
          borderRadius={17}
          />
        <Button
          style={{marginHorizontal: 20, height: 34, marginTop: 20}}
          title={'Show Loading'}
          borderRadius={17}
          onPress={()=> this.showLoadingDialog()}
          />
        {this.state.loading && (
          <LoadingIndicator/>
        )}
      </SafeAreaView>
    );
  }
}