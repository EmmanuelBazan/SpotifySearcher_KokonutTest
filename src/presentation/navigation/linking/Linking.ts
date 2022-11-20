const config = {
    Screen: {
        login: {
            path: 'login'
        },
        mainNavigationTab: {
            path: 'mainNavigationTab'
        }
    }
};

const linking = {
    prefixes: ['spotifysearcher://'],
    config,
};

export default linking;