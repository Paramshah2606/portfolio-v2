import { sendMail } from "@/utils/email";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const result = await sendMail({ name, email, message });

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      throw result.error;
    }
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
