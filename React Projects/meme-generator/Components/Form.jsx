import React from "react";

function Form() {
  const [Meme, change_meme] = React.useState();
  const [text, changeText] = React.useState({ top_text: "", bottom_text: "" });
  const [meme, change] = React.useState({
    topText: "",
    bottomText: "",
    image: ""
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => change_meme(data));
  }, []);

  function changed(event) {
    var { name, value } = event.target;
    change((previous) => {
      return {
        ...previous,
        [name]: value
      };
    });
  }

  function clicked() {
    const random = Math.floor(Math.random() * Meme.data.memes.length);
    const temp = Meme.data.memes[random].url;
    changeText({
      top_text: meme.topText,
      bottom_text: meme.bottomText
    });
    change((previous) => {
      return {
        ...previous,
        image: temp
      };
    });
  }

  return (
    <div className="main">
      <div className="form" action="">
        <input
          onChange={changed}
          name="topText"
          placeholder="Top Text"
          className="input-1"
          type="text"
          value={meme.topText}
        />
        <input
          onChange={changed}
          name="bottomText"
          placeholder="Bottom Text"
          className="input-2"
          type="text"
          value={meme.bottomText}
        />
        <button onClick={clicked}>Get a New Meme Image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.image} className="meme-image" alt="meme" />
        <h2 className="meme--text top">{text.top_text}</h2>
        <h2 className="meme--text bottom">{text.bottom_text}</h2>
      </div>
    </div>
  );
}

export default Form;
