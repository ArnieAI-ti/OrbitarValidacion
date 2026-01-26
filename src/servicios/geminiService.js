export const sendMessageToGemini = async (message, history = []) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error('API Key not configured');
    }

    try {
        const contents = history.map(msg => ({
            role: msg.role === 'ai' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));

        // Add the new message
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        });

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: contents,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1000,
                    }
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Error executing request to Gemini');
        }

        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiResponse) {
            throw new Error('Invalid format response from Gemini');
        }

        return aiResponse;

    } catch (error) {
        console.error('Error in geminiService:', error);
        throw error;
    }
};
