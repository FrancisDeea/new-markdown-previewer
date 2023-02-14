import { marked } from "marked"
export default function Display(props) {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.input)}}>
        </div>
    )
}