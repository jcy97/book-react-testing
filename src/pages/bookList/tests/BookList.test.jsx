import { render, screen } from "../../../testUtil";
import BookList from "../BookList";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("시나리오1. 책 고르기 화면이 정상적으로 생성 되었는지 확인한다.", async () => {
  render(<BookList />);
  // 타이틀 존재 여부 확인
  const title = screen.getByRole("heading", {
    name: "책 고르기",
  });
  expect(title).toBeInTheDocument();

  // 책 목록의 책 이미지가 3개 이상인지 확인
  const imageList = await screen.findAllByRole("img", { name: /image$/ });
  expect(imageList.length).toBeGreaterThanOrEqual(3);
});

test("시나리오2. 장바구니 담기 과정에서 관련 버튼들의 동작을 확인한다.", async () => {
  // BookList 시뮬레이션
  render(<BookList />);
  // 화면이 처음 열렸을 때 장바구니 이동 버튼이 비활성화 상태인지 검사
  const moveToCartButton = screen.getByRole("button", {
    name: "장바구니 이동",
  });
  expect(moveToCartButton).toBeDisabled();

  // 장바구니 담기 버튼을 눌렀을 때 버튼이 비활성화되는지 검사
  const buttonList = await screen.findAllByRole("button", {
    name: "장바구니 담기",
  });
  expect(buttonList[0]).toBeEnabled();

  // userEvent로 클릭 이벤트 발생
  await userEvent.click(buttonList[0]);
  expect(buttonList[0]).toBeDisabled();

  // 장바구니에 물건이 담겨있을 때 장바구니 이동 버튼이 활성화 상태인지 검사
  expect(moveToCartButton).toBeEnabled();
});
