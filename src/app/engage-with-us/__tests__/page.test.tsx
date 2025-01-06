import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EngageWithUs from '../page';

// Mock the fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('EngageWithUs Contact Form', () => {
  const renderAndWait = async () => {
    await act(async () => {
      render(<EngageWithUs />);
    });
  };

  beforeEach(async () => {
    await renderAndWait();
  });

  it('shows required field error for email when submitting empty form', async () => {
    const submitButton = screen.getByText('Send inquiry');
    const emailInput = screen.getByLabelText(/Email Address/);

    // Focus and blur the email field to trigger validation
    await userEvent.click(emailInput);
    fireEvent.blur(emailInput);

    // Submit the form
    await userEvent.click(submitButton);

    // Wait for validation message
    await waitFor(() => {
      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveTextContent('This field is required');
    });
  });

  it('shows invalid email error when entering incorrect email format', async () => {
    const emailInput = screen.getByLabelText(/Email Address/);
    const submitButton = screen.getByText('Send inquiry');

    // Enter invalid email
    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.blur(emailInput);

    // Submit form
    await userEvent.click(submitButton);

    // Wait for validation message
    await waitFor(() => {
      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toHaveTextContent(
        'Please enter a valid email address',
      );
    });
  });

  it('shows success message when form is submitted successfully', async () => {
    // Mock successful API response
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    );

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/Name/i), 'Test User');
    await userEvent.type(
      screen.getByLabelText(/Email Address/i),
      'test@example.com',
    );
    await userEvent.type(screen.getByLabelText(/Organization/i), 'Test Org');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test message');

    // Submit the form
    const submitButton = screen.getByText('Send inquiry');
    fireEvent.click(submitButton);

    // Check if success message appears
    await waitFor(() => {
      expect(
        screen.getByText('Message successfully sent!'),
      ).toBeInTheDocument();
    });
  });

  it('shows error message when form submission fails', async () => {
    // Mock failed API response
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to send')),
    );

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/Name/i), 'Test User');
    await userEvent.type(
      screen.getByLabelText(/Email Address/i),
      'test@example.com',
    );
    await userEvent.type(screen.getByLabelText(/Organization/i), 'Test Org');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test message');

    // Submit the form
    const submitButton = screen.getByText('Send inquiry');
    fireEvent.click(submitButton);

    // Check if error message appears
    await waitFor(() => {
      expect(
        screen.getByText("We couldn't submit your inquiry"),
      ).toBeInTheDocument();
    });
  });

  it('disables submit button while form is submitting', async () => {
    // Mock slow API response
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(resolve, 100)),
    );

    // Fill out the form
    await userEvent.type(
      screen.getByLabelText(/Email Address/i),
      'test@example.com',
    );

    // Submit the form
    const submitButton = screen.getByText('Send inquiry');
    fireEvent.click(submitButton);

    // Check if button shows loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
