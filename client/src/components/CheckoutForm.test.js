import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const { getByPlaceholderText, getByTestId, getByLabelText, getByText } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/First Name:/i), { target: { value: "Jojojo" } });
    fireEvent.change(getByLabelText(/Last Name:/i), { target: { value: "Jojojo" } });
    fireEvent.change(getByLabelText(/Address:/i), { target: { value: "Jojojo" } });
    fireEvent.change(getByLabelText(/City:/i), { target: { value: "Jojojo" } });
    fireEvent.change(getByLabelText(/State:/i), { target: { value: "Jojojo" } });
    fireEvent.change(getByLabelText(/Zip:/i), { target: { value: "Jojojo" } });

    const button = getByTestId(/submit-button/i);
    act(() => {
        fireEvent.click(button);
    });

    const successMessage = getByText(/You have ordered some plants! Woo-hoo!/i);

    expect(successMessage).toBeInTheDocument();
});
    // const firstNameInput = getByTestId(/submit-button/i);
// const lastNameInput = getByLabelText(/Last Name:/i);
// const addressInput = getByLabelText(/Address:/i);
// const cityInput = getByLabelText(/City:/i);
// const stateInput = getByLabelText(/State:/i);
// const zipInput = getByLabelText(/Zip:/i);
