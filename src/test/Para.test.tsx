import { render } from "@testing-library/react";
import { Para } from "./Para";

describe("Para", () => {
  it("should render", () => {
    const screen = render(<Para data-testid="test"></Para>);
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
