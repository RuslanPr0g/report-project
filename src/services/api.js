const baseApi =
  "https://cors-anywhere.herokuapp.com/http://134.122.63.207:4420";

export const api = {
  getOwnerInfo: (gosOrVinNumberValue) =>
    fetch(`${baseApi}/prescoring/${gosOrVinNumberValue}`).then((response) =>
      response.json()
    ),
  startChecking: (data) =>
    fetch(`${baseApi}/test_order`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then((response) => response.json()),
};
