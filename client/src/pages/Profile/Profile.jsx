import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Profile = () => {
  return (
    <div>
      <div className="container-fluid home">
        <div className="row d-flex">
          <div className="col-3 profile">
            <ProfileLeft />
          </div>
          <div className="col-6 posts">
            <ProfileCard location='profilePage'/>
            <PostSide />
          </div>
          <div className="col-3 rightSide"><RightSide/></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
