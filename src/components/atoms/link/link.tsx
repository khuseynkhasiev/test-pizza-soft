import { memo } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
    children: React.ReactNode;
    src: string;
}

export const Link = memo(({ children, src }: LinkProps) => {
    return <NavLink to={src}>{children}</NavLink>;
});
