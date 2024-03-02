import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should render Heading on screen", () => {
    render(<Contact />);
    const contactHeading = screen.getByRole("heading");

    // Asseertion
    expect(contactHeading).toBeInTheDocument();
  });
});
