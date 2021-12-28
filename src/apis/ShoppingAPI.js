import axios from "axios";

const api = axios.create({
  baseURL: "https://dc243b7a-2384-42f1-9fcd-a8399e97303b.mock.pstmn.io/",
});

export function getThemes(success, fail) {
  api.get("themes/popular").then(success).catch(fail);
}

export function getThemeProducts(themeId, success, fail) {
  api.get(`themes/${themeId}/products`).then(success).catch(fail);
}
