import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilePenLine, PlusCircle, Trash } from "lucide-react";
import React, { useState, ChangeEvent } from "react";
import { AddCookieDialog } from "./AddCookieDailog";

const cookies = [
  { url: "google.com", name: "first cookie", value: "cookie value" },
  { url: "facebook.com", name: "second cookie", value: "another value" },
  { url: "twitter.com", name: "third cookie", value: "value three" },
];

interface Cookie {
  url: string;
  name: string;
  value: string;
}

export default function AddCookie() {
  const [data, setData] = useState<Cookie[]>(cookies);
  const [addCookieModal, setAddCookieModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.url.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="flex justify-between my-4 px-4">
        <Input
          type="text"
          placeholder="Search by URL"
          value={search}
          onChange={handleSearch}
          className="border rounded p-2 w-80"
        />

        <Button
          variant="outline"
          size="icon"
          className="rounded-[6px]"
          onClick={() => setAddCookieModal(true)}
        >
          <PlusCircle className="size-5" />
        </Button>
        <AddCookieDialog open={addCookieModal} setOpen={setAddCookieModal} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cookies</TableHead>
            <TableHead className="text-center w-[200px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((cookie, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium py-2 flex flex-col">
                <span className="capitalize">{cookie.url}</span>
                <span>{cookie.name}</span>
                <span> {cookie.value}</span>
              </TableCell>
              <TableCell className="text-center w-[200px] py-2 space-x-2">
                <Button variant="outline" size="icon" className="rounded-[6px]">
                  <FilePenLine className="size-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-[6px]">
                  <Trash className="size-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>
              Total: {filteredData.length} items
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </React.Fragment>
  );
}
