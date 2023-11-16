import React, { useState } from "react";
import { BsHeart, BsChat, BsShare } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";

const Post = ({ data }) => {
  const {user}=useSelector((state)=>state.authReducer.authData)
  const [liked,setLiked]=useState(data.likes.includes(user._id))
  const[likes,setLikes]=useState(data.likes.length)

  const handleLike=()=>{
    setLiked((prev)=>!prev)
    likePost(data._id,user._id)
    liked?setLikes((prev)=> prev-1):setLikes((prev)=>prev+1)
  }

  return (
    <div>
      <div
        className="card mb-3 d-grid ms-3 mt-2"
        style={{ backgroundColor: "rgb(5, 59, 80)" }}
      >
        <div className="card-header d-flex align-items-center">
          <img src="" alt="" width="40" className="rounded-circle mr-3" />
          <span ><b style={{color:'rgb(255, 240, 206)',fontSize:'14px'}}>{data.name}</b></span>
        </div>
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" } alt="" className="card-img-top img-fluid" />
        <div className="card-body">
          <p className="card-text" style={{color:'rgb(255, 240, 206)',fontSize:'20px'}}>{data.desc}</p>
        </div>
        <div className="card-footer d-flex">
          <div className="me-3" style={{cursor:'pointer'}} onClick={handleLike}>
            {liked ? (
              <AiFillHeart size={30} className="text-danger" />
            ) : (
              <BsHeart size={26}className="text-danger"/>
            )}
          </div>
          <div className=" me-3">
            <BsChat size={25} className="text-success" />
          </div>
          <div className="">
            <BsShare size={22}className="text-warning" />
          </div>
        </div>
        <span className="ms-3" style={{fontSize:'12px'}}>{likes} likes</span>
      </div>
    </div>
  );
};

export default Post;
