import { useState, useEffect } from 'react';
import { DashboardData } from './interfaces/types';
import StateMachine from './components/StateMachine';
import SpinnerComponent from './components/SpinnerComponent';
import API from './network/API';
import './App.css';

function App(): JSX.Element {
    const [session, setSession] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchSession() {
        try {
          const sessionData = await API.getSession();
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
          <SpinnerComponent/>
        ) : (
            <StateMachine session={session as DashboardData} />
        )}
      </div>
    );
  }
  
  export default App;