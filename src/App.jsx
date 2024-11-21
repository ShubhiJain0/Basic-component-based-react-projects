import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import StarRating from "./StarRating";
import ImageSlider from "./hooks2/createContext/ImageSlider";
import Load from "./load";
import First from "./tree-view/First";
import menus from "./tree-view/Data";
import QrCode from "./qrCodeGenerator";
import ChangeTheme from "./ThemeChanger";
import CustomScroll from "./custom-scroll";
import Modal from "./Modal-popUp";
import Git from "./GitHubSearch";
import AutoComplete from "./autoComplete";
import TicTacToe from "./Tic-tac-toe2";
import ComponentA from "./ContextApi1/ComponentA";
import FeatureFlagGloabol from "./FeatureFlags/context";
import ContextState from "./FeatureFlags/context";
import Feature from "./FeatureFlags"; 
import ContextRender from "./FeatureFlags";
import Test from "./CustomHook/Test";
import Test2 from "./CustomHook/Test2";
import ScrollTopAndBottom from "./ScrollTopAndBottom";
function App() {
 
  return (
    <>
      {/* <CustomScroll></CustomScroll> */}
      {/* <First menu={menus}></First> */}
      {/* <QrCode></QrCode>
      <ChangeTheme></ChangeTheme> */}
      {/* <Modal ></Modal> */}
      {/* <Git></Git> */}
      {/* <AutoComplete></AutoComplete> */}
      {/* <TickTack></TickTack> */}
      {/* <TicTacToe></TicTacToe> */}
      {/* <ComponentA data={"apple"}></ComponentA> */}
      {/* <ContextState>
        <ContextRender />
        </ContextState> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      <ScrollTopAndBottom />
    </>
  );
}

export default App
