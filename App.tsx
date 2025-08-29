import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AIChat } from "./components/AIChat";
import { OnboardingChecklist } from "./components/OnboardingChecklist";
import { DesignResources } from "./components/DesignResources";
import { LearningProgress } from "./components/LearningProgress";

export default function App() {
  const [activeTab, setActiveTab] = useState("chat");

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <AIChat />;
      case "onboarding":
        return <OnboardingChecklist />;
      case "resources":
        return <DesignResources />;
      case "progress":
        return <LearningProgress />;
      case "company-culture":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-2xl font-bold">🪐 noluniverse 회사 문화</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                놀멍, 안드로메다, 별 따기 등 우리만의 특별한 문화와 용어들을 익혀보세요!
              </p>
            </div>
            <DesignResources />
          </div>
        );
      case "promotion-design":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-2xl font-bold">🎨 프로모션 디자인 마스터</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                브랜딩, 광고, 마케팅 디자인의 기본 원칙부터 실무 활용까지 프로모션 디자인의 모든 것을 학습해보세요.
              </p>
            </div>
            <DesignResources />
          </div>
        );
      case "tools":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-2xl font-bold">🛠️ 프로모션 디자인 도구 마스터</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Adobe Illustrator, Photoshop, InDesign 등 프로모션 디자인 필수 도구들의 사용법을 익혀보세요.
              </p>
            </div>
            <DesignResources />
          </div>
        );
      case "systems":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-2xl font-bold">🛠️ 사내 시스템 가이드</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                COSMO, 슬랙, 시프티 등 회사에서 사용하는 시스템들의 사용법을 익혀보세요.
              </p>
            </div>
            <DesignResources />
          </div>
        );
      default:
        return <AIChat />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}