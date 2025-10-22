import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Prime Photo' inside a level 1 heading", () => {
      const expectedTitle = /prime photo/i;

      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });
  test("Then it should show Prime Photo logo's image", () => {
    const expectedTestId = /app-logo/i;

    render(<Header />);

    const appLogo = screen.getByTestId(expectedTestId);

    expect(appLogo).toBeInTheDocument();
  });
});
