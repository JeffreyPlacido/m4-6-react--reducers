import React from "react";
import TicketWidget from "./TicketWidget";
import { SeatContext } from "./SeatContext";

import GlobalStyles from "./GlobalStyles";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer },
  } = React.useContext(SeatContext);

  React.useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => receiveSeatInfoFromServer(data));
  }, []);
  console.log(SeatContext);
  return (
    <>
      <GlobalStyles />
      <TicketWidget />
    </>
  );
}

export default App;
