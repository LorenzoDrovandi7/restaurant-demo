export async function sendReservation(data) {
  const res = await fetch("http://localhost:3000/reserve", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
