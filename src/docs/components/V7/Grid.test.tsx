import React from "react";
import { render } from "@testing-library/react";
import { Grid } from "./Grid";

test("Containing content", () => {
    const gridComponent = render(<Grid />);
    const element = gridComponent.getByText(/Header/);
    expect(element).toBeInTheDocument();
});

test("Toggling classname when click on button", () => {
    const gridComponent = render(<Grid />);
    const gridElement = gridComponent.getByTestId("grid");
    const buttonElement = gridComponent.getByTestId("toggleButton");

    expect(gridElement.className).not.toContain("sidebarIn");

    buttonElement.click();

    expect(gridElement.className).toContain("sidebarIn");
});