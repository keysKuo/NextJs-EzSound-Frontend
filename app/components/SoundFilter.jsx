import React from "react";
import { LuChevronDown } from "react-icons/lu";

const SoundFilter = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="flex items-center justify-start md:padding-clamp-filter py-3 gap-1">
                <button className="text-xs bg-main px-3 py-2 rounded-lg flex flex-row gap-2 items-center">
                    Energy <LuChevronDown size={15} />
                </button>
                <button className="text-xs bg-main px-3 py-2 rounded-lg flex flex-row gap-2 items-center">
                    Vocals <LuChevronDown size={15} />
                </button>
                <button className="text-xs bg-main px-3 py-2 rounded-lg flex flex-row gap-2 items-center">
                    Duration <LuChevronDown size={15} />
                </button>
            </div>
            <div className="flex items-center justify-end md:padding-clamp-filter py-3 gap-1">
                <button className="text-xs bg-main px-3 py-2 rounded-lg">Relevance</button>
                <button className="text-xs bg-active  px-3 py-2 rounded-lg">Lastest Releases</button>
                <button className="text-xs bg-active px-3 py-2 rounded-lg">Undiscovered</button>
            </div>
        </div>
    );
};

export default SoundFilter;
