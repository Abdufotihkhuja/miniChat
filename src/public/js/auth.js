let userId = window.localStorage.getItem("userId");
let username = window.localStorage.getItem("username");
if (userId && username) {
  window.location = "/";
}
async function request(path, method, body) {
  let response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

form.onsubmit = async (e) => {
  e.preventDefault();
  let res = await request("/auth", "POST", {
    username: usernameInput.value,
    password: passwordInput.value,
  });
  if (res) {
    window.localStorage.setItem("userId", res.userId);
    window.localStorage.setItem("username", res.username);
    window.location = "/";
  }
};
