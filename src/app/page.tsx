import Button from "@/components/Button";
import Rail from "@/components/Rail/Rail";
import { railItems } from "@/components/Rail/mocks/railItems";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Button>Press the botton</Button>
      <Rail id={0} title="Hero rail" items={railItems} />
    </div>
  );
}
