import { SendContactEmail } from "@/services/ContactService";

export default async function Contact() {
  async function submitContact(formData: FormData) {
    "use server";

    const payload = {
      name: formData.get("name") as string,
      from_email: formData.get("from_email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    console.log("payload", payload);

    const response = await SendContactEmail(payload);

    console.log("response", response);
  }

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-8 py-10">
          <h3 className="text-3xl font-bold mb-8">Contact Me</h3>

          <form action={submitContact}>
            <div className="mb-4">
              <label className="block mb-4 text-xl" htmlFor="name">
                Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded bg-slate-950 border border-slate-800 text-lg"
                name="name"
                id="name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-xl" htmlFor="from_email">
                Email <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded bg-slate-950 border border-slate-800 text-lg"
                name="from_email"
                id="from_email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-xl" htmlFor="subject">
                Subject <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded bg-slate-950 border border-slate-800 text-lg"
                name="subject"
                id="subject"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-xl" htmlFor="message">
                Message <span className="text-red-300">*</span>
              </label>

              <textarea
                className="w-full rounded bg-slate-950 border border-slate-800 text-lg"
                name="message"
                id="message"
                rows="5"
              ></textarea>
            </div>

            <div>
              <button
                className="text-xl px-4 py-2 rounded bg-green-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
