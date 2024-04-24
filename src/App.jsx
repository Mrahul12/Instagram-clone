import React,{useEffect,useState} from 'react'
import Leftside from './Component/Leftside'
import Middles from './Component/Middles'
import LoadingBar from "react-top-loading-bar";
import Rightmenu from './Component/Rightmenu';
function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 10);
    }, 400);
    setTimeout(() => {
      setProgress(progress + 30);
    }, 700);
    setTimeout(() => {
      setProgress(1000);
    }, 1000);
  }, []);

  return (
    <>
      <header className="flex max-md:flex-col-reverse  gap-3 w-[100vw] bg-black overflow-hidden h-[100vh] ">
        <Leftside />
        <Middles />
        <Rightmenu />
        <LoadingBar
          color="#f11946"
          height={4}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </header>
    </>
  );
}

export default App
