import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
// import Header from './components/Header/Header'
// import { fireEvent } from './utils/test.utils';
import App from './App'

it('should render Header', () => {
    const { getByTestId, debug } = render(<App />)
    expect(getByTestId('name').children[0]).toEqual('Emyboy');
    expect(getByTestId('name').children).toHaveLength(1);
});

it('should click the button', () => {
    const { getByTestId, getByText } = render(<App />);

    fireEvent.changeText(getByTestId('text_input'), 'Yo bro!')
    expect(getByText('Yo bro!').children).toHaveLength(1)
})
