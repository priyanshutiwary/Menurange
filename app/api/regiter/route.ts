// import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { earlyAccessRegistrations } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     if (!email) {
//       return NextResponse.json(
//         { error: "Email is required" },
//         { status: 400 }
//       );
//     }

//     // Check if email already exists
//     const existing = await db.query.earlyAccessRegistrations.findFirst({
//       where: eq(earlyAccessRegistrations.email, email),
//     });

//     if (existing) {
//       return NextResponse.json(
//         { message: "Email already registered" },
//         { status: 200 }
//       );
//     }

//     // Register new email
//     const registration = await db
//       .insert(earlyAccessRegistrations)
//       .values({ email })
//       .returning();

//     return NextResponse.json({
//       message: "Successfully registered for early access",
//       data: registration[0]
//     });
//   } catch (error) {
//     console.error("Error registering for early access:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }