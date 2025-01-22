import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("시나리오1. 메인화면 타이틀과 서브 타이틀을 확인한다.", () => {
  render(<App />);
  const title = screen.getByText("책나무 서점에 오신 것을 환영합니다.");
  expect(title).toBeInTheDocument();

  const subTitle = screen.getByText(/^환영합니다/);
  expect(subTitle).toBeInTheDocument();
});
