export const getGnome = () =>
  fetch(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`)
   .then(res => res.json())
   .then(data => data)
   .catch(err => console.log(err))
