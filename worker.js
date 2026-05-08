const redis = require("redis");

const workerClient = redis.createClient({
    url: "redis://localhost:6379",
});

workerClient.on("error", (err) =>{
    console.log("Worked Redis Error",err);
})

const worker = async () => {
    await workerClient.connect();
    console.log("Worker Connected");
    while (true) {
        try{

        }catch{
            
        }
    }
}