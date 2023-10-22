import React, { useContext } from "react";
import Four from "./four";
import { context } from "./conetxt";

export default function Three() {
   const value = useContext(context);
   return (
     <div>
       <p>three{' '+value as string}</p>
       <Four />
     </div>
   );
}
