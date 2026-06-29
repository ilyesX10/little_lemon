import { render, screen } from "@testing-library/react";
import BookingPage from './component/BookingPage';

test("renders heading", () => {
  render(<BookingPage />);
  const heading = screen.getByText("Reserve a Table")
  expect(heading).toBeInTheDocument();
});
test("renders Make Your Reservation btn", () => {
  render(<BookingPage />);
  const btn = screen.getByRole("button", {
    name: /Make Your Reservation/i,
  });
  screen.debug();
  expect(btn).toBeInTheDocument();
});