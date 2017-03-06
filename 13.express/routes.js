
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('index', {
            title: '主页',
            book: {
                name: 'node.js'
            }
        });
    });
    router.get('/reg', function (req, res) {
        res.render('reg', {
            title: '注册', books: ['geddy', 'neil', 'alex']
        });
    });
}