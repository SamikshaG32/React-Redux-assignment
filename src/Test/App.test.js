import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import store from './redux/store';
 
// Helper function to render the App component with the necessary context (Redux store and Router)
const renderAppWithProviders = () => {
  return render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};
 
describe('App Component', () => {
  test('renders Employee component on the home route ("/")', async () => {
    renderAppWithProviders();
 
    // Ensure that the Employee component is rendered
    const employeeHeading = await screen.findByText(/Employee List/i);
    expect(employeeHeading).toBeInTheDocument();
  });
});
 
 