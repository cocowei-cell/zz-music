import request from "@/utils/request"

export const getBanners = () => {
  return request({
    method: "get",
    url: "/banner"
  })
}