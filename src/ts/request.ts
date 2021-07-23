async function request<T>(method: string, url: string, data: string) {
  // @ts-ignore
  // @ts-ignore
  // let res = await fetch(url, {
  //   method: method,
  //   body: data,
  // });
  // let json: T = await res.json();
  // return json;
  let option: RequestInit = {
    method,
  };
  if (data) {
    option.headers = {
      "Content-Type": "application/json; charset=utf-8",
    };
    option.body = data;
  }
  let res = await fetch(url, option);
  let json: T = await res.json();
  return json;
}

// get
export async function get<T>(url: string) {
  let res = await fetch(url, {
    method: "get",
  });
  let json: T = await res.json();
  return json;
}

//post
export function post<T>(url: string, data: string) {
  return request<T>("post", url, data);
}

//put
export function put<T>(url: string, data: string) {
  return request<T>("put", url, data);
}

//delete
export async function del<T>(url: string) {
  let res = await fetch(url, {
    method: "delete",
  });
  let json: T = await res.json();
  return json;
}
