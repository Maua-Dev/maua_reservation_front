import { Student } from "../../../model/student";
import Button from "../../components/Button";
import "./Home.css";

interface HomeProps {
  student: Student;
}

export default function Home({ student }: HomeProps) {
  return (
    <body>
      <div>
        <h1>{student.name}</h1>
        <p>{student.ra}</p>
        <p>O aluno está trabalhando? {student.isWorking ? "SIM" : "NÃO"}</p>
      </div>
      <Button buttonTitle="Entrar" />
    </body>
  );
}
