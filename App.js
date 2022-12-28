import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
const pdf2base64 = require('pdf-to-base64');

export default class PDFExample extends React.Component {
  render() {
    // const source = {
    //   uri: 'http://www.africau.edu/images/default/sample.pdf',
    //   cache: true,
    // };
    const source = {uri: 'bundle-assets://test1.pdf'};
    // const source = {uri: 'data:application/pdf;base64,' + pdf64};
    return (
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
