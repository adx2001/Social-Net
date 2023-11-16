import React, { useEffect, useState } from "react";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/UserRequest";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div>
      {persons.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
