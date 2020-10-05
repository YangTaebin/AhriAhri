function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var Manager = File.read("/storage/emulated/0/Pictures/DB/Manager.txt").split("\n");
  if (Manager.indexOf(sender) != -1) {
    var Room = File.read("/storage/emulated/0/Pictures/DB/Room.txt").split("\n");
    var Command_List_Manager = File.read("/storage/emulated/0/Pictures/DB/Command_List_Manager.txt");

    if (msg.split("(")[0] == "!공지") {
      Alt_msg = msg.split("(").slice(1, msg.split("(").length).join("(");
      for(var i = 0; i < Room.length; i++) {
        replier.reply(Room[i], Alt_msg);
      }
    }

    if (msg.split("(") == "!명령어") {
      replier.reply(Command_List_Manager);
    }
  }
}
