import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { Send, Sparkles, Clock } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요! noluniverse에 오신 것을 진심으로 환영합니다! 저는 신규 입사자님의 회사 생활 적응을 돕기 위해 태어난 AI 버디예요. 앞으로 궁금한 점이 있다면 무엇이든 물어보세요! 제가 아는 모든 것을 알려드릴게요. 😊",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "회사 점심 맛집 추천해주세요!",
    "연차는 어떻게 신청하나요?",
    "노트북에 문제가 생겼어요",
    "법인카드가 필요해요",
    "noluniverse 용어가 어려워요",
    "일러스트레이터 기본 사용법을 알고 싶어요",
  ];

  const handleSendMessage = (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(messageContent),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    // 회사 생활 관련
    if (question.includes("점심") || question.includes("맛집")) {
      return "점심 맛집 찾기는 noluniverse의 꿀팁 중 하나예요! 슬랙의 #_anything 채널에 \"점심 뭐 먹을까요?\"라고 물어보세요! 동료들이 숨겨진 맛집을 알려줄 거예요. 🍜\n\n처음엔 부담스러우시겠지만, 우리 회사 문화는 정말 자유롭고 따뜻해서 금방 편해지실 거예요!";
    }
    if (question.includes("연차") || question.includes("휴가")) {
      return "연차 사용은 시프티(Shiftee) 앱에서 신청하면 되고, 관련 정책이 궁금할 땐 HR팀에 문의하면 가장 정확해요! 슬랙 채널 #_lobby_hr_nol 에 질문을 남겨주시면 담당자분이 친절하게 알려주실 거예요. 😊";
    }
    if (question.includes("노트북") || question.includes("PC") || question.includes("컴퓨터")) {
      return "노트북에 문제가 생겼나요? 걱정 마세요! IT 헬프데스크에 문의하면 바로 해결해 줄 거예요. 슬랙 채널 #_lobby_helpdesk 로 증상을 남겨주시면 담당자분이 빠르게 확인해주실 거예요! 💻";
    }
    if (question.includes("법인카드")) {
      return "법인카드 발급은 재무팀에서 담당하고 있어요. 슬랙 채널 #lobby_법인카드_nol 로 신청 문의를 남기면 담당자분이 절차를 안내해 주실 거예요! 외부 미팅 많으시군요! 화이팅! 💳";
    }
    if (question.includes("용어") || question.includes("놀멍") || question.includes("안드로메다")) {
      return "noluniverse 용어 사전! 🪐\n\n**놀멍**: '놀유니버스'와 '멍때리기'의 합성어. 업무 중 잠깐 머리를 식히는 짧은 휴식!\n**안드로메다**: 좋은 아이디어지만 현재는 실현 어려운 미래 이야기\n**별 따기**: 프로젝트 핵심 목표 달성! ⭐\n**로켓 탑승**: 중요한 신규 프로젝트 합류\n**웜홀**: 복잡한 문제 해결을 위한 집중 회의\n\n더 궁금한 용어가 있으면 언제든 물어보세요!";
    }
    
    // 디자인 관련
    if (question.includes("일러스트") || question.includes("illustrator")) {
      return "일러스트레이터는 프로모션 디자인의 핵심 도구예요! 벡터 기반으로 로고, 포스터, 브로슈어 등을 만들 수 있습니다:\n\n1. Pen Tool (P) - 로고나 일러스트 제작의 기본\n2. Type Tool (T) - 타이포그래피 디자인\n3. Shape Tools - 기본 도형으로 레이아웃 구성\n4. Pathfinder - 도형 합치기/빼기\n5. Gradient Tool - 아름다운 그라데이션\n\n브랜딩 작업이나 인쇄물 디자인할 때 꼭 필요한 도구들이에요! 실습 프로젝트가 있다면 도와드릴게요!";
    }
    if (question.includes("포토샵") || question.includes("photoshop")) {
      return "포토샵은 프로모션 디자인에서 이미지 편집과 합성의 필수 도구예요!\n\n주요 기능들:\n- **이미지 보정**: 색상, 밝기, 대비 조정\n- **합성**: 여러 이미지를 자연스럽게 결합\n- **텍스트 효과**: 광고용 임팩트 있는 글자 디자인\n- **필터**: 다양한 스타일과 효과 적용\n- **마스킹**: 정교한 이미지 편집\n\n광고 배너, SNS 콘텐츠, 브로슈어 등에서 활용도가 높아요!";
    }
    if (question.includes("브랜딩") || question.includes("브랜드")) {
      return "브랜딩은 프로모션 디자인의 핵심이에요! 브랜드의 정체성을 시각적으로 표현하는 작업입니다:\n\n**브랜딩 요소들:**\n- 로고 디자인\n- 컬러 팔레트 (브랜드 고유 색상)\n- 타이포그래피 (브랜드 전용 폰트)\n- 그래픽 요소 (패턴, 아이콘, 일러스트)\n- 톤앤매너 (브랜드 성격과 분위기)\n\n**목표:** 브랜드의 가치와 개성을 일관되게 전달\n\nnoluniverse의 브랜딩 가이드라인도 참고하시면 좋을 거예요!";
    }
    if (question.includes("타이포그래피") || question.includes("폰트")) {
      return "타이포그래피는 프로모션 디자인에서 메시지를 전달하는 핵심 요소예요!\n\n**기본 원칙:**\n- **가독성**: 읽기 쉬워야 함\n- **위계**: 제목, 부제목, 본문의 차별화\n- **조화**: 브랜드와 어울리는 폰트 선택\n- **감정**: 폰트로 분위기와 느낌 전달\n\n**프로모션 디자인 활용:**\n- 광고 헤드라인: 임팩트 있는 굵은 폰트\n- 브로슈어: 세련되고 읽기 쉬운 폰트\n- 포스터: 멀리서도 보이는 대비 강한 폰트\n\n폰트 조합 연습을 많이 해보세요!";
    }
    if (question.includes("어려워") || question.includes("힘들어") || question.includes("적응")) {
      return "새로운 환경에 적응하는 건 정말 쉽지 않죠. 처음에는 누구나 막막하고 어렵게 느껴질 수 있어요. 그런 마음이 드는 건 너무나 당연한 과정이에요. 💙\n\n업무도, 사람도 낯설어서 더 그렇게 느끼실 수 있어요. 조급해하지 않아도 괜찮아요. 천천히 스며드는 시간이라고 생각해주세요.\n\n작은 것부터 하나씩 해결해 나가다 보면 어느새 익숙해진 자신을 발견할 수 있을 거예요. 모르는 건 주변 동료나 팀장님께 편하게 물어보세요! 모두가 님의 적응을 응원하고 있답니다.\n\n충분히 잘 해낼 수 있는 분이라고 믿어요! 제가 항상 옆에서 응원하고 있을게요. 파이팅! 💪";
    }
    
    return "궁금한 점이 있으시군요! 더 구체적으로 알려주시면 도움을 드릴 수 있어요. 회사 생활, 업무 관련, 디자인 질문 등 무엇이든 편하게 물어보세요! 😊";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <span className="text-lg">🪐</span>
          </div>
          <div>
            <h2 className="font-medium">noluniverse AI 버디</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span>항상 온라인</span>
            </div>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="size-8">
                {message.sender === "ai" ? (
                  <>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                      AI
                    </AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="" />
                    <AvatarFallback className="text-xs">신입</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div className={`flex-1 max-w-xs ${message.sender === "user" ? "flex justify-end" : ""}`}>
                <Card className={`p-3 ${message.sender === "user" ? "bg-primary text-primary-foreground" : ""}`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs opacity-70">
                    <Clock className="size-3" />
                    <span>{message.timestamp.toLocaleTimeString()}</span>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {quickQuestions.length > 0 && (
        <div className="border-t p-4">
          <p className="text-sm text-muted-foreground mb-3">자주 묻는 질문:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.slice(0, 3).map((question, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-accent text-xs p-2"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            placeholder="궁금한 것을 물어보세요..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={() => handleSendMessage()} disabled={!inputValue.trim()}>
            <Send className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}