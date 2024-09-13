import "./MaterialBlock.scss";

const MaterialBlock = ({ setMaterial, materials, material }) => {
  const handleMaterialChange = (value) => {
    setMaterial(value);
  };
  
  return (
    <div className="material">
      <div className="material--title">
        <p>MATERIAL</p>
      </div>

      <div className="material--buttons">
        {Object.keys(materials).map((body) => (
          <div key={body}>
            <button
              className={`material--buttons__main ${
                material.toLowerCase() === materials[body] ? "active" : ""
              }`}
              onClick={() => handleMaterialChange(body)}
            >
              <p
                className={`material--buttons__main__text ${
                  material.toLowerCase() === materials[body] ? "active" : ""
                }`}
              >
                {body}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialBlock;
