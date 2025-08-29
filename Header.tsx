import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Settings, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">🪐</span>
            </div>
            <div>
              <h1 className="font-medium">noluniverse AI 버디</h1>
              <Badge variant="secondary" className="text-xs">신입 디자이너 전용</Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Bell className="size-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="size-4" />
          </Button>
          <Avatar className="size-8">
            <AvatarImage src="" />
            <AvatarFallback>신입</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}