import { Student } from "../model/student";
import Home from "../view/pages/Home/Home";
import NotFound from "../view/pages/NotFound/NotFound";

export default function HomeController(){

    const randomNumber = Math.floor(Math.random() * 5)

    if(randomNumber <= 2){
        return (<Home student={
            new Student('Fabio', 22003703, 2021, true)
        } />);
    } else {
        return <NotFound />
    }

}