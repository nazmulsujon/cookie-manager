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
import { ArrowLeft, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { AssignCookieModal } from "./AssignCookieModal";
import { Cookie, SearchResultProps } from "@/types";

const SearchResult: React.FC<SearchResultProps> = ({ setContent }) => {
  const [data, setData] = useState<{
    email: string;
    name: string;
    cookies: Cookie[];
  }>({
    email: "nazmul@gmail.com",
    name: "Nazmul Hoque",
    cookies: [
      { url: "google.com", name: "first cookie", value: "first value" },
      { url: "facebook.com", name: "second cookie", value: "second value" },
      { url: "twitter.com", name: "third cookie", value: "third value" },
    ],
  });

  const [assignCookieModal, setAssignCookieModal] = useState<boolean>(false);

  // Function to handle adding a cookie
  const handleAdd = () => {
    setAssignCookieModal(true);
  };

  // Function to handle removing a cookie
  const handleRemove = (index: number) => {
    setData((prevData) => ({
      ...prevData,
      cookies: prevData.cookies.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="w-full">
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
                  <ArrowLeft size={24} />
                </Button>
                <div className="flex flex-col">
                  <span>Email: {data.email}</span>
                  <span>Name: {data.name}</span>
                </div>
              </div>
            </TableHead>
            <TableHead className="text-right">
              <Button
                variant="outline"
                size="icon"
                className="rounded-[6px]"
                onClick={handleAdd}
              >
                <PlusCircle size={24} />
              </Button>
              <AssignCookieModal
                open={assignCookieModal}
                setOpen={setAssignCookieModal}
              />
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>

      <div className="overflow-y-auto max-h-[70vh]">
        <Table>
          <TableBody>
            {data.cookies.map((cookie, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium py-2 flex flex-col">
                  <span className="capitalize">{cookie.url}</span>
                  <span>{cookie.name}</span>
                </TableCell>
                <TableCell className="text-right py-2 space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-[6px]"
                    onClick={() => handleRemove(index)}
                  >
                    <MinusCircle size={24} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Table>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>
              Total: {data.cookies.length} items
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default SearchResult;
