import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user,profileUserId]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div
        className="card mt-2"
        style={{ backgroundColor: "rgb(5, 59, 80)", border: "none" }}
      >
        <div className="card-body text-center" style={{color:'rgb(238, 238, 238)'}}>
          <h5 className="card-title" style={{color:'rgb(238, 238, 238)' ,fontSize:'30px'}}>{profileUser.firstname} {profileUser.lastname}</h5>
          <p className="card-text">
            <strong>Status: </strong>{profileUser.relationship}
          </p>
          <p className="card-text">
            <strong>Lives in: </strong>
            {profileUser.livesIn}
          </p>
          <p className="card-text">
            <strong>Works at: </strong>
            {profileUser.worksAt}
          </p>
          {user._id === profileUserId ? (
            <>
              <button
                href=""
                className="btn btn-outline-warning text-white border-0 rounded-5 m-2 ms-auto"
                onClick={() => setModalOpened(true)}
              >
                <FaEdit /> Edit
              </button>
              <ProfileModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                data={user}
              />
              <button
                href=""
                className="btn btn-outline-danger text-white border-0 rounded-5 m-2 ms-auto"
                onClick={handleLogout}
              >
                <BiLogOut /> Logout
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
