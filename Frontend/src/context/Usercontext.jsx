import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import { authdatacontext } from "./Authcontext";

export const userdatacontext = createContext();

function Usercontext({ children }) {
  const { serverUrl } = useContext(authdatacontext); // <-- THIS NOW WORKS
  const [userdata, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/user/getcurrentuser",
        {},
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (error) {
      console.log(error);
      setUserData(null);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <userdatacontext.Provider value={{ userdata, setUserData, getCurrentUser }}>
      {children}
    </userdatacontext.Provider>
  );
}

export default Usercontext;
