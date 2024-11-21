export const ContextData = {
  lightOrDark: false,
  qrCode: true,
  autoComplete: true
}

export default  function ContextGlobal(){
  return new Promise((resolve, reject)=>{
    if(ContextData) setTimeout(()=>resolve(ContextData), 500);
    else reject("Some error Occuered");
  })
}