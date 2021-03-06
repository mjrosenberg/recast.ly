import VideoListEntry from './VideoListEntry.js';
//console.log(exampleVideoData);
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video={video} changeVideo={props.changeVideo} key={video.id.videoId}/>)}
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


{ /* <VideoListEntry title={video.snippet.title} thumbnail={video.snippet.thumbnails.url} description={video.snippet.description} key={video.id.videoId}/>; */ }