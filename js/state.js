import { getData } from "./data";
import { showGettingError, alertGettingDataProcess } from "./alerts";
import { getQuiz } from "./quiz";
let data = [];

const bootstrap = async () => {
    alertGettingDataProcess();
  try {
    const result = await getData();
    data = result.results;
  } catch (error) {
    showGettingError();
  } finally {
    getQuiz(data);
  }
};

export { data, bootstrap };
