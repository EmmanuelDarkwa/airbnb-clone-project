import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fdffff'
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ababab',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Mon-b',
      },
      btnIcon: {
        position: 'absolute',
        left: 16,
      },
      footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
      },
})