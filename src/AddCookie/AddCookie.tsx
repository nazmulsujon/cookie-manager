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
import { Cookie } from "@/types";
import { FilePenLine, PlusCircle, Trash } from "lucide-react";
import React, { useState, ChangeEvent } from "react";
import { CookieDialog } from "./CookieDailog";

export const initialCookies: Cookie[] = [
  { url: "google.com", name: "first cookie", value: "first value" },
  { url: "facebook.com", name: "second cookie", value: "second value" },
  { url: "twitter.com", name: "third cookie", value: "third value" },
  { url: "google.com", name: "first cookie", value: "first value" },
  { url: "facebook.com", name: "second cookie", value: "second value" },
  { url: "twitter.com", name: "third cookie", value: "third value" },
  { url: "google.com", name: "first cookie", value: "first value" },
  { url: "facebook.com", name: "second cookie", value: "second value" },
  { url: "twitter.com", name: "third cookie", value: "third value" },
  { url: "google.com", name: "first cookie", value: "first value" },
  { url: "facebook.com", name: "second cookie", value: "second value" },
  { url: "twitter.com", name: "third cookie", value: "third value" },
  { url: "google.com", name: "first cookie", value: "first value" },
  { url: "facebook.com", name: "second cookie", value: "second value" },
  { url: "twitter.com", name: "third cookie", value: "third value" },
];

export default function AddCookie() {
  const [data, setData] = useState<Cookie[]>(initialCookies);
  const [selectedCookie, setSelectedCookie] = useState<Cookie | null>(null);
  const [cookieModal, setCookieModal] = useState<boolean>(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [search, setSearch] = useState<string>("");

  const handleAdd = () => {
    setSelectedCookie(null);
    setMode("add");
    setCookieModal(true);
  };

  const handleDeleteCookie = (cookie: Cookie) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this cookie?"
    );
    if (confirmDelete) {
      setData(data.filter((item) => item !== cookie));
    }
  };

  const handleEdit = (cookie: Cookie) => {
    setSelectedCookie(cookie);
    setMode("edit");
    setCookieModal(true);
  };

  const handleSave = (cookie: Cookie) => {
    if (mode === "add") {
      setData([...data, cookie]);
    } else if (mode === "edit") {
      setData(data.map((item) => (item === selectedCookie ? cookie : item)));
    }
    setCookieModal(false);
  };

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
          onClick={handleAdd}
        >
          <PlusCircle className="size-5" />
        </Button>
        <CookieDialog
          open={cookieModal}
          setOpen={setCookieModal}
          cookie={selectedCookie}
          onSave={handleSave}
          mode={mode}
        />
      </div>

      <div className="overflow-y-auto max-h-[70vh]">
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-[6px]"
                    onClick={() => handleEdit(cookie)}
                  >
                    <FilePenLine className="size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-[6px]"
                    onClick={() => handleDeleteCookie(cookie)}
                  >
                    <Trash className="size-5" />
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
              Total: {filteredData.length} items
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </React.Fragment>
  );
}
