import { render, screen, fireEvent, wait } from '@testing-library/react';
import ContactUs from '../ContactUs';

test('Check entering in the inputs fields', async () => {
    render(<ContactUs />);

    await wait(() => {
        fireEvent.click(screen.queryByText(/sendMessage/i));
    });

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(
        screen.getByText(/please add a message at least one character long/i),
    ).toBeInTheDocument();

    await wait(() => {
        fireEvent.change(screen.queryByLabelText(/fullName/i), {
            target: { value: 'Ahmed' },
        });
        fireEvent.change(screen.queryByLabelText(/email/i), {
            target: { value: 'ahmed' },
        });
        fireEvent.change(screen.queryByLabelText(/message/i), {
            target: { value: 'Hello, World' },
        });
    });

    expect(
        screen.getByText(/invalid email address format/i),
    ).toBeInTheDocument();

    await wait(() => {
        fireEvent.change(screen.queryByLabelText(/fullName/i), {
            target: { value: 'Ahmed' },
        });
        fireEvent.change(screen.queryByLabelText(/email/i), {
            target: { value: 'ahmed@example.com' },
        });
        fireEvent.change(screen.queryByLabelText(/message/i), {
            target: { value: 'Hello, World' },
        });
        fireEvent.click(screen.queryByText(/sendMessage/i));
    });

    expect(screen.queryByLabelText(/fullName/i).value).toBe('Ahmed');
    expect(screen.queryByLabelText(/email/i).value).toBe('ahmed@example.com');
    expect(screen.queryByLabelText(/message/i).value).toBe('Hello, World');
});
