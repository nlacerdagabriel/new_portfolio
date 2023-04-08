import { Container } from "./styles"
import {Card} from '../../components/Card'
import { ListItem } from "../../components/ListItem"
import { useTranslation } from "react-i18next";

export const Services = () => {
    const [t, i18n] = useTranslation("global");


    return(
        <Card title={t("myServices.title")}>
            <Container>
                <ListItem>
                {t("myServices.services",{ returnObjects: true }).map((it) => (
                        <li>{it}</li>
                    ))}
                </ListItem>
            </Container>
        </Card>
    )
}