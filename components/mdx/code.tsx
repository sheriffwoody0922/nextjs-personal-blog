import { Prism } from '@mantine/prism';

export default function CodeHighlighter(props){
    return <Prism colorScheme="dark" language={props.className?.split("-")[1] || "c"}>{props.children}</Prism>

}

