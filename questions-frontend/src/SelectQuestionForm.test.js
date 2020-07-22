import React from "react";
import { render } from "@testing-library/react";
import SelectQuestionForm from "./SelectQuestionForm";

it("renders without crashing", () => {
  render(<SelectQuestionForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<SelectQuestionForm />);
  expect(asFragment()).toMatchSnapshot();
});