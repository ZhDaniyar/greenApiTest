BASE_URL='https://api.greenapi.com';
const getSettingsApi = () => { 
    const idInstance = document.getElementById("idInstance").value;
    const apiTokens = document.getElementById("ApiTokenInstance").value;
    axios.get(`${BASE_URL}/waInstance${idInstance}/getSettings/${apiTokens}`).then((apiResponce) => {
    console.log(apiResponce);
    const {data} = apiResponce;
    display(data);
}).catch( ()=>{
        alert("Введите данные правилно");
      });
};

const getStateInstance = () => {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokens = document.getElementById("ApiTokenInstance").value;
    axios.get(`${BASE_URL}/waInstance${idInstance}/getStateInstance/${apiTokens}`).then((apiResponce) => {
        const {data} = apiResponce;
        display(data);
    }).catch( ()=>{
        alert("Введите данные правилно");
      });
}

const display = (data) => {
    const displayResult = document.getElementById("display-results");
    displayResult.innerHTML = `${JSON.stringify(data, null, 2)}`;
}

const sendMessage = async() =>{
    const idInstance = document.getElementById("idInstance").value;
    const apiTokens = document.getElementById("ApiTokenInstance").value;
    const whatsappNumber = document.getElementById("phone-number").value;
    const message = document.getElementById("message").value;
    const json = JSON.stringify({"chatId": `${whatsappNumber}@c.us`, "message": `${message}`} );
    await axios.post(`${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokens}`, json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((apiResponce) => {
        const {data} = apiResponce;
        display(data);
    }).catch( ()=>{
        alert("Введите данные правилно");
      });
}

const sendFileByUrl = async() =>{
    const idInstance = document.getElementById("idInstance").value;
    const apiTokens = document.getElementById("ApiTokenInstance").value;
    const whatsappNumber = document.getElementById("phone-number").value;
    const fileUrl = document.getElementById("file-url").value;
    const fileName = document.getElementById("file-name").value;
    const json = JSON.stringify({"chatId": `${whatsappNumber}@c.us`, "urlFile": `${fileUrl}`, "fileName":`${fileName}`} );
    await axios.post(`${BASE_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokens}`, json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((apiResponce) => {
        const {data} = apiResponce;
        display(data);
    }).catch( ()=>{
        alert("Введите данные правилно");
      });
}

function getSettingsClicked (){
    getSettingsApi();
}

function getStateInstanceClicked (){
    getStateInstance();
}
async function sendMessageClicked() {
    await sendMessage();    
}
 async function sendByUrlClicked() {
    await sendFileByUrl();    
 }
