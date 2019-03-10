/*
用于添加root账号
*/
var dbname = 'admin';
var dbuser = 'nuanxin';
var dbpass = 'nuanxin?2017';
createdb(dbname, dbuser, dbpass);

function createdb(dbname, dbuser, dbpass) {
  var db = connect(dbname);
  db.createUser({
    user: dbuser,
    pwd: dbpass,
    roles: ["root"]
  })
}