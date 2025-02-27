import React, { useState, FormEvent } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { UserCredential } from "@firebase/auth";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signup } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string>("");

  // Mandamos los datos introducidos en el formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential: UserCredential = await signup(email, password);
      history.push("/");
    } catch (error: any) {
      //Manejamos los errores que pudieran surgir en el register
      setError(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }

      if (error.code === "auth/weak-password") {
        setError("La contraseña es muy corta (debe tener 6 o mas digitos)");
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {error && <IonText color="danger">{error}</IonText>}
        <form onSubmit={handleSubmit}>
          <IonInput
            type="email"
            placeholder="youremail@company.ltd"
            value={email}
            onIonInput={(e: CustomEvent) =>
              setEmail((e.target as HTMLInputElement).value)
            }
            required
          />
          <IonInput
            type="password"
            placeholder="Password"
            value={password}
            onIonInput={(e: CustomEvent) =>
              setPassword((e.target as HTMLInputElement).value)
            }
            required
          />
          <IonButton expand="full" type="submit">
            Register
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
