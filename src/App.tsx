import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCookie from "./AddCookie/AddCookie";
import { AssignCookie } from "./AssignCookie/AssignCookie";

export default function App() {
  return (
    <div className="max-w-5xl max-h-screen mx-auto border">
      <Tabs defaultValue="add-cookie" className="w-full">
        <TabsList className="w-full justify-start rounded-none py-8 px-4">
          <TabsTrigger value="add-cookie" className="p-3">
            Add Cookie
          </TabsTrigger>
          <TabsTrigger value="assign-cookie" className="p-3">
            Assign Cookie
          </TabsTrigger>
        </TabsList>
        <TabsContent value="add-cookie">
          <AddCookie />
        </TabsContent>
        <TabsContent value="assign-cookie">
          <AssignCookie />
        </TabsContent>
      </Tabs>
    </div>
  );
}
