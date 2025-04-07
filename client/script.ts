document.addEventListener('DOMContentLoaded', async () => {
  const http = await fetch('/api');
  const data = await http.text();
  alert(data);
});
