import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import axios from 'axios'
import DisplayAllEmployee from '../Components/DisplayAllEmployee'
 
describe('App Component', () => {
  beforeEach(async () => {
    // Here’s how you can mock console.warn during testing to prevent these warnings from showing up
    jest.spyOn(console, 'warn').mockImplementation((msg) => {
      if (msg.includes('React Router Future Flag Warning')) return;
      console.warn(msg);
    });
 
    // Mock the axios GET request to simulate fetching data
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ],
    });
 
    // Render the component with Redux Provider and Router
    await waitFor(async () => {
      render(
        <Provider store={store}>
          <Router>
           <DisplayAllEmployee></DisplayAllEmployee>
          </Router>
        </Provider>
      );
    });
  });
 
 test('Set employee list', async () => {
    // Assert that the employees are displayed
    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Jane Smith')).toBeInTheDocument());
  });
 
});
 
 