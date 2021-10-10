import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
    const form = screen.getByText(/checkout form/i);
    expect(form).toBeInTheDocument();
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const { getByLabelText } = screen;
    const first = getByLabelText(/first name/i);
    userEvent.type(first, "Jacob");
    const last = getByLabelText(/last name/i);
    userEvent.type(last, "Brooks");
    const address = getByLabelText(/address/i);
    userEvent.type(address, "123 Awesome Road");
    const city = getByLabelText(/city/i);
    userEvent.type(city, "Coolville");
    const state = getByLabelText(/state/i);
    userEvent.type(state, "Cheeseland");
    const zip = getByLabelText(/zip/i);
    userEvent.type(zip, "54321");

    const btn = screen.getByRole("button");
    userEvent.click(btn);

    expect(screen.getByText(/your/i)).toHaveTextContent("Your new green friends will be shipped to:");
});
