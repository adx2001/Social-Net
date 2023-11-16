import React, { useState } from "react";
import { FaHome, FaBell, FaComment, FaCog } from "react-icons/fa";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div>
      <div
        className="d-flex flex-row"
        style={{ border: "solid", borderRadius: "20%" }}
      >
        <div className="p-2 me-4">
          <Link to="../home">
            <FaHome size={35} className="text-success" />
          </Link>
        </div>
        <div className="p-2 me-4">
          <FaBell size={35} className="text-warning" />
        </div>
        <div className="p-2 me-4">
          <FaComment size={35} className="text-secondary" />
        </div>
        <div className="p-2">
          <FaCog size={35} className="text-danger" />
        </div>
      </div>
      <TrendCard />
      <div className="text-center">
        <button
          className="btn btn-outline-warning"
          style={{ width: "280px" }}
          onClick={() => setModalOpened(true)}
        >
          Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    </div>
  );
};

export default RightSide;
