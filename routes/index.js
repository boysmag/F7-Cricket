var ObjectId =require('mongodb').ObjectID;

exports.homePlayer=function(req,res){
    var db=req.db;
    var collection=db.collection('players');
    collection.find().toArray(function(err,playersArray){
        if(playersArray){
            res.render('index',{
                title: 'Players',
                path:req.path,
                players:playersArray

            });
        }
        else{
            res.render('index',{
                title:'no players found'
            });
        }
    });
};

exports.findByName=function(req,res){
    var db=req.db;
    var collection=db.collection('players');
    var name=req.params.name;
    collection.findOne({
        'name':name
    },function(err,item){
        if(item){
            res.render('player',{
                title:item.name,
                player:item
            });
        }
        else{
            res.render('error',{
                message:'not found'
            });
        }
    });
};

exports.profileofPlayer=function(req,res){
    var db=req.db;
    var collection=db.collection('players');
    var name=req.params.name;
    collection.findOne({
        'name':name
    },function(err,item){
        if(item){
            res.render('profile',{
                title:item.name,
                player:item
            });
        }
        else{
            res.render('error',{
                message:'not found'
            });
        }
    });
   
};
exports.createPlayer= function(req, res) {
	var db = req.db;
	var collection = db.collection('players');
	var post = req.body;
	collection.insert(post, {
		safe: true
	}, function(error, result) {
		if (error) {
			res.render('error', {
				message: 'player Save Failed!'
			});
		}
		else {
			res.redirect("/");
		}
	});
};


exports.updatePlayer = function(req, res) {
	var db = req.db;
	var collection = db.collection('players');
	var id = req.body._id;
	var post = req.body;

	var pname = req.body.name;
	var ptype = req.body.type;
	var pcountry = req.body.country;

	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	if (id.match(checkForHexRegExp)) {
		var objectId = new ObjectId(id);
		collection.update({
			'_id': objectId
		}, {
			$set: {
				name: pname,
				type: ptype,
				country: pcountry
			}
		}, {
			safe: true
		}, function(err, item) {
			if (err) {
				res.render('error', {
					message: 'player Update Failed! ' + err
				});
			}
			else {
				res.redirect("/");
			}
		});
	}
	else {
		res.render('error', {
			message: 'Invalid Value'
		});
	}
};


exports.deletePlayer = function(req, res) {
	var db = req.db;
	var collection = db.collection('players');
	var _id = req.body._id;
	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	if (_id.match(checkForHexRegExp)) {
		var objectId = new ObjectId(_id);
		collection.remove({
			'_id': objectId
		}, {
			safe: true
		}, function(error, result) {
			if (error) {
				res.render('error', {
					message: 'player Delete failed!'
				});
			}
			else {
				res.redirect("/");
			}
		});
	}
	else {
		res.render('error', {
			message: 'Invalid _id'
		});
	}
};
