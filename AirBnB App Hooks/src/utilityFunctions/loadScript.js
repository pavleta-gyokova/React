function loadScript (scriptURL){
    return new Promise((resolve, reject)=>{
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptURL;
        script.onload = () =>{
            resolve ();
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    })

}

export default loadScript;
