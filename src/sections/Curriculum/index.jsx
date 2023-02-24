import { Card } from "../../components/Card"
import { About } from "../About"
import { Contact } from "../Contact"
import { Services } from "../Services"
import { Skills } from "../Skills"
import { Container } from "./styles"

export const Curriculum = () => {
    return(
        <Container>
            <About/>
            <Skills/>
            <Services/>
            <Contact/>
        </Container>
    )
}