import * as dotenv from "dotenv";

dotenv.config();

export const bot = {
  id: process.env.BOT_ID || "",
  token: process.env.BOT_TOKEN || "",
  guidId: process.env.GUILD_ID || "",
};

export let messagesId: string[] = [];

export const prefix = process.env?.PREFIX_COMMAND || "!";

export default {
  bot,
  messagesId,
  prefix,
};
