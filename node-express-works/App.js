 /*=============================
chain a middleware function and the final handler.
 In the middleware function you should add the current time
  to the request object in the req.time key. 
  You can use new Date().toString().
 In the handler, respond with a JSON object, 
 taking the structure {time: req.time}.
 ==============================*/

app.get("/now",function(req,res,next){
    req.time=new Date().toString()
    next()
  },(req,res)=>{
    res.json({"time":req.time})
    
  })