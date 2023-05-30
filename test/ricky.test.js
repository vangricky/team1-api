const response = await fetch('http://localhost:3000/ricky');

const name = await response.text();

expect(name).toBe("ricky")