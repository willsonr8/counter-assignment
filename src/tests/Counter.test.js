import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
    
    
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByTestId('count');
    expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByTestId('count');
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByTestId('count');
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(count).toHaveTextContent('-1');
});