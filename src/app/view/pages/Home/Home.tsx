import { useContext } from "react";
import { Student } from "../../../model/student";
import Button from "../../components/Button/Button";
import "./Home.css";
import NotFound from "../NotFound/NotFound";
import { HomeContext } from "../../../context/home_context";
export default function Home() {
  const { student, setStudent, index, setIndex } = useContext(HomeContext)!;

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
    </body>
  );
}
