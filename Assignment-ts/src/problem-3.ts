
const filterEvenNumbers = (arr:number[]):void => {
    
    const result:number[] = [];


    for(let i:number = 0; i <= arr.length - 1; i++){

        if(arr[i]%2 === 0){

            result.push(arr[i]);

        }

    }

    console.log(result);

}


filterEvenNumbers([1, 2, 3, 4, 5, 6]);


