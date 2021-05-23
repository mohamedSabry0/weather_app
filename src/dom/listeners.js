import elements from './elements';

const listeners = (renderModule) => {
  const render = renderModule(elements);
  const searchEvent = () => {
    elements.searchBtn.addEventListener('click', () => {
      render.renderLoading();
      render.renderResult();
    });
  };
  const changeTempEvent = () => {
    elements.temperature.addEventListener('click', () => {
      render.renderTemp();
    });
  };
  searchEvent();
  changeTempEvent();
};

export default listeners;