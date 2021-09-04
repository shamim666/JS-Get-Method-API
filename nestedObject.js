const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  
  const getCars = myObj.cars ;

  for (const car of getCars){
    if (car.name === 'Ford'){
        console.log(car.name);
        console.log(car.models);
        const models = car.models ;
         for (const model of models ){
              if (model === 'Focus'){
                  console.log(model);
              }
         }
    }
    
   
  }