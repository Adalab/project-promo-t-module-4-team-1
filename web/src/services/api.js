const sendToApi = (data) => {
  return fetch('https://programadoras-junior.onrender.com/api/projectCard', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getAllCardsApi = async () => {
  const fetchApi = await fetch ('https://programadoras-junior.onrender.com/api/allprojects');
  const dataJson = await fetchApi.json();
  return dataJson;
}

const objToExport = { sendToApi:sendToApi, getAllCardsApi:getAllCardsApi};

export default objToExport;