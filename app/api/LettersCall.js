import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';


const LettersCall = () => {
    const [data, setData] = useState([]);
    console.log('daaaaaattttttaaaa',data);
    useEffect(() => {
      // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      fetch('https://bornomala.righthemisphere.in/items/Character?filter[type]=letter')
        .then((response) => response.json())
        .then((json) => setData(json))
       // .then(() =>console.log(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  return (
    <View>
      <Text>LettersCall</Text>
      <Text>{data}</Text>

    </View>
  )
}

export default LettersCall

const styles = StyleSheet.create({})