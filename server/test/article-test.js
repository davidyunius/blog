const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = 'http://localhost:3000/'

chai.use(chaiHttp);

// describe('article-test', function () {
//     describe('/get function', function () {
//         it('should return article data', function (done) {
//             chai.request(server)
//             .get('articles')
//             .end(function (err, res) {
//                 console.log('data',res.body);
//                 expect(res).be.an('object')
//                 expect(res).have.status(200)   
//                 done()             
//             })
//         })
//     })
// })

// describe('/post function', function () {
//     it('should return single article data', function (done) {
//         chai.request(server)
//         .post('articles/add')
//         .end(function (err, res) {
//             console.log(res.body);
//             expect(res).be.an('object')
//             expect(res).to.have.status(201)
//             expect(res).not.have.status(500)
//             done()
//         })
//     })
// })

// describe('/update function', function () {
//     it('expected to return updated value', function (done) {
//         chai.request(server)
//             .patch(`articles/update/5ab0c005c7f4726680dada07`)
//             .end(function (err, res) {
//                 console.log(res.body.artData);
//                 expect(res).be.an('object') ;
//                 expect(res).to.have.status(200);
//                 done(); 
//             })
//     })
// })

// describe('/delete function', function () {
//     it('expected to delete data', function (done) {
//         chai.request(server)
//             .delete('articles/delete/5ab0c005c7f4726680dada07')
//             .end(function (err, res) {
//                 expect(res).to.have.status(200);
//                 done();
//             })
//     })
// })