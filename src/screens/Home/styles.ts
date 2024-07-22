import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#131016",
    paddingTop: 75
  },
  titleEvento: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  dateEvento: {
    color: '#6B6B6B',
    fontSize: 16,
    lineHeight: 16,
    marginTop: 8
  },
  formEvento: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 44,
    alignItems: "center"
  },
  inputEvento: {
    backgroundColor: "#333238",
    flex: 1,
    height: 56,
    borderRadius: 4,
    padding: 8,
    color: "#FDFCFE"
  },
  ParticipantsTitle: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',

    marginTop: 36
  },
  containerListParticipant: {
    marginVertical: 24
  },
  listEmpty: {
    color: "#FDFCFE",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 14
  },

})