import elements from './elements';

const listeners = () => {
  const searchEvent = (renderModule) => {
    elements.searchBtn.addEventListener('click', () => {
      renderModule(elements).renderLoading();
      renderModule(elements).renderResult();
    });
  };
  const changeTempEvent = (converterModule) => {
    elements.tempBtn.addEventListener('click', () => {
      converterModule(elements).renderLoading();
      converterModule(elements).renderResult();
    });
  };
  return {
    searchEvent,
    changeTempEvent
  }
};

export default listeners;