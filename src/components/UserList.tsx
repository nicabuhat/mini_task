import { useEffect, useState } from "react";
import { IonContent, IonList } from "@ionic/react";
import UserListItem from "./UserListItem";
import User from "./UserModel";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleDelete = (user: User) => {
    setUsers(users.filter((u) => u.login.uuid !== user.login.uuid));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const result = await response.json();
        setUsers(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonContent class="content" className="ion-padding">
      <IonList>
        {users.length > 0 ? (
          users.map((user, index) => {
            return (
              <UserListItem
                count={index + 1}
                user={user}
                onDelete={handleDelete}
                key={user.login.sha256}
              />
            );
          })
        ) : (
          <span>no users found</span>
        )}
      </IonList>
    </IonContent>
  );
};

export default UserList;
