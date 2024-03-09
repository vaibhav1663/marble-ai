import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Menu } from "../menu";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="">
            <Menu />
            <div className="p-4 max-w-screen-xl m-auto">
                <Breadcrumb />
                <div>{children}</div>
            </div>
        </div>
    );
};
