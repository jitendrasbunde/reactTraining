
  const useFetch = (url,option) =>{
    if(option!==undefined){
      try{
        return fetch(url,option)
        .then(response=>{
          console.log("Row Response  ",response);
          return response.json();
        })
        .then(jsonresponse=>{
          console.log("JSON RESPONSE:->  ",jsonresponse);
          debugger
          return jsonresponse;
        }).catch((err)=>{
          debugger
          console.log('error')
        })
      }catch(ex){
          console.log(ex)
      }
    }else{
      try{
        return fetch(url)
        .then(response=>{
          console.log("Row Response  ",response);
          return response.json();
        })
        .then(jsonresponse=>{
          console.log("JSON RESPONSE:->  ",jsonresponse);
          debugger
          return jsonresponse;
        }).catch((err)=>{
          debugger
          console.log('error')
        })
      }catch(ex){
          console.log(ex)
      } 
    }
}

export default  useFetch;