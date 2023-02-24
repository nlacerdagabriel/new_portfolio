import { Card } from "../../components/Card"
import { About } from "../About"
import { Skills } from "../Skills"
import { Container } from "./styles"

export const Curriculum = () => {
    return(
        <Container>
            <About/>
            <Skills/>
        </Container>
    )
}