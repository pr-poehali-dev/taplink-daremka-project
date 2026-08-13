export const SEND_APPLICATION_URL = "https://functions.poehali.dev/e7cce5b4-87be-476e-8b9a-1c94b47ca055";

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
