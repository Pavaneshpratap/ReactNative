import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob'

function Home() {
  const [uri, setUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  _onButtonPress = async () => {


    RNFetchBlob
      .config({
        fileCache: true,
        appendExt: 'pdf'
      })
      .fetch('GET', 'http://samples.leanpub.com/thereactnativebook-sample.pdf', {
      })
      .then((res) => {
        console.log('The file saved to ', res.path())
        let localPath = "file://" + res.path();
        console.log("final path ", localPath);

        const data = new FormData();
        data.append('file', {
          name: 'pdfbook',
          uri: localPath,
          type: 'application/pdf',
        });

        axios.post('http://elearningapi.appskeeper.com/pdf', data).then(
          res => {
            console.log(res.data);
            setTimeout(() => {
              axios
                .get(
                  'http://elearningapi.appskeeper.com/pdf?filename=' +
                  res.data.filename,
                )
                .then(res => console.log('result is', res))
                .catch(() => console.log('error a gaya'));
            }, 15900);


            // setInterval(() => {
              
            //   axios
            //     .get(
            //       'http://elearningapi.appskeeper.com/pdf?filename=' +
            //       res.data.filename,
            //     )
            //     .then(res => console.log('result is', res))
            //     .catch(() => console.log('error a gaya'));
            // }, 1500);

          },

          // axios
          //   .get(
          //     'http://elearningapi.appskeeper.com/pdf?filename=' +
          //       responce.data.filename,
          //   )
          //   .then(responce => console.log('responce', responce.data)),
        );
        
      })

    // await DocumentPicker.pick({
    //   type: [DocumentPicker.types.pdf],
    // })
    //   .then(responce => {

    //     //  = "content://com.android.providers.downloads.documents/document/raw%3A%2Fstorage%2Femulated%2F0%2FDownload%2FAyush%20Medical%20Hall.pdf"
    //     //  let str = responce.uri.substring(7)
    //     //  console.log("path ", str)
    //     const data = new FormData();
    //     data.append('file', {
    //       name: 'pdfbook',
    //       uri: responce.uri,
    //       type: 'application/pdf',
    //     });

    //     axios.post('http://elearningapi.appskeeper.com/pdf', data).then(
    //       res => {
    //         console.log(res.data);

    //         setTimeout(() => {
    //           axios
    //             .get(
    //               'http://elearningapi.appskeeper.com/pdf?filename=' +
    //               res.data.filename,
    //             )
    //             .then(res => console.log('result is', res))
    //             .catch(() => console.log('error a gaya'));
    //         }, 5000);
    //       },

    //       // axios
    //       //   .get(
    //       //     'http://elearningapi.appskeeper.com/pdf?filename=' +
    //       //       responce.data.filename,
    //       //   )
    //       //   .then(responce => console.log('responce', responce.data)),
    //     );
    //   })
    //   .catch(error => console.warn('error', error));
  };
  return (
    !isLoading && (
      <View style={styles.container}>
        <Text>Pdf selector</Text>
        <TouchableOpacity onPress={_onButtonPress} style={styles.button}>
          <Text style={styles.text}>Choose Pdf</Text>
        </TouchableOpacity>
      </View>
    )
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.4,
  },
  button: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});