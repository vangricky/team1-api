it("Should test local host name", async()=>{
    const response = await fetch('http://localhost:3000/caroline');

    const name = await response.text();
    
    expect(name).toBe("caroline")
})

