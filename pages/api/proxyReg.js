const axios = require("axios"); 

const proxyRequest = async (req, res) => {
  const { proxyURL } = req.body;
    const response = await axios
        .get(`${proxyURL}`)
        .then(({ data }) => {
            console.log('proxyURL: ', proxyURL ? proxyURL : 'buttfuck')
            return data
        })
    res.send(response,
        // text: `${req.body}`,
        // duh: proxyURL,
        // text: `res`,
    )
}

export default proxyRequest;
