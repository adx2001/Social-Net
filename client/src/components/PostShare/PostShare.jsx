import {
  FaImage,
  FaVideo,
  FaMapMarker,
  FaCalendar,
  FaShare,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ProfileImage from "../../img/profileImg.jpg";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction";

const PostShare = () => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div>
      <div className="container mt-4">
        <div
          className="card"
          style={{
            backgroundColor: "rgb(5, 59, 80)",
            border: "none",
            width: "594px",
          }}
        >
          <div className="card-body">
            <div className="d-flex">
              <img
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                alt=""
                className="rounded-circle me-1"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              ></img>
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="What's on your mind?"
                ref={desc}
                required
              />
            </div>
            <div className="d-flex">
              <div className="mt-3">
                <button
                  className="btn me-2"
                  onClick={() => imageRef.current.click()}
                >
                  <FaImage size={25} className="text-success me-2" />
                  Photo
                </button>
                <button className="btn  me-2">
                  <FaVideo size={25} className="text-success me-2" />
                  Video
                </button>
                <button className="btn  me-2">
                  <FaMapMarker size={25} className="text-success me-2" />
                  Location
                </button>
                <button className="btn  me-2">
                  <FaCalendar size={25} className="text-success me-2" />
                  Schedule
                </button>
              </div>
              <button
                className="btn btn-outline-success rounded-pill mt-3"
                onClick={handleSubmit}
              >
                <FaShare size={20} className="text-danger" />
                {loading ? "Uploading...." : ""}
              </button>
            </div>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="text-end">
              <ImCross
                className="text-danger m-2"
                onClick={() => setImage(null)}
                style={{ cursor: "pointer" }}
              />
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-fluid"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostShare;
