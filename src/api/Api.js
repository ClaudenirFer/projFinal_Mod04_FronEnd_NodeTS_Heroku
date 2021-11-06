import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
  // baseUrl: "http://localhost:3001",
  baseUrl: "https://backend-xbox-live.herokuapp.com",

  // Endpoint - Login
  loginUrl: () => Api.baseUrl + "/login",

  // Endpoint - Games
  createGameUrl: () => Api.baseUrl + "/games",

  readAllGameUrl: () => Api.baseUrl + "/games",

  readByIdUrl: (id) => Api.baseUrl + "/games/" + id,

  updateUrl: (id) => Api.baseUrl + "/games/" + id,

  deleteUrl: (id) => Api.baseUrl + "/games/" + id,

  // Endpoint - Genre
  createGenreUrl: () => Api.baseUrl + "/genres",

  readAllGenreUrl: () => Api.baseUrl + "/genres",

  readByIdGenreUrl: (id) => Api.baseUrl + "/genres/" + id,

  updateGenreUrl: (id) => Api.baseUrl + "/genres/" + id,

  deleteGenreUrl: (id) => Api.baseUrl + "/genres/" + id,

  // Endpoint - User
  createUserUrl: () => Api.baseUrl + "/user",

  readAllUserUrl: () => Api.baseUrl + "/user",

  readByIdUserUrl: (id) => Api.baseUrl + "/user/" + id,

  updateUserUrl: (id) => Api.baseUrl + "/user/" + id,

  deleteUserUrl: (id) => Api.baseUrl + "/user/" + id,

  // Profile
  readByIdProfileUrl: (id) => Api.baseUrl + "/profiles/" + id,

  updateProfileUrl: (id) => Api.baseUrl + "/profiles/" + id,

  deleteProfileUrl: (id) => Api.baseUrl + "/profiles/" + id,

  // Auth Header

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
