module.exports = app =>{
    app.ready(()=>{
        const nms = app.nms;
        nms.run();
        nms.on('postPublish', (id, StreamPath, args) => {
            let roomID = StreamPath.match(/\d+/g);
            streamArr[id] = roomID;
            axios.get(`:7001/live/start/${roomID}`).then((res ) => {
                    console.log(res .data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
        
        nms.on('donePublish', (id, StreamPath, args) => {
            let roomID = streamArr[id];
            axios
                .get(`:7001/live/shutdown/${roomID}`).then((res ) => {
                    console.log(res .data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    })
}