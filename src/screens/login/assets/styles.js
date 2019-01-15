import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 20
  },
  inputGroup: {
    marginVertical: 10
  },
  noBorderBottom: {
    borderBottomWidth: 0
  },
  buttonSubmit: {
    marginTop: 15,
    backgroundColor: '#2980b9'
  },
  buttonText: {
    fontWeight: '700',
    color: '#fff'
  },
  buttonToast: {
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0.6,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default styles;