import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login" style={{textDecoration:"none"}}>
        <h3 data-testid="login-link" style={{color:"black"}} >Login Page</h3>
      </Link>
      <Link to="/dashboard" style={{textDecoration:"none"}}>
        <h3 data-testid="home-link" style={{color:"black"}}>Home</h3>
      </Link>
    </div>
  );
}
export default Home;
