<<<<<<< HEAD
import { useContext } from "react";
=======
import { useState } from "react";
>>>>>>> cdfc9916ede7d974fd18781d7347515350da00af
import { Student } from "../../../model/student";
import Button from "../../components/Button/Button";
import "./Home.css";
import NotFound from "../NotFound/NotFound";
import { HomeContext } from "../../../context/HomeContext";
``;
export default function Home() {
  const { student, setStudent, index, setIndex } = useContext(HomeContext)!;

<<<<<<< HEAD
  const randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber <= 2) {
    setStudent(new Student("Fabio", 22003703, 2021, true));
  }

  return (
    <body>
      {student != null ? (
        <div>
          <h1>{student.name}</h1>
          <p>{student.ra}</p>
          <p>O aluno está trabalhando? {student.isWorking ? "SIM" : "NÃO"}</p>
          <Button
            buttonTitle="Entrar"
            handleClick={() => setIndex(index + 1)}
          />
          <p>{index}</p>
        </div>
      ) : (
        <NotFound />
      )}
=======
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
>>>>>>> cdfc9916ede7d974fd18781d7347515350da00af
    </body>
  );
}
