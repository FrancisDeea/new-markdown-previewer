import { marked } from "marked"

marked.use({
    gfm: true,
    breaks: true
  })
  
export default function Display(props) {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.input)}}>
        </div>
    )
}