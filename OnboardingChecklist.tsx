import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { 
  CheckCircle, 
  Clock, 
  Star, 
  BookOpen, 
  Users, 
  Monitor,
  Palette,
  FileText
} from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "쉬움" | "보통" | "어려움";
  estimatedTime: string;
  completed: boolean;
  icon: any;
}

export function OnboardingChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: "1",
      title: "슬랙 프로필 설정 및 채널 가입",
      description: "슬랙 프로필에 역할과 팀을 명시하고, 주요 채널(#_anything, #_lobby_helpdesk 등)에 가입하세요.",
      category: "회사 시스템",
      difficulty: "쉬움",
      estimatedTime: "15분",
      completed: true,
      icon: Users,
    },
    {
      id: "2",
      title: "COSMO 시스템 계정 활성화",
      description: "휴가 신청, 비품 신청 등을 위한 내부 시스템 COSMO에 로그인하고 기능을 확인하세요.",
      category: "회사 시스템",
      difficulty: "쉬움",
      estimatedTime: "20분",
      completed: true,
      icon: Monitor,
    },
    {
      id: "3",
      title: "noluniverse 용어 사전 숙지",
      description: "놀멍, 안드로메다, 별 따기 등 회사 고유 용어들을 이해하고 익숙해지세요.",
      category: "회사 문화",
      difficulty: "쉬움",
      estimatedTime: "30분",
      completed: true,
      icon: BookOpen,
    },
    {
      id: "4",
      title: "팀 소개 및 첫인사 완료",
      description: "팀원들에게 '안녕하세요, 이번에 디자인팀에 입사한 OOO입니다!'라고 밝게 인사해보세요.",
      category: "팀 협업",
      difficulty: "쉬움",
      estimatedTime: "30분",
      completed: false,
      icon: Users,
    },
    {
      id: "5",
      title: "Adobe Creative Suite 계정 설정",
      description: "일러스트레이터, 포토샵, 인디자인 등 프로모션 디자인 필수 도구들을 설정하세요.",
      category: "도구 설정",
      difficulty: "보통",
      estimatedTime: "45분",
      completed: false,
      icon: Palette,
    },
    {
      id: "6",
      title: "회사 브랜드 가이드라인 학습",
      description: "noluniverse 브랜드의 로고, 컬러, 타이포그래피, 톤앤매너 가이드라인을 숙지하세요.",
      category: "브랜딩",
      difficulty: "보통",
      estimatedTime: "1시간",
      completed: false,
      icon: Palette,
    },
    {
      id: "7",
      title: "첫 번째 프로모션 디자인 작업",
      description: "간단한 SNS 콘텐츠나 사내 공지 포스터 등 작은 프로모션 디자인 작업에 참여해보세요.",
      category: "실무 경험",
      difficulty: "보통",
      estimatedTime: "2-3일",
      completed: false,
      icon: Star,
    },
    {
      id: "8",
      title: "브랜드 일관성 유지한 첫 번째 캠페인 완성",
      description: "회사 브랜드 가이드라인을 준수하며 완성도 높은 프로모션 디자인을 완성해보세요!",
      category: "실무 경험",
      difficulty: "어려움",
      estimatedTime: "1-2주",
      completed: false,
      icon: Star,
    },
  ]);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = items.filter(item => item.completed).length;
  const completionRate = Math.round((completedCount / items.length) * 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "쉬움": return "bg-green-100 text-green-800";
      case "보통": return "bg-yellow-100 text-yellow-800";
      case "어려움": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="size-5" />
            온보딩 진행 상황
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>완료된 항목</span>
            <span>{completedCount}/{items.length}</span>
          </div>
          <Progress value={completionRate} className="h-3" />
          <p className="text-sm text-muted-foreground">
            {completionRate}% 완료 - 좋은 진전을 보이고 있어요! 🎉
          </p>
        </CardContent>
      </Card>

      {categories.map(category => {
        const categoryItems = items.filter(item => item.category === category);
        const categoryCompleted = categoryItems.filter(item => item.completed).length;
        
        return (
          <Card key={category}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{category}</CardTitle>
                <Badge variant="outline">
                  {categoryCompleted}/{categoryItems.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {categoryItems.map(item => (
                <div
                  key={item.id}
                  className={`border rounded-lg p-4 transition-all ${
                    item.completed ? "bg-muted/50" : "bg-background"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <item.icon className="size-4" />
                        <h4 className={`font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={getDifficultyColor(item.difficulty)}
                        >
                          {item.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          <span>{item.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })}

      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <h3 className="font-medium">모든 항목을 완료하셨나요?</h3>
            <p className="text-sm text-muted-foreground">
              축하드려요! 이제 본격적인 디자이너로서의 여정을 시작하실 준비가 되었습니다.
            </p>
            <Button className="w-full">
              다음 단계 가이드 보기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}