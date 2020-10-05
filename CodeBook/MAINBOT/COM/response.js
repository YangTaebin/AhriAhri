function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var Room = File.read("/storage/emulated/0/Pictures/DB/Room.txt").split("\n");
  var Manager = File.read("/storage/emulated/0/Pictures/DB/Manager.txt").split("\n");
  var Command_List = File.read("/storage/emulated/0/Pictures/DB/Command_List.txt");
  var Bot_Info = File.read("/storage/emulated/0/Pictures/DB/Bot_Info.txt")
  var Temp = parseFloat(Utils.getWebText("https://hangang.life/").split("<h1 class=\"white\" id=\"temp\" \"><b> ")[1].split(" °C </b>")[0]);
  var ARI_P = File.read("/storage/emulated/0/Pictures/DB/ARI_DB/P.txt").split("\n")[File.read("/storage/emulated/0/Pictures/DB/ARI_DB/P.txt").split("\n").length];
  var JAM_P = File.read("/storage/emulated/0/Pictures/DB/JAM_DB/P.txt").split("\n")[File.read("/storage/emulated/0/Pictures/DB/JAM_DB/P.txt").split("\n").length];
  var KOS_P = File.read("/storage/emulated/0/Pictures/DB/KOS_DB/P.txt").split("\n")[File.read("/storage/emulated/0/Pictures/DB/KOS_DB/P.txt").split("\n").length];


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

  if(msg == "!소개") {
    replier.reply(Bot_Info);
  }

  if(msg == "!정보") {
    Com_Info = "현재 시작 회기: 제 " + Phase_Num + "회차\n\n현재 시장 상태\n아리아리 | ARI | 주가 " + ARI_P + " C (" + ARI_P_Change + "%)\n"
  }

  if(msg == "!한강") {
    replier.reply("현재 한강의 수온은\n" + Temp + "℃입니다.\n화씨 : " + (Temp*(9/5) + 32) + "℉");
    replier.reply("힘내세요 - 아리아리 연구회");
  }
}
