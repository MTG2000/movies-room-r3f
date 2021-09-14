import React, { useEffect } from "react";
import UiPanel from "./UiPanel/UiPanel";
import { PLACES, useStore } from "../../utils/Store";

export default function UIs() {
  const move = useStore((s) => s.move);

  useEffect(() => {
    setTimeout(() => move(PLACES.SCENE), 1000);
  }, [move]);

  return (
    <div>
      <UiPanel place={PLACES.SCENE} id="scene">
        <button
          className="call-to-action-btn"
          onClick={() => move(PLACES.MOVIES)}
        >
          Browse Movies
        </button>{" "}
        <button className="credits-btn" onClick={() => move(PLACES.CREDITS)}>
          Credits
        </button>
      </UiPanel>
      <UiPanel place={PLACES.MOVIES} id="movies">
        <button className="home-btn" onClick={() => move(PLACES.SCENE)}>
          <span className="material-icons">home</span>
        </button>
        <button className="carouesl-btns prev">
          <span className="material-icons">arrow_back</span>
        </button>
        <button className="carouesl-btns nxt">
          <span className="material-icons">arrow_forward</span>
        </button>
        <h2 className="title"></h2>
        <button
          className="reserve-btn call-to-action-btn"
          onClick={() => move(PLACES.PHONE)}
        >
          Reserve Ticket <span className="material-icons">sticky_note_2</span>
        </button>
        <button
          className="watch-trailer"
          onClick={() => move(PLACES.PROJECTOR)}
        >
          Watch Trailer <span className="material-icons">video_library</span>
        </button>
      </UiPanel>
      <UiPanel place={PLACES.CREDITS} id="credits">
        <button className="home-btn" onClick={() => move(PLACES.SCENE)}>
          <span className="material-icons">home</span>
        </button>
        <a
          href="https://mtgdev.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button call-to-action-btn"
        >
          Visit Website
        </a>
      </UiPanel>
      <UiPanel place={PLACES.PROJECTOR} id="projector">
        <button className="back" onClick={() => move(PLACES.MOVIES)}>
          Back
        </button>
        <button
          className="reserve-btn call-to-action-btn"
          onClick={() => move(PLACES.PHONE)}
        >
          Reserve Your Ticket{" "}
          <span className="material-icons">sticky_note_2</span>
        </button>
        <iframe
          title="youtube"
          frameBorder="0"
          width="480"
          height="268"
        ></iframe>
      </UiPanel>
      <UiPanel place={PLACES.PHONE} id="reserve">
        <button className="back" onClick={() => move(PLACES.MOVIES)}>
          Back
        </button>
        <div className="email-form">
          <input
            type="text"
            name="Email"
            id="email-input"
            placeholder="Your Email"
          />
          <div>
            <button className="submit" onClick={() => move(PLACES.MOVIES)}>
              Submit
            </button>
          </div>
        </div>
      </UiPanel>
    </div>
  );
}
