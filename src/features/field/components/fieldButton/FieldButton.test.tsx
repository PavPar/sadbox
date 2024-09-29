import { render } from "@testing-library/react";
import { FieldButton } from "./FieldButton";

describe("FieldButton", () => {
  it("should render", () => {
    const screen = render(<FieldButton data-testid="test" />);
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
