import { baseApiPosts, baseApiUsers } from "const/api";

export function fetchPosts() {
  return fetch(baseApiPosts);
}

export function fetchUsers() {
  return fetch(baseApiUsers);
}
