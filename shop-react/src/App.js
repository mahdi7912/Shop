
import Navabr from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import Slider from './components/slider/Slider';
import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  animation: {
    animation: "slide-down 1s ease 0.5s",
    animationFillMode: "forwards",
    visibility: "hidden",
    "0%": {
      visibility: "visible",
      top: "23rem",
    },
    "100%": {
      visibility: "visible",
      top: "17rem",
    }
  }
}));



function App() {
  const classes = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div >

      {
        scrollPosition > 150 ? <Navabr /> : null
      }

      <Slider />



      <Feed />
      <Add />
    </div>
  );
}

export default App;
