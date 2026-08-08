import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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

      <section></section>
      <section>
        <div>
          <Label>Username</Label>
          <Input placeholder="username" />
        </div>
      </section>
    </>
  );
}
