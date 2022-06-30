import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };


  useEffect(() => {

    // if ( window.location.pathname === "/menu/food" || "/menu/drinks" ) {
    //   window.scrollTo(0, 1000);
    // }
  
      onTop();   
   
        }, [routePath]);

  }

export default GoToTop


// useEffect(() => {
//   onTop();
// }, [routePath]);