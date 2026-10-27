export const metadata = {
  title: "Privacy",
  description: "How the Texas Landscape Services quote form handles the details you send.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 text-sm leading-7">
      <h1 className="font-serif text-4xl">Privacy</h1>
      <p className="mt-4 text-mute">
        The estimate form sends your name, phone, optional email, property type, services, location, and notes to info@txlandscapeservices.com through FormSubmit. It is used to reply about the property you described. This site does not sell that information and does not run an account system.
      </p>
      <p className="mt-3 text-mute">
        Calling (469) 455-9733 or emailing the office directly does not pass through this website.
      </p>
    </main>
  );
}
