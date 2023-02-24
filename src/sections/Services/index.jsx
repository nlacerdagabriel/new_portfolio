import { Container } from "./styles"
import {Card} from '../../components/Card'
import { ListItem } from "../../components/ListItem"

export const Services = () => {
    return(
        <Card title={'My Services'}>
            <Container>
                <ListItem>
                    <li>Mobile App Development</li>
                    <li>Desktop App Development</li>
                    <li>Backend Development</li>
                    <li>Frontend Development</li>
                </ListItem>
            </Container>
        </Card>
    )
}