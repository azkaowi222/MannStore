import Navbar from "../components/Navbar";
import "../assets/loginform.css";
import Container from "../components/Container";
import Title from "../components/Title";
import InputBox from "../components/InputBox";

export default function Login() {
  return (
    <>
      <Navbar isLogin={true}/>
      <Container>
        <Title title="Login" />
        <InputBox isLogin={true} username="username" password="password" />
      </Container>
    </>
  );
}
