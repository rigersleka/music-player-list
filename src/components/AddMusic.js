import React, { useState } from 'react';

const AddMusic = () => {
  const initialMusicState = {
    title: '',
    description: '',
    published: false,
  };

  const [music, setMusic] = useState(initialMusicState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
      const {name, value} = event.target;

    console.log('You clicked');
    console.log(name);
    console.log(value);
    setMusic({...music, [name]: value});
  };

  const saveMusic = () => {
    console.log('you save a music');
  };

  const newMusic = () => {
    setMusic(initialMusicState);
    setSubmitted(false);
  };

  console.log(music);
  return (
    <div className='submit-form'>
      {submitted ? (
        <div>
          <h4>You submitted succesfully!</h4>
          <button className='btn btn-success' onClick={newMusic}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              id="title"
              type="text"
              className="form-control"       
          /*     value={music.title} */
              onChange={handleInputChange}
              name="title"
              required />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input
              id='description'
              type='text'
              className='form-control'
            /*   value={music.description} */
              onChange={handleInputChange}
              required
              name='description'
            />
          </div>
          
          <button className='btn btn-success' onClick={saveMusic}>
            Add Music
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMusic;