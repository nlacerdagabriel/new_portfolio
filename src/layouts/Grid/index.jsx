import { Curriculum } from "../../sections/Curriculum"
import { Myself } from "../../sections/Myself"
import { Container } from "./styles"

export const Grid = () => {
    return(
        <Container>
            <Myself/>
            <Curriculum/>
        </Container>
    )
}