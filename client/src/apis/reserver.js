const API_RESERVER = "/api/reserver";

export async function createReserve(newReserve) {
  const response = await fetch(API_RESERVER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReserve),
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Error api createReserve");
    }
  }
}