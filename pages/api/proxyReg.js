const axios = require("axios"); 

const proxyRequest = async (req, res) => {
  const { proxyURL } = req.body;
  const response = await axios
    .get(`${proxyURL}`)
    .then(({ data }) => {
      console.log('proxyURL: ', proxyURL ? proxyURL : 'butt');
          return data
    })
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      )
    
    console.log('res.status: ', res.status  ? res.status  : 'butt origin');
        
    res.send(response,
        // text: `${req.body}`,
        // duh: proxyURL,
        // text: `res`,
    )
}

export default proxyRequest;
