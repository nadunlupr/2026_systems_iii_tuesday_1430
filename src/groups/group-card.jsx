export function GroupCard(props) {
    return (
        <div>
            <h1>Group Name: {props.grpName}</h1>
            <p>Number of students: {props.description}</p>
        </div>
    )
}

export function BigGroupCard() {

}


export default GroupCard;