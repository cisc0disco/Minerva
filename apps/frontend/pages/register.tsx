import RegisterForm from "../components/RegisterForm";
import { Container } from "../styled/Register.styled";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}

export default Register;
