ds.Superhero.remove(); //clean the database from all former Superhero generated
new ds.Superhero({name:"Batman"}).save();
new ds.Superhero({name:"Wolverine"}).save();
var favoriteSupehero = new ds.Superhero({name:"Wonder Woman"});
favoriteSupehero.save();
ds.Superhero.all();