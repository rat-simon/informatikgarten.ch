import type { ComponentProps, ReactElement } from "react";
import cn from "clsx";

export function IgStrong({
    children,
    className,
    ...props
}: ComponentProps<"strong"> & { className?: string }): ReactElement {
    return (
        <strong className={cn("text-ig-strong", className)} {...props}>
            {children}
        </strong>
    );
}

export default IgStrong;
