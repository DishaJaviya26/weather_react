function getTime(time) {
  let formatTime = new Date(time*1000); 

  let options = {hour: "numeric", minute: "numeric"}
  let hourAndMin = formatTime.toLocaleTimeString('en-US', options)
  
  return hourAndMin;
}
  
export default getTime;
  
  