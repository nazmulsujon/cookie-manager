import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import SearchResult from "./SearchResult";

export function AssignCookie() {
  const [content, setContent] = useState<"search-card" | "search-result">(
    "search-card"
  );

  return (
    <React.Fragment>
      {content === "search-card" && (
        <Card className="w-[400px] mx-auto my-6">
          <CardContent className="mt-6">
            <div className="flex space-x-2">
              <Input
                id="name"
                placeholder="Search by email"
                type="email"
                className=""
              />
              <Button
                onClick={() => setContent("search-result")}
                variant="outline"
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      {content === "search-result" && <SearchResult setContent={setContent} />}
    </React.Fragment>
  );
}
