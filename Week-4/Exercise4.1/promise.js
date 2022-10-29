const getNumber = () =>
{
    new Promise((resolve, reject) => {
        const randomnumber =parseInt(Math.random()*100,10);
        setTimeout(() =>{
            if(randomnumber % 5 ===0){
                reject('rejected with number: ${randomnumber}')
            }
            else

            resolve('resolve with number: ${randomnumber}')
            }, randomnumber*100);    

    })
};
