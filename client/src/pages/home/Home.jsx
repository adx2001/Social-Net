import React from "react";
import ProfileSide from "../../components/Profileside/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="container-fluid home">
        <div className="row d-flex">
            <div className="col-3 profile"><ProfileSide/></div>
            <div className="col-6 posts"><PostSide/></div>
            <div className="col-3 rightSide"><RightSide/></div>
        </div>
    </div>
 
  );
};

export default Home;
