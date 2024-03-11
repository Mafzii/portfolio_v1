import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API);

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      const resendStatus = await resend.emails.send({
        from: "portfolio@resend.dev",
        to: [process.env.EMAIL_TO],
        subject: `Portfolio: New message from ${name}`,
        react: EmailTemplate({ name, email, message }),
      });
      return res.status(200).json({ message: "Message sent" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(400).json({ message: "Bad Request" });
  }

}
