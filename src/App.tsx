import "./App.css";
// import Card from "./components/Card/Card";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ThankYou from "./components/ThankYou/ThankYou";

//variables for ProfileCard
import avatar from "./assets/poodle.jpeg";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import { GenderByName } from "./components/GenderByName/GenderByName";
const name = "Some Name";
const description = "Beautiful poodles from Colone.";

function App() {
  return (
    <>
      <Greeting name={"Vasilii"} />
      <GenderByName />
      <SpaceMissionForm />
      <Goodbye />
      {/* <Card url={"/poodle.jpeg"} alt={"Some dog"} /> */}
      <ProfileCard avatar={avatar} name={name} description={description} />
      <ThankYou />
    </>
  );
}

export default App;
