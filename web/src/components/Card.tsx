import react from "react"

type Props = {
    image: string,
    title: string,
}

export default function Card(props: Props) {
    return (
        <li className="Card p-3 list-group-item">
            <img src={props.image} className="img-thumbnail"></img>
            <p>{props.title}</p>
        </li>
    );
}