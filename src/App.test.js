import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

describe('app', () => {

  test('check if text field exist', () => {
    render(<App />);
    const text_field = screen.getByTestId('input');
    expect(text_field).toBeInTheDocument();
  });

  test('check if button exists', () => {
    render(<App />);
    const submit_button = screen.getByTestId('submit');
    expect(submit_button).toBeInTheDocument();
  })

  test('button should have submit as text', () => {
    render(<App />)
    const submit_button = screen.getByTestId('submit');
    expect(submit_button.textContent).toEqual('Submit');
  })

  test('clicking on button should open new tab', () => {
    render(<App />);
    const action = jest.spyOn(window, "open");
    const submit_button = screen.getByTestId('submit');
    UserEvent.click(submit_button);
    expect(action).lastCalledWith("google.com");
  });

})
