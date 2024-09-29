// read Function to calculate demerit points 
function calculateDemeritPoints(speed) {
    // Constants
    const speedLimit = 70;  // Speed limit in km per second
    const demeritPointsPerIncrement = 1;  // Demerit points assigned per 5 km/s over speed limit
    const demeritPointsThreshold = 12;  //  license suspension would happen
  
    // confirm speed
    if (speed < speedLimit) {
      console.log("Ok");  
    } else {
      
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      
      if (demeritPoints > demeritPointsThreshold) {
        console.log("License suspended");  
      } else {
        console.log("Points: " + demeritPoints);  
      }
    }
  }
  
  // Example
  const carSpeed = 80;
  calculateDemeritPoints(carSpeed);
  

