import { fireEvent, render, screen } from "../../../testUtil";
import BookList from "../BookList";
import { expect } from "vitest";
import { CartProvider } from "../../../contexts/CartContext";

test("시나리오1. 책 고르기 화면 접속 여부를 확인한다.", () => {
  render(<BookList />);
  const title = screen.getByRole("heading", {
    name: "책 고르기",
  });
  expect(title).toBeInTheDocument();
});

test("시나리오2. 책 목록의 생성 여부를 확인한다.", async () => {
  render(<BookList />);
  const imageList = await screen.findAllByRole("img", { name: /image$/ });
  expect(imageList.length).toBeGreaterThanOrEqual(3);
});

test("시나리오3. 장바구니 담기 버튼의 기능을 확인한다.", async () => {
  render(<BookList />);
  const buttonList = await screen.findAllByRole("button", {
    name: "장바구니 담기",
  });
  expect(buttonList[0]).toBeEnabled();
  fireEvent.click(buttonList[0]);
  expect(buttonList[0]).toBeDisabled();
});

test("시나리오4. 장바구니 이동 버튼의 기능을 확인한다.", async () => {
  render(<BookList />);

  const moveToCartButton = screen.getByRole("button", {
    name: "장바구니 이동",
  });
  expect(moveToCartButton).toBeDisabled();

  const addToCartButtons = await screen.findAllByRole("button", {
    name: "장바구니 담기",
  });
  fireEvent.click(addToCartButtons[0]);

  expect(moveToCartButton).toBeEnabled();
});
