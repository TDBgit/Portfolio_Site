import { FC, ReactNode } from "react";
import clsx from "clsx";
const cn = clsx;

interface CardProps {
    title?: ReactNode; // Accept both strings and JSX
    children: ReactNode;
    className?: string;
}

const Card: FC<CardProps> = ({ title, children, className }) => {
    return (
        <div
            className={cn(
                "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
                className
            )}
        >
            <div className="flex flex-col gap-y-6">
                {/* Title */}
                {title && (
                    <div className="font-pixel uppercase text-lg">
                        {typeof title === "string" ? (
                            <p>{title}</p> // Regular title (no underline)
                        ) : (
                            <span className="group inline-block transition-all duration-300">
                                {/* Title link with underline */}
                                <span className="underline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#00d372] via-[#56acff] to-[#d87cac]">
                                    {title}
                                </span>
                            </span>
                        )}
                    </div>
                )}

                {/* Children */}
                {children}
            </div>
        </div>
    );
};

export default Card;
