import {NextPage} from "next";

const VideoPage: NextPage = () => {
  return(
    <div>
      <video muted src="/movies/atrae_opening.mp4" autoPlay loop />
    </div>
  )
}

export default VideoPage