export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    ...(new Date(date).getFullYear() === new Date().getFullYear()
      ? ({})
      : { year: "numeric" }),
  });
}
