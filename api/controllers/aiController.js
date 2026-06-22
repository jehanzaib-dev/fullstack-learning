import { GoogleGenAI } from "@google/genai";

export const generatePost = async (req, res) => {
  try {
    const { prompt, tone } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // 1. Log to confirm the key is active at runtime
    console.log("CONTROLLER KEY AT RUNTIME:", process.env.GEMINI_API_KEY ? "Loaded Successfully" : "MISSING");

    // 2. Initialize the client dynamically inside the function execution scope
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const finalPrompt = `
You are a professional social media content writer.

Generate a social media post based on:

Topic: ${prompt}
Tone: ${tone || "casual"}

Rules:
- 2 to 4 lines
- Natural human tone
- Engaging and simple
- No hashtags unless necessary
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: finalPrompt,
    });

    return res.status(200).json({
      success: true,
      post: response.text,
    });

  } catch (error) {
    console.error("AI Generation Error:", error);

    return res.status(500).json({
      success: false,
      message: "AI generation failed",
      error: error.message,
    });
  }
};