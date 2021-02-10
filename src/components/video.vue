<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
import videojsPlaylist from 'videojs-playlist'
videojs.registerPlugin('videojs-playlist', videojsPlaylist);

import playlistMaker from "videojs-playlist/src/playlist-maker";
 
const plugin = function(list, item) {
  playlistMaker(this, list, item);
};
 
videojs.registerPlugin("playlist", plugin);

export default {
    name: "VideoPlayer",
    props: {
        options: {    
         

            type: Object,
            default() {
                return {
                

                };
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this)
          
        })

        this.$refs.videoPlayer.player.controlBar.fullscreenToggle.dispose();
        
this.$refs.videoPlayer.player.controlBar. pictureInPictureToggle.dispose();
this.$refs.videoPlayer.player.controlBar.volumeMenuButton.dispose();
       
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>