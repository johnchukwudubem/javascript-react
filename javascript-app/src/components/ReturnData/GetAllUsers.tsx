import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetAllUsers = () => {
  const [userinfo, setUserinfo] = useState([]);
  console.log(userinfo);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth/"
      );
      setUserinfo(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      {userinfo?.map((items: any) => (
        <>

          <Link to={`/update/${items?.firstName} /${items.lastName} /${items?._id}` }  >
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                <div className="card p-3 py-4">
                  <div className="text-center">
                    <img
                      src="https://i.imgur.com/bDLhJiP.jpg"
                      width="100"
                      className="rounded-circle"
                      alt="profile_image"
                    />
                  </div>

                  <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      Pro
                    </span>
                    <h5 className="mt-2 mb-0">
                      <p>{items?.postId}</p>
                    </h5>
                    <span>UI/UX Designer</span>

                    <div className="px-4 mt-1">
                      <p className="fonts">
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.{" "}
                      </p>
                    </div>

                    <ul className="social-list">
                      <li>
                        <i className="fa fa-facebook"></i>
                      </li>
                      <li>
                        <i className="fa fa-dribbble"></i>
                      </li>
                      <li>
                        <i className="fa fa-instagram"></i>
                      </li>
                      <li>
                        <i className="fa fa-linkedin"></i>
                      </li>
                      <li>
                        <i className="fa fa-google"></i>
                      </li>
                    </ul>

                    <div className="buttons">
                      <button className="btn btn-outline-primary px-4">
                        Message
                      </button>
                      <button className="btn btn-primary px-4 ms-3">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                <div className="card p-3 py-4">
                  <div className="text-center">
                    <img
                      src="https://i.imgur.com/bDLhJiP.jpg"
                      width="100"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>

                  <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      Pro
                    </span>
                    <h5 className="mt-2 mb-0">
                      <p>{items?.firstName}</p>
                      <p>{items?.lastName}</p>
                    </h5>
                    <span>UI/UX Designer</span>

                    <div className="px-4 mt-1">
                      <p className="fonts">
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.{" "}
                      </p>
                    </div>

                    <ul className="social-list">
                      <li>
                        <i className="fa fa-facebook"></i>
                      </li>
                      <li>
                        <i className="fa fa-dribbble"></i>
                      </li>
                      <li>
                        <i className="fa fa-instagram"></i>
                      </li>
                      <li>
                        <i className="fa fa-linkedin"></i>
                      </li>
                      <li>
                        <i className="fa fa-google"></i>
                      </li>
                    </ul>

                    <div className="buttons">
                      <button className="btn btn-outline-primary px-4">
                        Message
                      </button>
                      <button className="btn btn-primary px-4 ms-3">
                        Contact
                      </button>
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      Pro
                    </span>
                    <h5 className="mt-2 mb-0" >
                      <p>{items?.firstName}</p>
                    </h5>
                    <span>UI/UX Designer</span>

                    <div className="px-4 mt-1">
                      <p className="fonts">
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.{" "}
                      </p>
                    </div>

                    <ul className="social-list">
                      <li>
                        <i className="fa fa-facebook"></i>
                      </li>
                      <li>
                        <i className="fa fa-dribbble"></i>
                      </li>
                      <li>
                        <i className="fa fa-instagram"></i>
                      </li>
                      <li>
                        <i className="fa fa-linkedin"></i>
                      </li>
                      <li>
                        <i className="fa fa-google"></i>
                      </li>
                    </ul>

                    <div className="buttons">
                      <button className="btn btn-outline-primary px-4">
                        Message
                      </button>
                      <button className="btn btn-primary px-4 ms-3">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p>{items?.name}</p>
          <p>{items?.email}</p>
          <p>{items?.address?.street}</p> */}
          </Link>
        </>
      ))}
    </div>
  );
};

export default GetAllUsers;
