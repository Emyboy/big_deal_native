// test-utils.js
import { render } from '@testing-library/react-native'
import Global from '../Global';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        myOwnColor: Global.THEME_COLOR,
    }
};

const AllTheProviders = ({ children }) => {
    return (
        <PaperProvider theme={theme}>
            {children}
        </PaperProvider>
    )
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }