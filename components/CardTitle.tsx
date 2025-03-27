interface CardTitleProps {
    text: string
}

export default function CardTitle(props: CardTitleProps) {
    return (
        <>
            <h3 className="text-xl font-semibold mb-3">{props.text}</h3>
        </>
    )
}