import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API call
    const timer = setInterval(() => {
      console.log("React OP");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h2>Profile Component</h2>

      <h3>Name:{props.name}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        count
      </button>
    </div>
  );
};

export default Profile;
