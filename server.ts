import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for Gemini AI assistant
  app.post("/api/ai-chat", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "프롬프트가 필요합니다." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "GEMINI_API_KEY가 설정되지 않았습니다. AI 스튜디오 세팅을 확인해주세요." 
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `당신은 홋카이도 삿포로 여행 전문가이자 친절한 가이드입니다. 
사용자가 렌트카 없이 대중교통(지하철, 노면전차, JR, 버스)으로 이동할 수 있는 가을 삿포로 여행 일정, 단풍 시기, 맛집(구글 리뷰 2000개 이상인 검증된 곳), 관광지 추천 등에 대해 전문적이고 실용적인 조언을 제공합니다. 
항상 친절하고 구체적이며 한국어로 답변해주세요.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\n질문: ${prompt}` }] }
        ],
      });

      const reply = response.text || "답변을 생성하지 못했습니다.";
      res.json({ reply });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "AI 응답 중 오류가 발생했습니다." });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
