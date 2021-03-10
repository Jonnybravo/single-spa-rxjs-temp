import React,{useEffect, useState} from "react";
import { navigateToUrl } from "single-spa";
import {AppStore} from "@rxjs-temp/messenger";


export default function Root(props) {
  

  const [list, setList] = useState(AppStore.initialState)
  useEffect(() => {
    const isLogged = !sessionStorage.getItem('user');
    isLogged && window.history.pushState(null, null, '/login')
    
    const subs = AppStore.subscribe(setList);
    AppStore.init()

    return () => subs.unsubscribe();

    
  },[])

  return (
    <div
      className="ui stackable menu fixed inverted"
      style={{ position: "sticky" }}
    >
      <a href="/" className="item" onClick={navigateToUrl}>
        <img src="https://i.ibb.co/NnYmtv7/philip-morris-international-pmi-vector-logo.png" />
      </a>
      {
       
        list.appList.map(({hash, name, global, show}) => {
          return (!global && show)  && <a href={hash + "/"} className="item" onClick={navigateToUrl}>
            {name}
          </a>
        })
      }
      {/* <a href="/" className="item" onClick={navigateToUrl}>
        Send temperature
      </a>
      <a href="/receiver" className="item" onClick={navigateToUrl}>
        View registered temperatures
      </a> */}
    </div>
  );
}
