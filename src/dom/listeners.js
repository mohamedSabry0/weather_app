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
    elements.toggleBtn.addEventListener('click', () => {
      render.renderTemp();
      render.toggleAnimation();
    });
  };
  searchEvent();
  changeTempEvent();
};

export default listeners;