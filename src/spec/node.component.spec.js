
import HttpClientModule from '@angular/common/http';
describe("Node List API Exists", function() {

  
  request:HttpClient;
  
  let url = 'https://localhost:44365/api/nodes/Allnodes';  
     describe("GET Api Running Properly", function() {
         it("returns status code 200", function(done) {
          request.GET(url, function(error, response, body) {
             expect(response.statusCode).toBe(200);
             done();
         });
    });
 });

})

