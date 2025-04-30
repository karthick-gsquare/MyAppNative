import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  homeContainer: {
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  phoneCardContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  fontBase: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  flex: {
    display: 'flex',
    flexDirection:"row",
    gap: 10,
  },
  primaryButton:{
    padding:8,
    borderRadius:10,
    backgroundColor:"#0F70B5"
  }
});

export default styles;
