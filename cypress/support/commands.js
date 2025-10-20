export const defaultUsername = "alextest01";
export const defaultPassword = "Sqapa123";

export function generateEmail(username) {
  return `${username}@example.com`;
}

export function generateUsername(prefix = "alextest") {
  const randomNum = Math.floor(Math.random() * 1000);
  return `${prefix}${String(randomNum).padStart(3, "0")}`;
}
