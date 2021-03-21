export const getToukenList = async () => {
  // const res = await fetch("http://localhost:5000/toukenList");
  const res = await fetch("https://tkrb-exp-api.herokuapp.com/toukenList");

  return await toJson(res);
};

const toJson = async (res: Response) => {
  const json = await res.json();
  if (res.ok) {
    return json.list;
  } else {
    throw new Error(json.message);
  }
};
