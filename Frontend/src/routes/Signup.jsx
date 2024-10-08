import Navbar from "../components/Navbar";
import "../assets/loginform.css";
import Title from "../components/Title";
import InputBox from "../components/InputBox";
import Container from "../components/Container";

export default function Signup() {
  return (
    <>
      <Navbar isLogin={false}/>
      <Container>
        <Title title="Sign Up" />
        <InputBox isLogin={false} username="username" password="password" />
      </Container>
    </>
  );
}
