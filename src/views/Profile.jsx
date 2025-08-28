import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  const handleLogout = () => {
    navigate("/login");
  };

  if (!user) {
    return <p>No user data found. Please login.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome, {user.fullName || "User"}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNum || "Not provided"}</p>
      <p>User ID: {user.id}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
