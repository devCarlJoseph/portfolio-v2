import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold">Hello Im Carl Joseph Sumagang</h1>
      </section>
      <section>
        <Card className="w-full max-w-sm gap-0">
          <CardHeader className="bg-red-200">
            <CardTitle> This is My Card Title</CardTitle>
          </CardHeader>
          <CardContent className="bg-red-200 ">
            This is My Card Content
          </CardContent>

          Kaon sako guys hahaha
        </Card>
      </section>
    </>
  );
}
