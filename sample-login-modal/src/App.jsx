import { useCallback, useState } from "react";
import LoginTemplate from "./components/LoginTemplate";
// import "./assets/css/modal.css";

function App() {
  const [open, setOpen] = useState(false);

  const onClickButton = useCallback(() => {
    console.log("open login modal");
    setOpen(!open);
  }, [open]);

  return (
    <div>
      <button onClick={onClickButton}>로그인 Modal Pop Up</button>
      <LoginTemplate open={open} close={onClickButton} />
    </div>
  );
}

export default App;
