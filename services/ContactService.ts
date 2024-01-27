interface ISendContactEmailPayload {
  name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const SendContactEmail = async (payload: ISendContactEmailPayload) => {
  const { name, from_email, subject, message } = payload;
  const to_email = "mhd.fathur@live.com";

  console.log("sending");

  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${name} <${from_email}>`,
      to: to_email,
      subject: subject,
      text: message,
    }),
  });
};
