import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const userTable = defineTable({
  name: v.string(),
  userName: v.string(),
  image: v.string(),
  email: v.string(),
  emailVerified: v.boolean(),
  tokenIdentifier: v.string(),
  topLanguages: v.array(v.string()),
  languagesMap: v.any(),
  averageAccuracy: v.float64(),
  averageCpm: v.float64(),
  resultIds: v.array(v.id("result")),
  achievementIds: v.array(v.id("achievement")),
  snippetIds: v.array(v.id("snippet")),
  snippetVoteIds: v.array(v.id("snippetVote")),
  raceParticipantIds: v.array(v.id("RaceParticipant")),
  notificationIds: v.array(v.id("notification")),
})
  .index("by_token", ["tokenIdentifier"])
  .index("by_fiedls", ["name", "userName", "email"]);

const resultTable = defineTable({
  accuracy: v.float64(),
  cpm: v.int64(),
  takenTime: v.string(),
  errorCount: v.optional(v.int64()),
  userId: v.id("user"),
  snippetId: v.id("snippet"),
  raceParticipant: v.array(v.id("raceParticipant")),
})
  .index("by_userId", ["userId"]);

const acheivementsTable = defineTable({
  userId: v.id("user"),
  achievementType: v.union(
    v.literal("FIRST_RACE"),
    v.literal("FIRST_SNIPPET"),
    v.literal("FIFTH_RACE"),
  ),
  unloackedAt: v.string(),
})
  .index("by_userId", ["userId"]);

const snippetTable = defineTable({
  name: v.string(),
  code: v.string(),
  language: v.string(),
  userId: v.optional(v.id("user")),
  onReview: v.boolean(),
  rating: v.int64(),
  resultId: v.array(v.id("result")),
  voteIds: v.array(v.id("snippetVote")),
  Race: v.array(v.id("race")),
})
  .index("by_userId", ["userId"])
  .index("by_name", ["name"]);

const raceTable = defineTable({
  snippetId: v.id("snippet"),
  participantIds: v.array(v.id("raceParticipant")),
  startedAt: v.string(),
  endedAt: v.string(),
});

const raceParticipantTable = defineTable({
  raceId: v.id("race"),
  userId: v.optional(v.id("user")),
  resultId: v.optional(v.id("result")),
})
  .index("by_userId", ["userId"]);

const snippetVoteTable = defineTable({
  snippetId: v.id("snippet"),
  userId: v.id("user"),
  type: v.union(v.literal("UP"), v.literal("DOWN")),
})
  .index("by_userId", ["userId"]);

const notificationTable = defineTable({
  title: v.string(),
  description: v.string(),
  ctaUrl: v.optional(v.string()),
  read: v.boolean(),
  userId: v.id("user"),
})
  .index("by_userId", ["userId"]);

export default defineSchema({
  user: userTable,
  result: resultTable,
  acheivement: acheivementsTable,
  snippet: snippetTable,
  race: raceTable,
  raceParticipant: raceParticipantTable,
  snippetVote: snippetVoteTable,
  notification: notificationTable,
});
