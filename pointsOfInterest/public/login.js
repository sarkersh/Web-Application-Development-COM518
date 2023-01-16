// // login logic
let username, password, submit, loginurl, currentUser;

loginForm = document.getElementById("login-form");
loginurl = `http://localhost:9000/api/v1/poi/login`;

const loginUser = async (currentUser) => {
  console.log(currentUser);
  try {
    const response = await fetch(loginurl, {
      method: "POST",
      body: JSON.stringify(currentUser),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data.user) {
      window.location.assign(`/`);
    }
  } catch (err) {
    console.log(err);
  }
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  currentUser = {
    username,
    password,
  };
  console.log(username, password);
  loginUser(currentUser);
});
