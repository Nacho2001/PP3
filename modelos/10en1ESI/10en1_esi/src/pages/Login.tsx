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

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();
  const [error, setError] = useState<string>("");

  // Mandamos los datos introducidos en el formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential: UserCredential = await login(email, password);
      history.push("/");
    } catch (error: any) {
      //Manejamos los errores que pudieran surgir en el login
      setError(error.code);
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }

      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      }
    }
  };

  // Iniciar sesion con google
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      history.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
            Login
          </IonButton>
        </form>
        <IonButton expand="full" onClick={handleGoogleSignin}>
          Sign in with Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
