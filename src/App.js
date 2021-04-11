import React, { useState, Suspense ,lazy } from "react";
import Agreement from "./Agreement"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./ErrorBoundary";

const Main = lazy(() => import("./Main"));

function ErrorScreen({ error }) {
  //
  // Here you can handle or track the error before rendering the message
  //

  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />;
  return(
    <ErrorBoundary fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  ); 
}

export default App;
