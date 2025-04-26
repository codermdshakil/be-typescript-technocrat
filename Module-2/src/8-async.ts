{

    /**
     * Asynchronous TypeScript
     * 
     * Promise
     * 
     * - Promise: If something takes time and you don't have the result immediately, use a Promise.
     * - Promise When to use:  Any time you deal with future work (APIs, delays, files, etc.)
     * 
     * Async/ Await
     *
     * - async function → allows you to use await inside.
     * - await → tells TypeScript: "Wait for this Promise to finish, then continue."
     * 
     * Try/Catch(err)
     * 
     * - try...catch → handles both success and error cleanly.
     * 
    */

    // Summary: 
    // 1. Promise 
    // 2. async/ await
    // 3. try/catch



    // Simulate 
    // const createPromise = () : Promise<string> => {

    //     // return Promise<string>
    //     return new Promise<string>((resolve, rejected) => {
    //         const data = 'Something data';
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             rejected('Failed to Loard Data')
    //         }
    //     })
    // }

    // const showData = async () => {
        
    //     try{
    //         const data = await createPromise();
    //         console.log(data);

    //     }
    //     catch(err){
    //         console.log('Error Message:', err);
    //     }
    // }
    // showData();




    //  load external online API data using async and await, try, catch
    // const getData = async () => {
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = await res.json();
    //         console.log(data);
    //     }
    //     catch(err){
    //         console.log('Error Occured : ', err)
    //     }
    // }
    // getData();

    type Todo = {
        id:number,
        userId:number,
        title:string;
        body:string;
    }

    // load data using custom type, promise 
    const geTTodo = async () : Promise<Todo>=> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data  = await res.json();
        console.log(data);
        return data;
    }
    // geTTodo();

    
   

}

