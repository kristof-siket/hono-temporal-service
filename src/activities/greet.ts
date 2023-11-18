import delay from "delay";

// @@@SNIPSTART typescript-hello-activity
export async function greet(name: string): Promise<string> {
  await delay(10000);
  return `Hello, ${name}!`;
}
// @@@SNIPEND
