
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import CounterDemo from '../components/CounterDemo';
import counterReducer from '../store/counterSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('CounterDemo', () => {
  test('renders counter with initial value', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <CounterDemo />
      </Provider>
    );
    
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Redux Toolkit Demo')).toBeInTheDocument();
  });

  test('increments counter when +1 button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <CounterDemo />
      </Provider>
    );
    
    const incrementButton = screen.getByText('+1');
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrements counter when -1 button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <CounterDemo />
      </Provider>
    );
    
    const decrementButton = screen.getByText('-1');
    fireEvent.click(decrementButton);
    
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
