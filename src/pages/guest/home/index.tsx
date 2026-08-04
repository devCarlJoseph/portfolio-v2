import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold">Hello Im Carl Joseph Sumagang</h1>
      </section>
      <section className="flex justify-center items-center h-100">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex-col gap-3"></CardFooter>
        </Card>
      </section>
      <section>
        <Button>This is my Button</Button>
      </section>

      <section>
        <Accordion>
          <AccordionItem value="item-1">
            <AccordionTrigger value="item-1">What is React?</AccordionTrigger>

            <AccordionContent value="item-1">
              React is a JavaScript library for building user interfaces.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger value="item-2">
              What is TypeScript?
            </AccordionTrigger>

            <AccordionContent value="item-2">
              TypeScript is JavaScript with types.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
