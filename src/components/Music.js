import React, { useState } from "react";
import MusicDataService from "../services/MusicService";

const Music = (props) => {
  const initialMusicState = {
    key: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentMusic, setCurrentMusic] = useState(initialMusicState);
  const [message, setMessage] = useState("");

  const { music } = props;
  if (currentMusic.key !== music.key) {
    setCurrentMusic(music);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentMusic({ ...currentMusic, [name]: value });
  };

  const updatePublished = (status) => {
    MusicDataService.update(currentMusic.key, { published: status })
      .then(() => {
        setCurrentMusic({ ...currentMusic, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateMusic = () => {
    const data = {
      title: currentMusic.title,
      description: currentMusic.description,
    };

    MusicDataService.update(currentMusic.key, data)
      .then(() => {
        setMessage("The Music was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteMusic = () => {
    MusicDataService.remove(currentMusic.key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentMusic ? (
        <div className="edit-form">
          <h4>Music</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentMusic.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentMusic.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentMusic.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentMusic.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteMusic}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMusic}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Music...</p>
        </div>
      )}
    </div>
  );
};

export default Music;