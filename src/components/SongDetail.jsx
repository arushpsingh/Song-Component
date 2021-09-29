import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) {
    return <div>Please select a Song</div>;
  }
  return (
    <div>
      <h3>Details</h3>
      <p>
        Title: {props.song.title}
        <br />
        Duration: {props.song.duration}
      </p>
    </div>
  );
};

const mapStateProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateProps)(SongDetail);
