<template>
  <div class="col-lg-12 ">

    <video-player class="  mt-4  offset-lg-5 "  :options="videoOptions"></video-player>
  </div>
</template>

<script>
import VideoPlayer from "../components/video";

export default {
	name: "VideoExample",
	components: {
		VideoPlayer
	},
	data() {
		return {
videoOptions: {
	autoplay: false,
	controls:true,
	
     muted:false,
                     //Whether fluid adaptive container width and height
       
                     //Set the display width of the video player (in pixels)
          width: "280px",
                     //Set the display height of the video player (in pixels)
          height: "400px",
	sources: [
	{
		src:
	"http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
	type: "application/x-mpegURL"
	},
  {
		src:
	"https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4",
	type: "video/mp4"
	}
	],
  
	}
	};
	},
  methods:{
  
  }
};

</script>

