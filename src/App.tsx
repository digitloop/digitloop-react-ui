import { Callout } from "@/components/ui/callout";
import { Pagination } from "./components/ui/pagination";

function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Digitloop React UI</h1>
      <div className="flex flex-col space-y-5">
        <Callout variant="destructive">
          This is a customizable callout component.
        </Callout>

        <Pagination
          currentPage={1}
          totalPage={5}
          renderItem={({ children }) => {
            return <div>{children}</div>;
          }}
        />
      </div>
    </div>
  );
}

export default App;
