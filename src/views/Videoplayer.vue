<template>
	<div>
		<div class="container">
    <div class="video-container" id="video-container">
      <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
          <use class="hidden" href="#play-icon"></use>
          <use href="#pause"></use>
        </svg>
       
      </div>

      <video controls class="video" muted autoplay id="video" preload="metadata" poster="headphone.jpg">
        <source src="../assets/tiktok.mp4" type="video/mp4"> 
      </video>

      <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
          <progress id="progress-bar" value="0" min="0"></progress>
          <input class="seek" id="seek" value="0" min="0" type="range" step="1">
          <div class="seek-tooltip" id="seek-tooltip">00:00</div>
         
        </div>

        <div class="play-sound">
          <button style="color:white;" id="unmute">play sound</button>
        </div>
     
        <div class="bottom-controls">
          <div class="left-controls">
            <button data-title="Play (k)" id="play">
              <svg class="playback-icons">
                <use href="#play-icon"></use>
                <use class="hidden" href="#pause"></use>
              </svg>
            </button>

            <div class="volume-controls">
              <button data-title="Mute (m)" class="volume-button" id="volume-button">
                <svg>
                  <use class="hidden" href="#volume-mute"></use>
                  <use class="hidden" href="#volume-low"></use>
                  <use href="#volume-high"></use>
                </svg>
              </button>

              <input class="volume" id="volume" value="1"
              data-mute="0.5" type="range" max="1" min="0" step="0.01">
            </div>

            <div class="time">
              <time id="time-elapsed">00:00</time>
              <span> / </span>
              <time id="duration">00:00</time>
            </div>
          </div>

          <div class="right-controls">
            <button data-title="PIP (p)" class="pip-button" id="pip-button">
              <svg>
                <use href="#pip"></use>
              </svg>
            </button>
            <button data-title="Full screen (f)" class="fullscreen-button" id="fullscreen-button">
              <svg>
                <use href="#fullscreen"></use>
                <use href="#fullscreen-exit" class="hidden"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svg style="display: none">
    <defs>
      <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
      </symbol>

      <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
      </symbol>

      <symbol id="volume-high" viewBox="0 0 24 24">
      <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
      </symbol>

      <symbol id="volume-low" viewBox="0 0 24 24">
      <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
      </symbol>

      <symbol id="volume-mute" viewBox="0 0 24 24">
      <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
      </symbol>

      <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
      </symbol>

      <symbol id="fullscreen-exit" viewBox="0 0 24 24">
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
      </symbol>

      <symbol id="pip" viewBox="0 0 24 24">
      <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
      </symbol>
    </defs>
  </svg>

	</div>
</template>



<style scoped>
	:root {
  --dark-red: #FE0900;
}

html {
  box-sizing: border-box;
  font-family: "YouTube Noto",Roboto,Arial,Helvetica,sans-serif;
  height: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.video-container {
 
 
 
  border-radius: 4px;
 display: flex;
 flex-direction: column;
 justify-content: center;
  position: relative;
  

}



video {
  min-height: 450px;
  max-width: 280px;
  object-fit:fill;
  border-radius: 4px;
 
}

.video-controls {
  right: 0;
  left: 0;
  padding: 10px;
  position: absolute;
  bottom: 0;
  transition: all 0.2s ease;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
}

.video-controls.hide {
  opacity: 0;
  pointer-events: none;
}

.video-progress {
  position: relative;
  height: 8.4px;
  margin-bottom: 10px;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  width: 100%;
  height: 5px;
  pointer-events: none;
  position: absolute;
  top: 0;
}

progress::-webkit-progress-bar {
  background-color: white;
  border-radius: 2px;
}

progress::-webkit-progress-value {
  background: var(--dark-red);
  border-radius: 2px;
}

progress::-moz-progress-bar {
  border: 1px solid var(--dark-red);
  background: var(--dark-red);
}

.seek {
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
  margin: 0;
}

.seek:hover+.seek-tooltip {
  display: block;
}

.seek-tooltip {
  display: none;
  position: absolute;
  top: -50px;
  margin-left: -20px;
  font-size: 12px;
  padding: 3px;
  content: attr(data-title);
  font-weight: bold;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}

.bottom-controls {
  display: none;
  justify-content: space-between;
  align-items: center;
 
}

.left-controls {
  display: flex;
  align-items: center;
  color: #fff;
}

.volume-controls {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.volume-controls input {
  width: 100px;
  opacity: 1;
  transition: all 0.4s ease;
}

.volume-controls:hover input, .volume-controls input:focus {
  width: 100px;
  opacity: 1;
}

button {
  cursor: pointer;
  position: relative;
  margin-right: 7px;
  font-size: 12px;
  padding: 3px;
  border: none;
  outline: none;
  background-color: transparent;
}

button * {
  pointer-events: none;
}

button::before {
  content: attr(data-title);
  position: absolute;
  display: none;
  right: 0;
  top: -50px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--dark-red);
  font-weight: bold;
  padding: 4px 6px;
  word-break: keep-all;
  white-space: pre;
}

button:hover::before {
  display: inline-block;
}

.fullscreen-button {
  margin-right: 0;
}

.pip-button svg {
  width: 26px;
  height: 26px;

}

.playback-animation {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -40px;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: rgba(0, 0, 0, 0.6);
  
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

input[type=range] {
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 8.4px;
  background: transparent;
  cursor: pointer;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  cursor: pointer;
  border-radius: 1.3px;
  -webkit-appearance: none;
  transition: all 0.4s ease;
}

input[type=range]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background: var(--dark-red);
  cursor: pointer;
  -webkit-appearance: none;
  margin-left: -1px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: transparent;
}

input[type=range].volume {
  height: 5px;
  background-color: #fff;
}

input[type=range].volume::-webkit-slider-runnable-track {
  background-color: transparent;
}

input[type=range].volume::-webkit-slider-thumb {
  margin-left: 0;
  height: 14px;
  width: 14px;
  background: #fff;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  border: 1px solid transparent;
  background: transparent;
  border-radius: 1.3px;
}

input[type=range]::-moz-range-thumb {
  height: 14px;
  width: 14px;
  border-radius: 50px;
  border: 1px solid var(--dark-red);
  background: var(--dark-red);
  cursor: pointer;
  margin-top: 5px;
}

input[type=range]:focus::-moz-range-track {
  outline: none;
}

input[type=range].volume::-moz-range-thumb {
  border: 1px solid #fff;
  background: #fff;
}

.hidden {
  display: none;
}

svg {
  width: 28px;
  height: 28px;
  fill: red;
  stroke: var(--dark-red);
  cursor: pointer;
}

</style>