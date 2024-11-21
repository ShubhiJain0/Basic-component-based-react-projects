import React, { useEffect } from 'react'

const useDisplay = (ref, handle) => {
  useEffect(()=>{
    function listner(event){
      if( !ref.current || ref.current.contains(event.target)){
      return;} 

      handle(event);
    }
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  

  }, [ref, handle])

}

export default useDisplay