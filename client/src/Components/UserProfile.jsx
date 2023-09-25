import React from "react";
import bgImage from "../assets/dashboardBg.png";
import { Link } from "react-router-dom";
const UserProfile = () => {
  let bgStyle = {
    height: "93vh",
    width: "92vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <div className="">
      <div className="header">
        <div className="tempNav h-16 bg-opacity-80 bg-[#460D0D] flex flex-row items-center justify-between p-3">
          <Link to="/dashboard" className="">
            <div className="logo"></div>
          </Link>
          <Link to="/dashboard/profile">
            <div className="userProfile"></div>
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-full ">
        <div className="bg-[#460D0D] w-1/5">
          <ul className="text-white text-3xl flex flex-col space-y-10 items-center pt-20 font-extralight">
            <li className="w-full flex justify-center items-center bg-black p-2  bg-opacity-50">
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
            <li className="w-full flex justify-center items-center p-2">
              <Link to="/dashboard/newCase">Add new case</Link>
            </li>
            <li className="w-full flex justify-center items-center p-2">
              <Link to="/dashboard/progress">Progress</Link>
            </li>
            <li className="w-full flex justify-center items-center p-2">
              <Link to="/dashboard/nextHearing">Next hearing</Link>
            </li>
          </ul>
        </div>
        <div className="h-full" style={bgStyle}>
        <div className="App">
            <table>
                <tr>
                    <th>Name - Priyanshu</th>
                    <th>Mail - pjstlyes13@gmail.com</th>
                    <th>Gender - Mail</th>
                </tr>
                {/* {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })} */}
            </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
