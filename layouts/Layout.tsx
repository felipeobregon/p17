import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className="mx-auto w-1/2">
            {children}
        </div>
    )
}