import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const title = 'Waterly';
  const usernameLabel = 'Username: ';
  const passwordLabel = 'Password: ';

  return (
    <View style={styles.login}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.formRow}>
        <Text style={styles.label}> {usernameLabel} </Text>
        <TextInput
          onChangeText={text => onChangeUsername(text)}
          value={username}
          style={styles.input}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}> {passwordLabel} </Text>
        <TextInput
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={this.handlePress} style={styles.btnHolder}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.handlePress} style={styles.linkHolder}>
        <Text style={styles.signup}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.handlePress} style={styles.linkHolder}>
        <Text style={styles.signup}>Click to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const handlePress = () => {
  // currently a placeholder
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 120,
  },
  login: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 30,
  },
  input: {
    width: 180,
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  formRow: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    textAlign: 'right',
    minWidth: 40,
    width: 125,
    fontSize: 25,
    marginEnd: 40,
  },
  btn: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    fontSize: 20,
    padding: 8,
    width: 150,
    textAlign: 'center',
  },
  btnHolder: {
    marginTop: 90,
    marginBottom: 10,
    alignItems: 'center',
  },
  linkHolder: {
    marginTop: 10,
    alignItems: 'center',
  },
  signup: {
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default Login;
