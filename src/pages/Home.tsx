import { IonPage } from "@ionic/react";
import "./Home.css";
import UserList from "../components/UserList";

const Home: React.FC = () => {
  return (
    <IonPage>
      <UserList></UserList>
    </IonPage>
  );
};

export default Home;
