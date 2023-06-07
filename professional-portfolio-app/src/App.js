import React, {useEffect, useState}from "react";
import PageNavigation from "./components/PageNavigation";

export default function App() {
  const [myName, setMyName] = useState('Ulises Garfias');

  useEffect(() => {
    document.title = myName;
  });
  
  return (
    <div>
      <PageNavigation />
    </div>
  )
};
