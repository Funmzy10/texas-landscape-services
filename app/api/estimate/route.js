export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const place = String(body.place || "").trim();
  const email = String(body.email || "").trim();
  const property = String(body.property || "").trim();
  const services = String(body.services || "").trim();
  const notes = String(body.notes || "").trim();

  if (body.company) return Response.json({ ok: true });
  if (!name || !phone || !place) {
    return Response.json({ ok: false, error: "Name, phone, and location are required." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "That email address does not look complete." }, { status: 400 });
  }

  const payload = {
    name,
    phone,
    email: email || "not provided",
    property,
    services,
    place,
    notes,
    _subject: "Estimate request, Texas Landscape Services",
    _template: "table",
    _captcha: "false",
  };

  try {
    const response = await fetch("https://formsubmit.co/ajax/info@txlandscapeservices.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success === "false" || data.success === false) {
      return Response.json(
        { ok: false, error: "The office inbox did not accept the note." },
        { status: 502 },
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "The note could not be delivered." }, { status: 502 });
  }
}
