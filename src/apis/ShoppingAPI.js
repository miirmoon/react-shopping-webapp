import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_PSTM_API,
});

// 테마 목록 불러오기
export function getThemes(success, fail) {
  api.get("themes/popular").then(success).catch(fail);
}

// 테마Id에 해당하는 상품 목록 불러오기
export function getThemeProducts(themeId, success, fail) {
  api.get(`themes/${themeId}/products`).then(success).catch(fail);
}
