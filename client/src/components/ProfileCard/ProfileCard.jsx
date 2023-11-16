import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts=useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <div>
      <div className="container mt-3">
        <div
          className="card text-center rounded-2"
          style={{ backgroundColor: "rgb(5, 59, 80)" }}
        >
          {/* Cover Image */}
          <img
            src={
              user.coverPicture
                ? serverPublic + user.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            className="card-img-top"
            alt=""
            
            style={{
              height: location === "profilePage" ? "300px" : "160px", 
            }}

          />

          <div className="card-body">
            {/* Profile Image */}
            <img
              src={
                user.profilePicture
                  ? serverPublic + user.profilePicture
                  : serverPublic + "defaultProfile.png"
              }
              className="card-img-top rounded-circle"
              alt=""
              style={{
                width: "130px",
                height: "130px",
                margin: "0 auto",
                marginTop: "-80px",
              }}
            />

            <h4
              className="card-title"
              style={{ color: "rgb(255, 240, 206)", fontSize: "30px" }}
            >
              {user.firstname} {user.lastname}
            </h4>
            <p
              className="card-text"
              style={{ color: "rgb(255, 240, 206)", fontSize: "14px" }}
            >
              {user.worksAt ? user.worksAt : "write about yourself"}
            </p>
            <hr />
            <p className="card-text d-flex justify-content-center text-white">
              <span className="me-1">
                <b>{user.followers.length}</b>
                <br />
                Followers
              </span>
              <span className="px-1">
                <b>{user.following.length}</b>
                <br />
                Following
              </span>
              {location==="profilePage" && (
                <span className="ms-1">
                  <b>{posts.filter((post)=>post.userId===user._id).length}</b>
                  <br />
                  Posts
                </span>
              )}
            </p>
            <hr />

            {location==="ProfilePage" ? (
              ""
            ) : (
              <div>
                <span className="text-center fw-bold text-success">
                  <Link to={`/profile/${user._id}`}>My Profile</Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
