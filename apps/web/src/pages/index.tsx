import { Button } from "ui";
import { api } from "~/utils/api";

export default function Web() {


  const { data, isLoading } = api.products.byId.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-xl">Web</h1>
      <div className="text-gray-500">This is the web app</div>

      <div className="mt-4">
        <h2 className="font-bold text-lg">Products</h2>
        <ul>
          {data.name}
        </ul>
      </div>
      <Button />
    </div>
  );
}
