export default function Hero() {
  const videoPlaceholder = document.getElementById("hero-video-placeholder");
  const videoIframe = document.getElementById("hero-video");

  function onVideoPlaceholderClick() {
    videoPlaceholder.classList.add("hidden");

    videoIframe.src = videoIframe.getAttribute("data-src");
    videoIframe.classList.remove("hidden");
  }

  videoPlaceholder.addEventListener("click", onVideoPlaceholderClick);
}

