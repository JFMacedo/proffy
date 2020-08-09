import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7'
  },

  teacherList: {
    marginTop: -40
  },

  searchForm: {
    marginBottom: 24
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  input: {
    justifyContent: 'center',
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF'
  },

  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#04D361'
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFFFFF'
  }
})

export default styles;