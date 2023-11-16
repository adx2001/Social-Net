import React from 'react'

const User = ({person}) => {
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER 
  const handleFollow=()=>{
    

  }

  return (
    <div>
         <div className="mt-2" >
            <ul className="list-group mb-1">
              <li
                className="list-group-item"
                style={{ backgroundColor: "rgb(5, 59, 80)" , border:'none'}}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={person.profilePicture? serverPublic+person.profilePicture:serverPublic+"defaultProfile.png"}
                    alt=""
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="d-grid text-center">
                  <span className="" style={{color:'rgb(255, 240, 206)',fontSize:'20px'}}>
                      <b>{person.firstname} {person.lastname}</b>
                    </span>

                    {/* <span style={{color:'rgb(255, 240, 206)',fontSize:'14px'}} className="">{person.username}</span> */}
                    <button className="btn btn-sm m-2" style={{width:'130px',background:'rgb(3, 201, 136)'}} onClick={handleFollow}>
                      Follow
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default User