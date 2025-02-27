import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import { useAuth } from "../context/authContext";
import './ExploreContainer.css';

//interface ContainerProps { }
interface HomeProps {
  // Define prop types if any
}

const ExploreContainer: React.FC<HomeProps> = (props: HomeProps) => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <img src={user?.photoURL || ''} />
            <div>Welcome {user?.displayName || user?.email}</div>
            <IonButton onClick={handleLogout}>Logout</IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
