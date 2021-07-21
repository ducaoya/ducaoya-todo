async function request<T>(method: string, url: string, data: string) {
  // @ts-ignore
  // @ts-ignore
  let res = await fetch(url, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
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
