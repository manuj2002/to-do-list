const express=require('express');
const app=express();
const port=5000;
const path=require('path');
const { redirect } = require('statuses');
const arr=[];
 var i=0;

app.use(express.urlencoded( {extended :true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');
app.get('/',(req,res,next)=>{
  res.render('index',{
      title:'TO-DO LIST',
      Task:arr
      
  })
})

app.post('/gettask',(req,res,next)=>{
    
   console.log(req.body.t);
   const g={
       'in':i,
       'task':req.body.t

   }
   arr.push(g);
   i++;
    res.redirect('/');

   
})
app.post('/updown',(req,res,next)=>{
    
    var k=req.body.bit;

    if(k!=0)
    {
        arr[k].in=k-1;
        arr[k-1].in=k;
        var x=arr[k];
        arr[k]=arr[k-1];
        arr[k-1]=x;
    }
    res.redirect('/');
})


app.post('/keepdown',(req,res,next)=>{
    
    var k=req.body.bit;
    if(k!=arr.length-1)
    {
        console.log(arr[k].in);
       console.log(arr[k+1].in);
        
       
    }
    res.redirect('/');
})



app.listen(port,()=>{
    console.log('server is running at '+port);
})
