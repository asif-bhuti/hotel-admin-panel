import Link from "next/link";

const Home = () => (
  <div>
    <h1>Welcome to the hotel admin app!</h1>
    <Link href="/signUp">Sign Up</Link>
    <Link href="/signIn">Sign In</Link>
  </div>
);

export default Home;
