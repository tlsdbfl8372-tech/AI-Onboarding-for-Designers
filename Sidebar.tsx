import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  MessageCircle, 
  CheckSquare, 
  BookOpen, 
  TrendingUp, 
  Palette,
  Monitor,
  Users,
  FileText
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: "chat", label: "AI 버디 채팅", icon: MessageCircle, badge: null },
    { id: "onboarding", label: "온보딩 체크리스트", icon: CheckSquare, badge: "3/8" },
    { id: "resources", label: "회사 가이드 & 리소스", icon: BookOpen, badge: null },
    { id: "progress", label: "적응 진행상황", icon: TrendingUp, badge: null },
  ];

  const categories = [
    { id: "company-culture", label: "회사 문화", icon: Users },
    { id: "tools", label: "디자인 도구", icon: Monitor },
    { id: "systems", label: "사내 시스템", icon: FileText },
    { id: "promotion-design", label: "프로모션 디자인", icon: Palette },
  ];

  return (
    <div className="w-64 border-r bg-muted/50 p-4 space-y-6">
      <div>
        <h3 className="font-medium mb-3 text-sm text-muted-foreground">메인 메뉴</h3>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
              onClick={() => onTabChange(item.id)}
            >
              <item.icon className="size-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="outline" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3 text-sm text-muted-foreground">학습 카테고리</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeTab === category.id ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
              onClick={() => onTabChange(category.id)}
            >
              <category.icon className="size-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">학습 진도</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>전체 진행률</span>
            <span>68%</span>
          </div>
          <Progress value={68} className="h-2" />
        </div>
        <p className="text-xs text-muted-foreground">
          계속 좋은 진전을 보이고 있어요! 💪
        </p>
      </div>
    </div>
  );
}