import { useContext } from "react";
import { myContext } from "./context";
import ChangeTheme from "../ThemeChanger";
import QrCode from "../qrCodeGenerator";
import AutoComplete from "../autoComplete";
const ContextRender = () => {
  const data = useContext(myContext)
  
  const details = [
    {
      key: "lightOrDark",
      component: <ChangeTheme />,
    },
    {
      key: "qrCode",
      component: <QrCode />,
    },
    {
      key: "autoComplete",
      component: <AutoComplete />
    },
  ];  
  return <div style={{display: "flex", position: "relative", width:"100vw", height:"100vh"}}>{
  details.map((ele)=>(
    data[ele.key]? ele.component:null
  ))
  }</div>;
};

export default ContextRender;