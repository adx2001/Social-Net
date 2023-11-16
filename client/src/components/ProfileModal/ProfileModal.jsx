import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaUser, FaKey } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {uploadImage} from '../../actions/uploadAction'
import {updateUser} from '../../actions/UserAction'

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setModalOpened(false);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try { 
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(params.id,UserData));
    setModalOpened(false)
  };
  return (
    <Modal show={modalOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="">Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="firstname">
                      <FaUser className="mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      required
                      onChange={handleChange}
                      value={formData.firstname}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="lastname">
                      <FaUser className="mr-2" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      required
                      onChange={handleChange}
                      value={formData.lastname}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="worksAt">
                    <FaUser className="mr-2" />
                    Works At
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="worksAt"
                    name="worksAt"
                    required
                    onChange={handleChange}
                    value={formData.worksAt}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="country">
                      <FaKey className="mr-2" />
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      required
                      onChange={handleChange}
                      value={formData.country}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="livesIn">
                      <FaKey className="mr-2" />
                      Lives In
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="livesIn"
                      name="livesIn"
                      required
                      onChange={handleChange}
                      value={formData.livesIn}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <label htmlFor="relationship">
                      <FaKey className="mr-2" />
                      Relationship Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="relationship"
                      name="relationship"
                      required
                      onChange={handleChange}
                      value={formData.relationship}
                    />
                  </div>
                </div>
                <div className=" d-flex">
                  <div className="form-group">
                    <label>Profile Image</label>
                    <input
                      type="file"
                      name="profileImage"
                      className="form-control-file"
                      onChange={onImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cover Image</label>
                    <input
                      type="file"
                      name="coverImage"
                      className="form-control-file"
                      onChange={onImageChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileModal;
