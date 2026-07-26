exports.handler = async (event) => {
  try {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Telegram function is ready!",
        botConfigured: !!BOT_TOKEN,
        chatConfigured: !!CHAT_ID
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};