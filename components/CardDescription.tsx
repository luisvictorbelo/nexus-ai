import React from "react";

interface CardDescriptionProps {
    text: string
}

export default function CardDescription(props: CardDescriptionProps) {
    return (
        <>
            <p className="text-gray-600">{props.text}</p>
        </>
    )
}