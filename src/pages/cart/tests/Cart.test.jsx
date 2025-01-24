import { render, screen } from "../../../testUtil";
import Cart from "../Cart";
import { expect } from "vitest";

test("시나리오1. 타이틀이 생성되었는지 확인", () => {
  render(<Cart />);

  const title = screen.getByRole("heading", { name: "장바구니" });
});

test("시나리오2. 책 목록이 생성되었는지 확인", async () => {
  render(<Cart />);

  const books = await screen.findAllByRole("img", { name: /image$/ });
  expect(books.length).toBeGreaterThanOrEqual(1);
});

test("시나리오3. 총 합계가 계산되었는지 확인", () => {
  render(<Cart />);
  const sumPrice = screen.getByText(/원$/); // "원"으로 끝나는 텍스트를 가져옴
  expect(sumPrice).toBeInTheDocument(); // 합계가 화면에 존재하는지 확인

  // "0원"이 아닌지 확인
  expect(sumPrice).not.toHaveTextContent("총 가격: 0원");
});

// test("시나리오1. 타이틀, 책 목록, 총 합계가 생성되었는지 확인", () => {
//   render(<Cart />);

//   const title = screen.getByRole("heading", { name: "장바구니" });

//   const books = screen.getAllByRole("span", {
//     name: /안네의 일기|소년이 온다/i,
//   });
//   expect(books.length).toBe(2);

//   const sumPrice = screen.getByText("21,000원");
// });
