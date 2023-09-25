import { ReactNode, createContext, useState } from "react";
import { Student } from "../model/student";

interface HomeContextProps {
  student: Student | undefined;
  setStudent: React.Dispatch<React.SetStateAction<Student | undefined>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface HomeContextProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext<HomeContextProps | null>(null);

export default function HomeContextProvider({
  children,
}: HomeContextProviderProps) {
  const [student, setStudent] = useState<Student | undefined>();
  const [index, setIndex] = useState<number>(0);

  const contextValue: HomeContextProps = {
    student,
    setStudent,
    index,
    setIndex,
  };

  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
}
