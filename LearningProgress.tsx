import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  TrendingUp, 
  Target, 
  Trophy, 
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Award,
  BookOpen,
  Zap
} from "lucide-react";

export function LearningProgress() {
  const skillAreas = [
    { name: "회사 문화 적응", progress: 85, level: "고급", color: "bg-purple-500" },
    { name: "사내 시스템 활용", progress: 70, level: "중급", color: "bg-blue-500" },
    { name: "Adobe Illustrator", progress: 65, level: "중급", color: "bg-green-500" },
    { name: "브랜딩 & 로고 디자인", progress: 45, level: "초급", color: "bg-yellow-500" },
    { name: "타이포그래피", progress: 55, level: "중급", color: "bg-pink-500" },
    { name: "팀 협업", progress: 80, level: "고급", color: "bg-indigo-500" },
  ];

  const achievements = [
    { id: 1, title: "noluniverse 가입 🪐", icon: Star, earned: true, date: "2024-01-10" },
    { id: 2, title: "슬랙 프로필 완성", icon: CheckCircle, earned: true, date: "2024-01-11" },
    { id: 3, title: "첫 번째 놀멍 성공", icon: Award, earned: true, date: "2024-01-12" },
    { id: 4, title: "위성 프로젝트 참여", icon: Zap, earned: false, date: null },
    { id: 5, title: "별 따기 성공 ⭐", icon: Trophy, earned: false, date: null },
    { id: 6, title: "로켓 탑승 완료 🚀", icon: BookOpen, earned: false, date: null },
  ];

  const weeklyGoals = [
    { id: 1, title: "#_anything 채널에서 점심 메뉴 추천받기", completed: true },
    { id: 2, title: "팀 동료들과 사내 카페에서 커피 한잔", completed: true },
    { id: 3, title: "첫 번째 로고 디자인 시안 3개 완성하기", completed: false },
    { id: 4, title: "브랜드 가이드라인에 맞는 포스터 디자인", completed: false },
  ];

  const stats = [
    { label: "완료한 온보딩", value: "3/8", icon: CheckCircle, color: "text-green-600" },
    { label: "적응 시간", value: "2주", icon: Clock, color: "text-blue-600" },
    { label: "획득한 배지", value: "3", icon: Award, color: "text-yellow-600" },
    { label: "연속 출근일", value: "12일", icon: Calendar, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      {/* 전체 통계 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
                <stat.icon className={`size-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 스킬 영역별 진행상황 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            스킬 영역별 진행상황
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {skillAreas.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h4 className="font-medium">{skill.name}</h4>
                  <Badge 
                    variant="outline" 
                    className={
                      skill.level === "고급" ? "bg-green-100 text-green-800" :
                      skill.level === "중급" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }
                  >
                    {skill.level}
                  </Badge>
                </div>
                <span className="text-sm font-medium">{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 이번 주 목표 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="size-5" />
            이번 주 목표
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {weeklyGoals.map((goal) => (
            <div key={goal.id} className="flex items-center gap-3">
              <CheckCircle 
                className={`size-5 ${
                  goal.completed ? "text-green-600" : "text-gray-300"
                }`} 
              />
              <span className={goal.completed ? "line-through text-muted-foreground" : ""}>
                {goal.title}
              </span>
            </div>
          ))}
          <div className="pt-3 border-t">
            <Button variant="outline" className="w-full">
              새 목표 추가
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 획득한 배지/성취 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            성취 배지
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`border rounded-lg p-4 text-center space-y-2 ${
                  achievement.earned 
                    ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200" 
                    : "bg-muted/50 border-dashed"
                }`}
              >
                <achievement.icon 
                  className={`size-8 mx-auto ${
                    achievement.earned ? "text-yellow-600" : "text-gray-400"
                  }`} 
                />
                <h4 className="font-medium text-sm">{achievement.title}</h4>
                {achievement.earned && achievement.date && (
                  <p className="text-xs text-muted-foreground">
                    {achievement.date}
                  </p>
                )}
                {!achievement.earned && (
                  <Badge variant="outline" className="text-xs">
                    잠금
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 다음 목표 추천 */}
      <Card>
        <CardHeader>
          <CardTitle>다음에 도전해볼 만한 목표</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">첫 번째 브랜드 로고 디자인 🎨</h4>
              <Badge variant="outline">권장</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              간단한 브랜드의 로고 디자인을 통해 브랜딩의 기초와 일러스트레이터 활용법을 익혀보세요.
            </p>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">예상 소요 시간: 2-3일</span>
            </div>
            <Button size="sm" className="w-full">
              시작하기
            </Button>
          </div>
          
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">첫 번째 완성도 높은 프로모션 캠페인 🚀</h4>
              <Badge variant="outline">도전</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              브랜드 가이드라인을 준수하며 포스터, 브로슈어, SNS 콘텐츠까지 통합 캠페인을 완성해보세요!
            </p>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">예상 소요 시간: 1-2주</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              자세히 보기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}