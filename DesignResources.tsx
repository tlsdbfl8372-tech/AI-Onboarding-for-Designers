import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ExternalLink, 
  Search, 
  Star, 
  Download,
  Bookmark,
  Video,
  FileText,
  Palette,
  Monitor,
  Users
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "article" | "video" | "tool" | "template" | "book";
  url: string;
  rating: number;
  tags: string[];
  isFavorite: boolean;
}

export function DesignResources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resources, setResources] = useState<Resource[]>([
    {
      id: "0",
      title: "noluniverse 신입사원 가이드",
      description: "회사 생활 꿀팁, 용어 사전, 사내 시스템 사용법 등 신입사원 필수 정보입니다.",
      category: "company",
      type: "article",
      url: "#",
      rating: 5.0,
      tags: ["신입사원", "회사문화", "필수"],
      isFavorite: true,
    },
    {
      id: "1",
      title: "Adobe Illustrator 프로모션 디자인 완벽 가이드",
      description: "일러스트레이터로 로고, 포스터, 브로슈어를 만드는 모든 기법을 다루는 가이드입니다.",
      category: "tools",
      type: "article",
      url: "#",
      rating: 4.8,
      tags: ["일러스트레이터", "프로모션", "로고"],
      isFavorite: true,
    },
    {
      id: "1.5",
      title: "슬랙 채널 가이드 📱",
      description: "#_anything (잡담), #_lobby_helpdesk (IT지원), #_lobby_hr_nol (HR문의) 등 주요 채널 사용법입니다.",
      category: "systems",
      type: "article",
      url: "#",
      rating: 4.9,
      tags: ["슬랙", "채널", "소통"],
      isFavorite: true,
    },
    {
      id: "2",
      title: "Adobe Photoshop 이미지 편집 & 합성 마스터",
      description: "포토샵을 활용한 광고 이미지 편집, 합성, 리터칭 기법을 배워보세요.",
      category: "tools",
      type: "video",
      url: "#",
      rating: 4.9,
      tags: ["포토샵", "이미지편집", "광고"],
      isFavorite: false,
    },
    {
      id: "3",
      title: "브랜딩 기초: 로고에서 브랜드 가이드라인까지",
      description: "효과적인 브랜딩을 위한 로고 디자인부터 브랜드 아이덴티티 구축까지의 전 과정입니다.",
      category: "branding",
      type: "video",
      url: "#",
      rating: 4.7,
      tags: ["브랜딩", "로고", "아이덴티티"],
      isFavorite: true,
    },
    {
      id: "4",
      title: "타이포그래피 완벽 가이드",
      description: "프로모션 디자인에서 효과적인 타이포그래피 활용법과 폰트 조합 방법을 학습하세요.",
      category: "principles",
      type: "book",
      url: "#",
      rating: 4.6,
      tags: ["타이포그래피", "폰트", "레이아웃"],
      isFavorite: false,
    },
    {
      id: "5",
      title: "무료 프로모션 디자인 템플릿 모음",
      description: "포스터, 플라이어, 브로슈어 등 다양한 프로모션 디자인 템플릿을 제공합니다.",
      category: "templates",
      type: "template",
      url: "#",
      rating: 4.5,
      tags: ["템플릿", "포스터", "무료"],
      isFavorite: false,
    },
    {
      id: "6",
      title: "클라이언트와의 효과적인 소통 방법",
      description: "프로모션 디자인 프로젝트에서 클라이언트와 원활한 소통을 위한 실무 팁입니다.",
      category: "collaboration",
      type: "video",
      url: "#",
      rating: 4.4,
      tags: ["소통", "클라이언트", "프로젝트"],
      isFavorite: true,
    },
    {
      id: "7",
      title: "색상 이론과 브랜드 컬러 적용",
      description: "색상의 기본 이론부터 브랜드별 효과적인 색상 조합과 활용법까지 다룹니다.",
      category: "principles",
      type: "article",
      url: "#",
      rating: 4.8,
      tags: ["색상", "브랜드", "컬러팔레트"],
      isFavorite: false,
    },
    {
      id: "8",
      title: "Adobe InDesign 편집 디자인 마스터",
      description: "카탈로그, 브로슈어, 매거진 등 편집 디자인을 위한 인디자인 활용법을 배워보세요.",
      category: "tools",
      type: "article",
      url: "#",
      rating: 4.3,
      tags: ["인디자인", "편집디자인", "출판"],
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setResources(prev => prev.map(resource => 
      resource.id === id ? { ...resource, isFavorite: !resource.isFavorite } : resource
    ));
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "article": return FileText;
      case "tool": return Monitor;
      case "template": return Download;
      case "book": return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-red-100 text-red-800";
      case "article": return "bg-blue-100 text-blue-800";
      case "tool": return "bg-green-100 text-green-800";
      case "template": return "bg-purple-100 text-purple-800";
      case "book": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const categories = [
    { id: "all", label: "전체", icon: FileText },
    { id: "company", label: "회사 가이드", icon: Users },
    { id: "systems", label: "사내 시스템", icon: Monitor },
    { id: "tools", label: "디자인 도구", icon: Palette },
    { id: "branding", label: "브랜딩", icon: Palette },
    { id: "principles", label: "디자인 원칙", icon: Palette },
    { id: "templates", label: "템플릿", icon: Download },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="리소스 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Star className="size-4 mr-2" />
          즐겨찾기
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid grid-cols-4 lg:grid-cols-7">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              <category.icon className="size-3 mr-1" />
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map(category => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {(category.id === "all" 
                ? filteredResources 
                : filteredResources.filter(r => r.category === category.id)
              ).map(resource => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge className={getTypeColor(resource.type)}>
                          <TypeIcon className="size-3 mr-1" />
                          {resource.type === "article" ? "글" : 
                           resource.type === "video" ? "영상" :
                           resource.type === "tool" ? "도구" :
                           resource.type === "template" ? "템플릿" : "책"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(resource.id)}
                        >
                          <Star className={`size-4 ${resource.isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
                        </Button>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{resource.rating}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {resource.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="size-3 mr-2" />
                          보기
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="size-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {filteredResources.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}