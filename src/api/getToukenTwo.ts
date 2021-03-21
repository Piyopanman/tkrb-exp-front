import queryString from "querystring";

export const getToukenTwo = async (parsed: queryString.ParsedUrlQuery) => {
  const res = await fetch(`https://tkrb-exp-api.herokuapp.com/toukenTwo`, {
    // const res = await fetch(`http://localhost:5000/toukenTwo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsed),
  });
  const json = await res.json();
  return json;
};
