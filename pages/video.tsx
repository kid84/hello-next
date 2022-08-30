import {NextPage} from "next";
import {useEffect} from "react";

const VideoPage: NextPage = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      // @ts-ignore
      const video:HTMLVideoElement | null = document.getElementById("video");
      if (!video) return;
      video.play()
    });
  },[])

  return(
    <div>
      <h1>playsinline</h1>
      {/*// @ts-ignore*/}
      <video id="video" playsinline autoplay muted src="/movies/atrae_opening.mp4" loop />
    </div>
  )
}

export default VideoPage