import React from 'react'
import { Text, Pressable, View } from 'react-native';
import {
    NavigationHelpersContext,
    useNavigationBuilder,
    TabRouter,
    TabActions,
} from '@react-navigation/native';

const BottomNavigator = (initialRouteName,
    children,
    screenOptions,
    tabBarStyle,
    contentStyle ) => {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(TabRouter, {
            children,
            screenOptions,
            initialRouteName,
        });

    return (
        <NavigationContent>
            <View style={[{ flexDirection: 'row' }, tabBarStyle]}>
                {state.routes.map((route) => (
                    <Pressable
                        key={route.key}
                        onPress={() => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!event.defaultPrevented) {
                                navigation.dispatch({
                                    ...TabActions.jumpTo(route.name),
                                    target: state.key,
                                });
                            }
                        }}
                        style={{ flex: 1 }}
                    >
                        <Text>{descriptors[route.key].options.title || route.name}</Text>
                    </Pressable>
                ))}
            </View>
            <View style={[{ flex: 1 }, contentStyle]}>
                {state.routes.map((route, i) => {
                    return (
                        <View
                            key={route.key}
                            style={[
                                StyleSheet.absoluteFill,
                                { display: i === state.index ? 'flex' : 'none' },
                            ]}
                        >
                            {descriptors[route.key].render()}
                        </View>
                    );
                })}
            </View>
        </NavigationContent>
    );
}

export default BottomNavigator