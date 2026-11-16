import delay from "delay";
export async function greet(name) {
    await delay(10000);
    return `Hello, ${name}!`;
}
