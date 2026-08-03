import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold">Hello Im Carl Joseph Sumagang</h1>
      </section>
      <section className="flex justify-center items-center bg-black h-100">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle> Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="carl@example.com"
                    required
                    className="border border-[#3b3b3b] py-1.5 px-2 rounded-lg"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    required
                    className="border border-[#3b3b3b] py-1.5 px-2 rounded-lg"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <button className="bg-white/80 text-black w-80 py-1 rounded-lg">
              Login
            </button>
            <button className="bg-transaparent border border-[#3b3b3b] text-white/80 w-80 py-1 rounded-lg">
              Login With Google
            </button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
