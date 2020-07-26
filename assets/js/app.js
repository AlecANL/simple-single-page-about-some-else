function loadImage(id, targetId) {
  let el = document.getElementById(id),
    targetEl = targetId ? document.getElementById(targetId) : el,
    imageLoad;
  if (el.dataset.image) {
    imageLoad = el.dataset.image;
  } else if (typeof el.currentSrc === 'undefined') {
    imageLoad = el.src;
  } else {
    imageLoad = el.currentSrc;
  }

  if (imageLoad) {
    let img = new Image();
    img.src = imageLoad;
    img.onload = function () {
      targetEl.classList.add('is-loaded');
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});
