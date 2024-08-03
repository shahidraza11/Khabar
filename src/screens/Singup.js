import React from "react";
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Signup = ({ navigation }) => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
    rememberMe: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
  });

  return (
    <Formik
      initialValues={{ username: '', password: '', rememberMe: false }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        navigation.navigate('Login');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1, backgroundColor: 'white', margin: 20 }}>
            <Text style={{ fontSize: 50, color: '#1877F2', fontWeight: 'bold' }}>Hello!</Text>
            <Text style={{ fontSize: 25, color: '#4E4B66', marginBottom: 30 }}>Signup to get started</Text>
            <Text style={{ fontSize: 17, color: 'black' }}>Username <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={styles.input}
              keyboardType="default"
            />
            {errors.username && touched.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <Text style={{ fontSize: 17, color: 'black' }}>Password <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
              secureTextEntry
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <CheckBox
                isChecked={values.rememberMe}
                onClick={() => setFieldValue('rememberMe', !values.rememberMe)}
              />
              <Text style={{ color: 'black', fontSize: 17, marginLeft: 10 }}>Remember me</Text>
            </View>
            {errors.rememberMe && touched.rememberMe ? (
              <Text style={styles.errorText}>{errors.rememberMe}</Text>
            ) : null}
            <Pressable onPress={handleSubmit}>
              <Text style={styles.pressable}>Signup</Text>
            </Pressable>
            <Text style={{ color: 'black', textAlign: "center", fontSize: 17, marginTop: 20, marginBottom: 20 }}>or continue with</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.socialButton}>
                <Image source={require('../assets/icons/Facebook.png')} style={{  maxHeight: 20, maxWidth: 20 }} />
                <Text style={{ fontSize: 15 ,color: '#4E4B66'}}>Facebook</Text>
              </View>
              <View style={styles.socialButton}>
                <Image source={require('../assets/icons/Google.webp')} style={{  maxHeight: 30, maxWidth: 30 }} />
                <Text style={{ fontSize: 15,color: '#4E4B66' }}>Google</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 17, color: 'black' }}>Already have an account? </Text>
              <Text onPress={() => navigation.navigate('Login')} style={{ fontSize: 17, color: '#1E90FF', fontWeight: 'bold' }}>Login</Text>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#1877F2',
    color: 'white',
    height: 50,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10
  },
  input: {
    height: 40,
    color:'black',
    borderColor: '#1877F2',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  errorText: {
    fontSize: 12,
    color: 'red'
  },
  socialButton: {
    backgroundColor: '#EEF1F4',
    maxHeight: 50,
    maxWidth: 130,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Signup;
