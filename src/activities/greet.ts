import delay from "delay";

export async function greet(name: string): Promise<string> {
  await delay(10000);
  return `Hello, ${name}!`;
}
