'use server'

import { db } from "@/db";
import { earlyAccessRegistrations } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function registerForEarlyAccess(email: string) {
  try {
    // Check if email already exists
    const existing = await db
      .select()
      .from(earlyAccessRegistrations)
      .where(eq(earlyAccessRegistrations.email, email))
      .execute();

    if (existing.length > 0) {
      return { success: true, message: "Email already registered" };
    }

    // Register new email
    await db
      .insert(earlyAccessRegistrations)
      .values({ email })
      .execute();

    return { success: true, message: "Successfully registered for early access" };
  } catch (error) {
    console.error("Error registering for early access:", error);
    return { success: false, message: "Failed to register. Please try again." };
  }
}