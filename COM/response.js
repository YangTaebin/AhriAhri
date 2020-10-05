function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var Room = File.read("/storage/emulated/0/Pictures/DB/Room.txt").split("\n");
  var Manager = File.read("/storage/emulated/0/Pictures/DB/Manager.txt").split("\n");
  var Command_List = File.read("/storage/emulated/0/Pictures/DB/Command_List.txt");

  if(Room.indexOf(sender) == -1) {
    File.write("/storage/emulated/0/Pictures/DB/Room.txt", sender+"\n", true);
  }

  if(msg.split("(")[0] == "!건의") {
    Sug_msg = msg.split("(").slice(1, msg.split("(").length).join("(");
    for(var i = 0; i < Manager.length; i++) {
      replier.reply(Manager[i], Sug_msg);
    }
  }

  

  if(msg == "!명령어") {
    replier.reply(Command_List);
  }
}
