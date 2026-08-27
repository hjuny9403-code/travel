import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2, ArrowRight } from 'lucide-react';

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: '안녕하세요! 🍁 가을 삿포로 뚜벅이 여행 플래너 AI입니다. 렌트 없이 이동하는 방법, 단풍 절정기 추천 코스, 구글 리뷰 2,000개가 넘는 맛집 예약 팁 등 궁금한 점을 무엇이든 물어보세요!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestedQuestions = [
    "10월 말 삿포로 날씨와 입어야 할 옷차림이 궁금해요.",
    "렌트 없이 조잔케이 온천 가는 방법과 버스 예약 팁을 알려주세요.",
    "오타루 당일치기 코스에서 꼭 먹어야 할 디저트는 뭔가요?",
    "구글 리뷰 2000개 넘는 스프카레와 라멘 맛집 추천해주세요."
  ];

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    if (!questionText) setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'AI 응답을 가져오지 못했습니다.');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: `오류가 발생했습니다: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gemini AI 삿포로 여행 전문가</span>
        </div>
        <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          AI 맞춤 삿포로 여행 가이드
        </h2>
        <p className="text-stone-600 text-sm mt-1">
          궁금한 여행 정보나 나만의 맞춤 일정을 AI에게 실시간으로 질문해보세요.
        </p>
      </div>

      {/* Suggested Questions */}
      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
        <span className="text-xs font-bold text-stone-500 block mb-3">💡 자주 묻는 질문 추천</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-left bg-white hover:bg-amber-50 hover:border-amber-300 transition-all p-3 rounded-xl border border-stone-200 text-xs text-stone-700 flex items-center justify-between group"
            >
              <span>{q}</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0 ml-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[550px]">
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.role === 'user'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-900 text-white shadow-sm'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-amber-600 text-white rounded-tr-xs'
                    : 'bg-stone-100 text-stone-800 rounded-tl-xs'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-stone-100 rounded-2xl px-5 py-3 text-stone-500 flex items-center gap-2 text-sm">
                <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                <span>AI 가이드가 답변을 작성 중입니다...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-stone-50 border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="예: 3박 4일 일정 중에 오타루 대신 다른 곳을 갈 수 있나요?"
              className="flex-1 bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-medium flex items-center gap-2 transition-all shadow-sm"
            >
              <span>보내기</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
