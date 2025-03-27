interface CardProps {
    children: any
}

export default function Card(props: CardProps) {
    return (
        <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
            {props.children}
        </div>
    )
}