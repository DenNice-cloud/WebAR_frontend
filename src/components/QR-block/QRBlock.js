import { useState } from "react";
import "./QRBlock.scss";
import { ReactComponent as QRCube } from "icons/material-symbols_view-in-ar-outline-rounded.svg";
import { ReactComponent as QRCode } from "icons/QR-code.svg";
import { ReactComponent as CloseButton } from "icons/close-icon.svg";

const QRBlock = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActiveStatusChange = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="QR-button">
        <button
          className="QR-button__main"
          onClick={handleActiveStatusChange}
        >
          <QRCube />
          <p>See In Real Life</p>
        </button>
      </div>

      {isActive && (
        <div className="QR-block">
          <div className="QR-block__description">
            <div
              className="QR-block__description__close"
              onClick={handleActiveStatusChange}
            >
              <CloseButton />
            </div>

            <p>
              Scan the QR code with your phone. Within 1-3 seconds the AR
              function opens on your phone.
            </p>

            <hr></hr>

            <QRCode className="QR-block__description__img" />
          </div>
        </div>
      )}
    </>
  );
};

export default QRBlock;
