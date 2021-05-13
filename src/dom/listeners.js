import elements from './elements';

const listeners = (renderModule) => {
  elements.searchBtn.addEventListener('click', () => {
    renderModule(elements).renderLoading();
    renderModule(elements).renderResult();
  });
};

export default listeners;