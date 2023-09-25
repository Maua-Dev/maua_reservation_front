import { useState } from "react";
import { Student } from "../../../model/student";
import Button from "../../components/Button";
import "./Home.css";

interface HomeProps {
  student: Student;
  handleButtonClick: () => void;
}

export default function Home({ student, handleButtonClick }: HomeProps) {

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    handleButtonClick();
    setIndex(index + 1);
  }

  return (
    <body>
      <div>
        <h1>{student.name}</h1>
        <p>{student.ra}</p>
        <p>O aluno está trabalhando? {student.isWorking ? "SIM" : "NÃO"}</p>
      </div>
      <Button buttonTitle="Entrar" handleButtonClick={handleClick} />
      <p>{index}</p>
    </body>
  );
}
