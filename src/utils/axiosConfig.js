export const baseurl = "http://localhost:5000/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

console.log("customer", getTokenFromLocalStorage.token);
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
