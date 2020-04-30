const DBNAME = 'parker';
module.exports = {
    PORT: 3333,
    DBNAME,
    APPNAME: 'tracker',
    DBURI: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-qaxjl.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};
