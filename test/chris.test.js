const response = await fetch('http://localhost:3000/chris');

const name = await response.text();

expect(name).toBe("chris")