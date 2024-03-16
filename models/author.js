var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
//encapsulation property
AuthorSchema
.virtual('name')
.get(function () {
	@@ -28,7 +29,19 @@ AuthorSchema
});

// Virtual for author's lifespan
//node models/author.js --to test
AuthorSchema.virtual('lifespan').get(function() {

  var res =' ';
  if(this.date_of_birth){
    res = this.date_of_birth.getYear().toString() +" - ";
  }
  if(this.date_of_death){
    res=res+this.date_of_death.getYear();
  }
  return res;

});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);