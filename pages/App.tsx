import { useState, useEffect } from "react";
import API from "network/API";
import StateMachine from "../components/StateMachine";
import { DashboardData } from "interfaces/types";
import SpinnerComponent from "@/components/SpinnerComponent";
// import "../styles/App.module.css";

function App(): JSX.Element {
  const [session, setSession] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      try {
        const sessionData = await API.getSession();
        console.log(sessionData)
        setSession(sessionData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSession();
  }, []);

  return (
    <div>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <StateMachine session={session as DashboardData} />
      )}
    </div>
  );
}

export default App;