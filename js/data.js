const BASE_URL = "https://opentdb.com/";

const loadData = async (route, method = 'GET', body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { method, body });
  return response.ok
    ? await response.json()
    : Promise.reject('Не удалось загрузить данные. Попробуйте еще раз.');
};

const getData = async () => await loadData('/api.php?amount=10');

export { getData };