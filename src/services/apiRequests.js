import axios from "axios";

export const login = async (userLoginData) => {
  const BASE_URL = "https://11135.fullstack.clarusway.com";
try {
    const data = await axios.post(`${BASE_URL}/auth/login`, userLoginData)
    console.log(data)
} catch (error) {
    console.log(error)
}
};
