import { CookieDialog } from "@/Common/CookieDailog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cookie, SearchResultProps } from "@/types";
import { ArrowLeft, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function SearchResult({ setContent }: SearchResultProps) {
  const [data, setData] = useState({
    email: "nazmul@gmail.com",
    name: "Nazmul Hoque",
    cookies: [
      { url: "google.com", name: "first cookie", value: "first value" },
      { url: "facebook.com", name: "second cookie", value: "second value" },
      { url: "twitter.com", name: "third cookie", value: "third value" },
    ],
  });
  const [cookieModal, setCookieModal] = useState<boolean>(false);
  const [mode, setMode] = useState<"add" | "edit">("add");

  const handleAdd = () => {
    setMode("add");
    setCookieModal(true);
  };

  const handleSave = (cookie: Cookie) => {
    if (mode === "add") {
      setData((prevData) => ({
        ...prevData,
        cookies: [...prevData.cookies, cookie],
      }));
    }
    setCookieModal(false);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="py-4">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-[6px]"
                onClick={() => setContent("search-card")}
              >
                <ArrowLeft className="size-5" />
              </Button>
              <div className="flex flex-col">
                <span>Email: {data.email}</span>
                <span>Name: {data.name}</span>
              </div>
            </div>
          </TableHead>
          <TableHead className="text-center w-[200px]">
            <Button
              variant="outline"
              size="icon"
              className="rounded-[6px]"
              onClick={handleAdd}
            >
              <PlusCircle className="size-5" />
            </Button>
            <CookieDialog
              open={cookieModal}
              setOpen={setCookieModal}
              onSave={handleSave}
              mode={mode}
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.cookies.map((cookie, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium py-2 flex flex-col">
              <span className="capitalize">{cookie.url}</span>
              <span>{cookie.name}</span>
            </TableCell>
            <TableCell className="text-center w-[200px] py-2 space-x-2">
              <Button variant="outline" size="icon" className="rounded-[6px]">
                <MinusCircle className="size-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total: {data.cookies.length} items</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
