import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleViewPassword = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword,
    });
  };

  // https://inotebookonlinecloud3.onrender.com

  // http://localhost:5000

  const handleClick = async () => {
    const response = await fetch("https://inotebookonlinecloud3.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        phone: credentials.phone,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("userInfo", JSON.stringify(json));
      navigate("/");
      props.showAlert("Logged in successfully", "success");
    } else {
      if (json.error) {
        props.showAlert("Invalid Details! " + json.error, "danger");
      }
    }
  };

  return (
    <>
      <div className="Container mx-auto my-5" style={{ width: "30rem" }}>
        <div className="container form">
          <p className="text-center">
            <i>Login to continue 😊 </i>
          </p>
          <button className="d-block bg-primary items-center text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded mx-2 w-100 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 640 512"
            >
              <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />
            </svg>{" "}
            Sign in With Google
          </button>
          <button className="d-block items-center text-white bg-primary bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded mx-2 w-100 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>{" "}
            Sign in With Facebook
          </button>
          <div className="mb-4 input-container">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onchange}
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            {errors.email && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.email}
              </span>
            )}
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="number" className="form-label">
              Mobile no.
            </label>
            <input
              type="number"
              className="form-control"
              onChange={onchange}
              id="phone"
              name="phone"
              placeholder="name@example.com"
            />
            {errors.email && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.email}
              </span>
            )}
          </div>

          <div className="mb-4 input-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <i
              className={`fa fa-eye${
                credentials.showPassword ? "-slash" : ""
              } view-password`}
              onClick={handleViewPassword}
            ></i>
            <input
              type={credentials.showPassword ? "text" : "password"}
              className="form-control"
              onChange={onchange}
              id="password"
              name="password"
            />
            {errors.password && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.password}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            className="inline-flex bg-primary items-center text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded mx-2  my-3"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
        <br />
        <p className="text-center last-para">
          Don't have an account? <a href="/signup">SignUp-&gt;</a>{" "}
        </p>
      </div>
    </>
  );
}

export default Login;
