import { http, HttpResponse } from "msw";
export const handlers = [
  // 책 목록 가져오기
  http.get("http://localhost:8080/books", ({ params }) => {
    return HttpResponse.json([
      {
        id: 1,
        name: "안네의 일기",
        author: "안네 프랑크",
        price: 8000,
        image: "https://fakeimg.pl/200x300/cc6600",
      },
      {
        id: 2,
        name: "소년이 온다",
        author: "한강",
        price: 13500,
        image: "https://fakeimg.pl/200x300/cc6600",
      },
      {
        id: 3,
        name: "모순",
        author: "양귀자",
        price: 10000,
        image: "https://fakeimg.pl/200x300/cc6600",
      },
      {
        id: 4,
        name: "마음의 기술",
        author: "안-엘레 클레르 외",
        price: 9000,
        image: "https://fakeimg.pl/200x300/cc6600",
      },
    ]);
  }),
];
