import React from 'react';

export type MarkerProps = {
    /**
     * a text to be rendered in the component.
     */
    text: string,
    color?: "yellow" | "teal" | "indigo" | "purple" | "gray",
    as?: "span" | "div" | "mark"
};
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Marker({ text, color="gray", as = "span" }: MarkerProps) {
    function setClassName(color) {
        let cls = "px-[10px] py-[2px] mr-2 font-medium rounded-md text-md "
        switch (color) {
            case "yellow":
                cls += "bg-yellow-200 text-gray-700";
                break;
            case "green":
                cls += "bg-green-200 text-gray-700";
                break;
            case "teal":
                cls += "bg-teal-200 text-gray-700"
                break;
            case "pink":
                cls += "bg-pink-200 text-gray-700";
                break;
            case "purple":
                cls += "bg-purple-200 text-gray-700";
                break
            default:
                cls += "bg-gray-600 text-gray-50"
        }
        return cls
    }
    const className = setClassName(color)
    const MarkerAlias = (props) => {
        if (as === "div") return <div {...props} />;
        else if (as === "mark") return <mark {...props} />
        else return <span {...props} />
    }

    return <MarkerAlias className={className}>{text}</MarkerAlias>
}
/*
    function setClassName(color) {
        let cls = "px-[10px] py-[2px] mr-2 font-medium rounded-md "
        switch (color) {
            case "yellow":
                cls += "bg-yellow-200 text-gray-700";
                break;
            case "green":
                cls += "bg-green-300 text-gray-700";
                break;
            case "teal":
                cls += "bg-teal-300 text-gray-700"
                break;
            case "pink":
                cls += "bg-pink-300 text-gray-700";
                break;
            case "purple":
                cls += "bg-purple-300 text-gray-700";
                break
            default:
                cls += "bg-gray-600 text-gray-50"
        }
        return cls
    }
    const className = setClassName(color)
*/
