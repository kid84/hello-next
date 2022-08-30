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
      <h1>window.addEventListener</h1>
      <video id="video" muted src="/movies/atrae_opening.mp4" loop />
    </div>
  )
}

export default VideoPage