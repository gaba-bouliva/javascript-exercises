const findTheOldest = function(persons) {
  
    // sort the persons by age in descending order oldest to youngest
    persons.sort((person1, person2) =>{
        if(!person1.hasOwnProperty('yearOfDeath')){
            person1['yearOfDeath'] = parseInt(new Date().getFullYear())
        }
        if(!person2.hasOwnProperty('yearOfDeath')){
            person2['yearOfDeath'] = parseInt(new Date().getFullYear())
        }
        let agePerson1 = person1.yearOfDeath - person1.yearOfBirth;
        let agePerson2 = person2.yearOfDeath - person2.yearOfBirth;

        if(agePerson1 < agePerson2) return 1;
        else if (agePerson1 > agePerson2) return -1;
        else return 0;
    })

   return persons[0] //return odest person's name
};

// Do not edit below this line
module.exports = findTheOldest;
