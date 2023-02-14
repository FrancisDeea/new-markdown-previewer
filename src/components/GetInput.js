export default function GetInput(props) {
    return (
        <textarea
            type="text"
            id="editor"
            onChange={props.handleChange}
            value={props.value}>
        </textarea>
    )
}