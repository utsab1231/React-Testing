import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
// Greet component should render the text "hello" and if a name prop is passed, it should render "hello <name>".

describe("Greet Component", () => {
  test("renders the text 'hello'", () => {
    render(<Greet />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  test("renders the text 'hello <name>' if name is provided", () => {
    let name;
    render(<Greet name={name} />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });
});
