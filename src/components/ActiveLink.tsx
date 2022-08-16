import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatch?: boolean;
}

export default function ActiveLink({ children, shouldMatch = false, ...rest }: ActiveLinkProps){
    const { asPath } = useRouter();
    let isActive = false;

    if(shouldMatch && (asPath === rest.href || asPath === rest.as)){
        isActive = true;
    }

    if(!shouldMatch && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))){
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, { 
                color: isActive ? 'green.400' : 'gray.50'
            })}
        </Link>
    );
}