import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { setCameraImage } from "../features/cameraSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./WebcamCapture.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

// @30.32 - a bit forward or behind
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  // useHistory gives us the history of the web page @1.03
  // and you can push a page so it forces a re-direct
  const history = useHistory();

  // @42:26 -useCallback (like memoization)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
    // setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
