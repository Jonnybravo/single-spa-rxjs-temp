import { endpoints } from "./constants";
import { request } from "./request";

export async function getListContent() {
  return request({
    type: "GET",
  });
}
