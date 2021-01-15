import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

// @30.32 - a bit forward or behind
const WebcamCapture = () => {
  const webcamRef = useRef(null);

  // @42:26 -useCallback (like memoization)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onclick={capture}
      />
    </div>
  );
};

export default WebcamCapture;
