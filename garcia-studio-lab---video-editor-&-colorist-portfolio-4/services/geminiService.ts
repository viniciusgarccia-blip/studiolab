
import { GoogleGenAI } from "@google/genai";

// Function to handle the AI consultant interaction for Garcia Studio Lab's portfolio
export async function getConsultationResponse(userInput: string) {
  // Initialize the GoogleGenAI client inside the function to ensure it uses the current API key environment state
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: userInput,
      config: {
        systemInstruction: `Você é o "Garcia Studio AI", um consultor técnico sênior de pós-produção cinematográfica.
        
        REGRAS DE COMUNICAÇÃO (CRÍTICO):
        1. BREVIDADE MÁXIMA: Suas respostas devem ser curtas e diretas.
        2. ESTRUTURA: Use no máximo 2 blocos de texto ou 2 frases curtas por mensagem.
        3. FLUIDEZ: Mantenha a conversa limpa, focando em uma ideia técnica por vez.
        4. PERSONA: Profissional de elite, autoritário e minimalista.
        
        DIRETRIZES TÉCNICAS:
        - Fale sobre DaVinci Resolve, Color Science e Workflow Narrativo apenas se perguntado.
        - Transforme dúvidas em valor de negócio rapidamente.
        - Sempre incentive o próximo passo (Contato/WhatsApp).
        
        IDIOMA: Português do Brasil.
        ESTILO: Respostas "punchy" (de alto impacto), sem enrolação.`,
        temperature: 0.7,
        thinkingConfig: {
          thinkingBudget: 4000 // Reduzido para respostas mais rápidas e diretas
        }
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Pro API Error:", error);
    return "Tive um desvio técnico. Vamos falar diretamente pelo WhatsApp para uma consultoria personalizada?";
  }
}
