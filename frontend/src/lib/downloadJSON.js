
const downloadJSON = (data, name = 'Файл') => {
  const jsonString = JSON.stringify(data);
  const blob = new Blob([jsonString], { type: "application/json" })
  const url = window.URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default downloadJSON;