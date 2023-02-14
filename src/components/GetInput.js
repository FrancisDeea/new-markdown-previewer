export default function GetInput(props) {
    return (
        <div>
            <textarea 
                type="text"
                id="editor" 
                onChange={props.handleChange} 
                value={props.value}>
            </textarea>
        </div>
    )
}