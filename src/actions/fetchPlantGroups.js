export function fetchPlantGroups(action) {
    fetch('http://localhost:3000/api/v1/plant_groups')
      .then(res => res.json())
      .then(groups => console.log(groups))
}