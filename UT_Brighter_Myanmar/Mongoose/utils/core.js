const Msg = (res,msg = "",result = {}) => {
    res.status ().json({con:true,msg,result});
}

module.exports = {
    Msg
}