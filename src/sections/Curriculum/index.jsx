import { Card } from "../../components/Card"
import { Carousel } from "../../components/Carousel"
import { About } from "../About"
import { Contact } from "../Contact"
import { Projects } from "../Projects"
import { Services } from "../Services"
import { Skills } from "../Skills"
import { Container } from "./styles"

export const Curriculum = () => {
    return(
        <Container>
            <About/>
            <Skills/>
            <Services/>
            <Projects/>
            <Contact/>
        </Container>
    )
}