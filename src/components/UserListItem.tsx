import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import User from "./UserModel";
import "./UserListItem.css";

const UserListItem = ({
  user,
  count,
  onDelete,
}: {
  user: User;
  count: number;
  onDelete: Function;
}) => {
  return (
    <IonItemSliding>
      <IonItem className="item" id="item">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>{count}</IonLabel>
            </IonCol>
            <IonCol>
              <IonAvatar class="dp" aria-hidden="true">
                <img
                  alt={`${user.name.first} ${user.name.last}}`}
                  src={user.picture.thumbnail}
                />
              </IonAvatar>
            </IonCol>

            <IonCol size="2" class="name">
              {user.name.first} {user.name.last}
            </IonCol>
            <IonCol>{user.dob.age} YO</IonCol>
            <IonCol> {user.cell}</IonCol>
            <IonCol size="2">{user.email}</IonCol>
            <IonCol size="4">
              {user.location.city}, {user.location.state},{" "}
              {user.location.country} {user.location.postcode}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => onDelete(user)}>
          <IonIcon icon={trash}></IonIcon>
          <span className="delete">Delete</span>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default UserListItem;
