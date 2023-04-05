import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import Toast from "react-native-toast-message";
import connection from "../../config/connection";
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = await AsyncStorage.getItem("@TodoApp:user");
      if (storagedToken) {
        connection.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${JSON.parse(storagedToken)}`;
        const data = connection
          .get("/isexpired")
          .then(() => {
            if (!user) {
              const { user } = jwt_decode(
                JSON.parse(storagedToken),
                process.env.SECRET
              );
              setUser(user);
            }
            return;
          })
          .catch(() => {
            destroySession();
          });
      }
    }
    loadStoragedData();
  }, []);
  async function signIn({ username, password }) {
    try {
      const { data } = await connection.post("/signin", {
        username,
        password,
      });
      connection.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
      await AsyncStorage.setItem("@TodoApp:user", JSON.stringify(data.token));
      setUser(data.user);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      Toast.show({
        type: "error",
        text1: message,
      });
    }
  }

  async function destroySession() {
    await AsyncStorage.removeItem("@TodoApp:user");
    return setUser(null);
  }

  async function signUp({ username, password, password_confirm }) {
    try {
      const {
        data: { token },
      } = await connection.post("/user", {
        username,
        password,
        password_confirm,
      });
      connection.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await AsyncStorage.setItem("@TodoApp:user", JSON.stringify(token));

      const { user } = jwt_decode(token, process.env.SECRET);
      setUser(user);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      Toast.show({
        type: "error",
        text1: message,
      });
    }
  }

  return (
    <>
      <AuthContext.Provider
        value={{ user, isAuthenticated, signIn, signUp, destroySession }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
