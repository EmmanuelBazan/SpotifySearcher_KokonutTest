import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "../../view/search/SearchView";

const Stack = createStackNavigator();

const SearchStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="search" component={SearchView} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default SearchStack;