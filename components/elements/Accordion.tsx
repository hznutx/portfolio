import { Accordion, AccordionItem } from "@heroui/react";

interface IAccordionProps { data: { title: string; content: React.ReactNode }[] }

export const AccordionList: React.FC<IAccordionProps> = ({ data }) => {
    return (
        <Accordion selectionMode="multiple">
            {data?.map((items, i) => <AccordionItem key={i} aria-label={items?.title} title={items?.title}>
                {items?.content}
            </AccordionItem>)}
        </Accordion>
    );
}
