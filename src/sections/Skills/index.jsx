import { Container } from "./styles"
import {Card} from '../../components/Card'

import { BsWordpress } from 'react-icons/bs';


export const Skills = () => {
    return(
            <Card title={'My Skills'}>
                <Container>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                    <Card mb={'0'} padding={'1rem'}>
                        <BsWordpress/>
                    </Card>
                </Container>    
            </Card>
    )
}