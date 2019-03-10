/*
用于添加cesium账号，本脚本根据需要替换
*/
var dbname = 'cesium';
var dbuser = 'nuanxin';
var dbpass = 'nuanxin!2017';
createdb(dbname, dbuser, dbpass);

function createdb(dbname, dbuser, dbpass) {
  var db = connect(dbname);
  db.createUser({
    user: dbuser,
    pwd: dbpass,
    roles: [{
      role: "dbOwner",
      db: dbname
    }]
  })
}