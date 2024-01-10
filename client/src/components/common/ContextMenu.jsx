import React from "react";

function ContextMenu({options, cordinates, contextMenu, setContextMenu}) {
  const contextMenuRef = useRef(null);
  return (
    <div className={`bg-dropdown-background fixed py-2 z-[100] top-[${cordinates.y} left-[${cordinates.x}] shadow-xl`}
    ref={contextMenuRef}
    
  >
    <ul>
      {
        options.map(({name,callback })=>(
          <li key={name} onClick={()=>handleClick(e,callback)}>

          </li>
        ))

      }
    </ul>

  </div>
  );
}

export default ContextMenu;
