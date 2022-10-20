export async function getCurrentEngergy() {
    const response = await fetch(
      'https://renewableshower-default-rtdb.europe-west1.firebasedatabase.app/power_information.json'
    );
    const data = await response.json();
  
    const vocabs = [];
  
    for (const key in data) {
      vocabs.push({
        id: key,
        ...data[key],
      });
    }
  
    return vocabs;
  }
  