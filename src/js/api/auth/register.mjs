import { HOST_API_URL } from "../constants.mjs";
import { REGISTER_API_URL } from "../constants.mjs";

export async function register(profile) {
  const registerURL = HOST_API_URL + REGISTER_API_URL;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body,
  });

  const result = await response.json();
  if (response.ok) {
    const successMessage = document.createElement("div");
    successMessage.classList.add("alert", "alert-success");
    successMessage.setAttribute("role", "alert");
    successMessage.textContent = "Profil created! you can now log in";

    const messageContainer = document.querySelector("#registerForm");
    messageContainer.appendChild(successMessage);
  }

  return result;
}
