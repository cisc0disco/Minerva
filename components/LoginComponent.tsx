import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { ...userData });
      router.push("/profile");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="identifier"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
