import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({
  title,
  description,
  buttonLabel,
  buttonVariant = "primary",
}: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:bg-gray-50 transition-colors">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant={buttonVariant}>{buttonLabel}</Button>
    </div>
  );
}
