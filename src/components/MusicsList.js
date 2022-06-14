import React, { useState /* useEffect */ } from "react";
import { useList } from "react-firebase-hooks/database";
import MusicDataService from "../services/MusicService";
import Music from "./Music";

const MusicList = () => {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  /* use react-firebase-hooks */
  const [musics, loading, error] = useList(MusicDataService.getAll());

  console.log(error);

  const refreshList = () => {
    setCurrentMusic(null);
    setCurrentIndex(-1);
  };

  const setActiveMusic = (music, index) => {
    const { title, description, published } = music.val();

    setCurrentMusic({
      key: music.key,
      title,
      description,
      published,
    });

    setCurrentIndex(index);
  };

  const removeAllMusics = () => {
    MusicDataService.removeAll()
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Musics List</h4>

        {error && <strong>Error: {error}</strong>}
        {loading && <strong>Loading...</strong>}
        <ul className="list-group">
          {!loading &&
            musics &&
            musics.map((music, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveMusic(music, index)}
                key={index}
              >
                {music.val().title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMusics}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentMusic ? (
          <Music music={currentMusic} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Please click on an music item</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicList;
