const api = require('binance');
const axios = require('axios')


const binanceWS = new api.BinanceWS(true);


binanceWS.onAggTrade('COSUSDT', data => {
    const obj = JSON.parse(JSON.stringify(data))
    console.log(obj.price);
    
    axios({
        method: 'post',
        url: 'https://exp.host/--/api/v2/push/send',
        data: {
            to: 'ExponentPushToken[fH3d-4N7XnB1KdAR0k3oyu]',
            subtitle: obj.price,
            sound: 'default',
            body: '',

        }
      });
});
