import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const earlyAccessRegistrations = pgTable("early_access_registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});