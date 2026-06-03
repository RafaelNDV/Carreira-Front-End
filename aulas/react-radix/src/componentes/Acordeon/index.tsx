import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const faqData = [
  {
    id: 1,
    title: "Ut enim ad minima veniam?",
    subtitle:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 2,
    title: "Ut enim ad minima veniam?",
    subtitle:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 3,
    title: "Ut enim ad minima veniam?",
    subtitle:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const AccordionDemo = () => {
  return (
    <Accordion.Root className="AccordionRoot" type="single" collapsible>
      {faqData.map((faq, index) => {
        return (
          <Accordion.Item
            className="AccordionItem"
            key={index}
            value={`item-${index}`}
          >
            <Accordion.Trigger className="AccordionTrigger">
              {faq.title}
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent">
              {faq.subtitle}
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

export default AccordionDemo;