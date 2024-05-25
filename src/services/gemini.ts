import { ChatSession, GoogleGenerativeAI } from "@google/generative-ai";

export const getNewChat = () => {
    const genAi = new GoogleGenerativeAI("AIzaSyA7EdeyG7W8hoysYQdfkmi8l0wfPARWh_c");
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    return model.startChat({});
}

export const sendMessage = async (chat: ChatSession, msg: string) => {
    try {
        const result = await chat.sendMessage(msg);
        console.log(result.response.text())

        return result
    } catch (error) {
        console.log('Gemini error')
    }
}