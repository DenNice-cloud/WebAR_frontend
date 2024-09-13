import "./ColorsBlock.scss";

const ColorsBlock = ({ setColor, mainColor, mainColors, currentProperty }) => {
  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="block">
      <div className="block--title">
        <p>{currentProperty} COLOR</p>
      </div>

      <div className="body-buttons">
        {Object.keys(mainColors).map((body) => (
          <div
            className="body-buttons--change"
            key={body}
            onClick={() => handleColorChange(mainColors[body])}
          >
            <button
              className={`body-buttons--main__button ${
                mainColor === mainColors[body] ? "active" : ""
              }`}
            >
              <div
                className={`body-buttons--main__button__background`}
                style={
                  currentProperty === "BODY"
                    ? { backgroundColor: mainColors[body] }
                    : { backgroundImage: `url(${mainColors[body]})` }
                }
              ></div>
            </button>

            <p
              className={`body-buttons--main__text ${
                mainColor === mainColors[body] ? "active" : ""
              }`}
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorsBlock;
