import { StyledRegisterForm } from "../styled/Register.styled";
import Image from "next/image";
import { useSession } from "next-auth/react";

const RegisterForm = () => {
  const { data: session } = useSession();

  return (
    <StyledRegisterForm action="/api/register" method="post">
      <Image
        alt="pfp"
        src={"https://avatars.githubusercontent.com/u/29115431?v=4"}
        width={200}
        height={200}
      />

      <label htmlFor="name">Jméno a přijmení</label>
      <input type="text" name="name" id="name" />
      <input type="hidden" name="email" value={session.user.email} />
      <input type="hidden" name="username" value={session.user.name} />
      <label htmlFor="email">Email (nelze změnit)</label>
      <input
        type="email"
        name="email"
        id="email"
        value={session.user.email}
        disabled
      />
      <label htmlFor="standard-select">Třída</label>
      <div className="select">
        <select id="standard-select" name="class">
          <option value="2.B">2.B</option>
          <option value="2.K">2.K</option>
          <option value="3.K">3.K</option>
        </select>
      </div>
      <button type="submit" id="submit">
        Registrovat
      </button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
