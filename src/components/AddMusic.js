import React, { useState } from "react";
import MusicDataService from "../services/MusicService";

const AddMusic = () => {
  const initialMusicState = {
    title: "",
    description: "",
    published: false
  };
  const [music, setMusic] = useState(initialMusicState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMusic({ ...music, [name]: value });
  };

  const saveMusic = () => {
    var data = {
      title: music.title,
      description: music.description,
      published: false
    };

    MusicDataService.create(data)
      .then(() => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMusic = () => {
    setMusic(initialMusicState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMusic}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={music.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={music.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveMusic} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMusic;