import { createStackNavigator } from "@react-navigation/stack"
import MyLibraryView from "../../view/myLibrary/MyLibraryView"

const Stack = createStackNavigator();

const MyLibraryStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="myLibrary" component={MyLibraryView} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default MyLibraryStack;