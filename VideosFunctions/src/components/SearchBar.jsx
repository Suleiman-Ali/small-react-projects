import React, { useContext, useEffect, useState } from "react";
import { videoContext } from "../context/VideoContext";
import youtube from "../api/youtube";

export default function SearchBar() {
  const [term, setTerm] = useState("React");
  const { setVideos, setSelectedVideo } = useContext(videoContext);

  const changeHandler = (e) => setTerm(e.target.value);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {}

    const termValue = term;

    setTerm("");

    const { data } = await youtube.get("/search", {
      params: {
        q: termValue,
      },
    });
    const videos = data.items;

    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={changeHandler} />
        </div>
      </form>
    </div>
  );
}
