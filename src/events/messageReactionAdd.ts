import { MessageReaction, User } from "discord.js";

export default async (messageReaction: MessageReaction, user: User) => {
  if (user.bot) return;
};
