import { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = (props) => {
    const [sideBarNavOffCanvas, setSideBarNavOffCanvas] = useState(false);
    const toggle = () => setSideBarNavOffCanvas(!sideBarNavOffCanvas);

    return (
        <SidebarContext.Provider value={{ sideBarNavOffCanvas, toggle }}>
            {props.children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext;