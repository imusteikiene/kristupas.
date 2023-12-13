fetch("https://party-wedding.glitch.me/v1/party")
  .then(res => res.json())
  .then(data => {
    //  `some` metodas
    const arKristupasVIPSome = data.some(guest => guest.name === "Kristupas Lapeika" && guest.VIP);
    console.log(arKristupasVIPSome);

    // `find` metodas
    const kristupasObject = data.find(guest => guest.name === "Kristupas Lapeika");
    const arKristupasVIPFind = kristupasObject ? kristupasObject.VIP : false;
    console.log(arKristupasVIPFind);

    // `length` metodais
    const kristupasArray = data.filter(guest => guest.name === "Kristupas Lapeika" && guest.VIP);
    const arKristupasVIPFilter = kristupasArray.length > 0;
    console.log(arKristupasVIPFilter);
  })
  .catch(e => console.log(e.message));

