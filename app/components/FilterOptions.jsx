"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import classNames from "classnames";
import Link from "next/link";

const filterOptions = [
    {
        label: "Everyone",
        icon: "",
        href: "/browse/trending",
    },
    {
        label: "Gamers",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f47e.svg",
        href: "/browse/trending?type=gamers",
    },
    {
        label: "Vloggers",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f4f9.svg",
        href: "/browse/trending?type=vloggers",
    },
    {
        label: "Entertainment",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f3ad.svg",
        href: "/browse/trending?type=entertainment",
    },
    {
        label: "How tos",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f4a1.svg",
        href: "/browse/trending?type=how-to",
    },
    {
        label: "Business",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f4c8.svg",
        href: "/browse/trending?type=business",
    },
    {
        label: "Travel",
        icon: "https://cdn.uppbeat.io/images/twemoji/svg/1f30d.svg",
        href: "/browse/trending?type=travel",
    },
];

const FilterOptions = () => {
    const currentPathname = usePathname();
    const searchParams = useSearchParams();
    const currentHref = searchParams.get("type")
        ? `${currentPathname}?type=${searchParams.get("type")}`
        : currentPathname;

    return (
        <div className="padding-trend flex flex-wrap items-center md:justify-start justify-center gap-2">
            {filterOptions.map((type, index) => {
                return (
                        <Link
                            key={index}
                            href={type.href}
                            className={classNames({
                                "rounded-xl px-4 h-[2.5rem] min-w-[2.5rem] transition-opacity": true,
                                "relative overflow-hidden border border-transparent flex items-center justify-center": true,
                                "opacity-100 hover:opacity-70": true,
                                "bg-main": currentHref === type.href,
                                "bg-active": currentHref !== type.href,
                            })}
                        >
                            <span
                                className={classNames({
                                    "me-2 flex items-center justify-center": true,
                                    "w-[1.125rem] h-[1.125rem] gap-0": type.icon,
                                    hidden: !type.icon,
                                })}
                            >
                                <img src={type.icon} />
                            </span>
                            <span className="text-[0.75rem] truncate">{type.label}</span>
                        </Link>
                );
            })}
        </div>
    );
};

export default FilterOptions;
//🚀