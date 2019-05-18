const wait = ms => new Promise(resolve => setTimeout(() => resolve(true), ms));

function showRoot() {
  const rootEl = document.getElementById('root');
  rootEl.classList.add('showRoot');
}
const waitImagesLoading = () => {
  const imgs = document.querySelector('img');
  return new Promise(resolve => {
    if (imgs.complete) {
      showRoot();
      resolve(10);
    } else {
      imgs.addEventListener('load', () => {
        showRoot();
        resolve(10);
      });
      imgs.addEventListener('error', e => {
        console.error(e);
      });
    }
  });
};
export { wait, waitImagesLoading };
