import {NextPage} from "next";
import {useEffect} from "react";

const VideoPage: NextPage = () => {
  useEffect(() => {
    // @ts-ignore
    const video:HTMLVideoElement | null = document.getElementById("video");
    if (!video) return;
    video.play()
  },[])
  return(
    <div>
      <video id="video" muted src="/movies/atrae_opening.mp4" loop />
    </div>
  )
}

export default VideoPage