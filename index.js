async function fetchAverage() {
  const id = document.getElementById('numberId').value.trim();
  const correctIds = ['p', 'f', 'e', 'r'];

  if (!correctIds.includes(id)) {
    alert("Kingly enter a valid number ID: p, f, e, or r");
    return;
  }

  try {
    const response = await fetch(`http://localhost:9876/numbers/${id}`);
    const data = await response.json();

    document.getElementById('output').hidden = false;
    document.getElementById('responseContent').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    alert("Error fetching data. Make sure the server is running.");
    console.error(error);
  }
}
