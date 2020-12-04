import React from "react";

const HomePage = () => {
  return <div>
<h1>Home Page</h1>
<form action="http://localhost:3000/createuser">
    <button>Create New User</button>
</form>
  </div>;
};

export default HomePage;
