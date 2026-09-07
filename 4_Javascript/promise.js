function getuserdata(userID,fn){
    let data={
        name: "harshal",
        address:"parul"
    }
    setTimeout(()=>{
        fn(null,data);
        console.log("userdata is",data);
    },2000);
}

function getorderdata(userID,fn){
    let data={
        orderid:"Order_1",
        products:["banana,phone"]
    }
    setTimeout(()=>{
        fn(null,data);
    },1000);
}

function getpaymentdata(userID,fn){
    let data={
        status:"Success",
        amount: 10000
    }
    setTimeout(()=>{
        fn(null,data);
    },1000);
}

// getuserdata("1",{err,data});

getorderdata("1",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("orderdata is",data);
        getpaymentdata("ORDER_1",(err,data)=>{
            if(err){
                console.log(err);
            }
            else
            {
                console.log("Payment data is ",data);
            }
        });
    }
})