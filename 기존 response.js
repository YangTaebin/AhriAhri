function crawling(change) {
  value = parseFloat(change.split("% ")[0], 10);
  if(change.split("% ")[1] == "감소") {
    value = -1 * value;
  }
  return value;
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  Manager = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/manager.txt").split("\n");
  User_identity = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/user_identity.txt").split("\n");
  UC = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/User_Cash.txt").split("\n");
  AHRI_P_List = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n");
  AHRI_P = parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n").length-1], 10);
  AHRI_USER_Stock = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/User_Stock.txt").split("\n");
  AHRI_BUY_PRE = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/매수자.txt").split("\n");
  Easter_code = File.read("/storage/emulated/0/ChatBot/BotData/메인/Easter.txt");
  Easter_finder = File.read("/storage/emulated/0/ChatBot/BotData/메인/Easter_finder.txt").split("\n");
  AHRI_BUY_Personal = {};
  AHRI_USER_Stock_Personal = {};
  AHRI_BUY_total = 0;
  AHRI_Center_Have = parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/아리보유주식수.txt"));
  PHASE = parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/PHASE.txt"),10);
  PHASE_num = parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/PHASE_num.txt"), 10);
  Room = File.read("/storage/emulated/0/ChatBot/BotData/아리아리/room.txt").split("\n");
  cg_f = 1;
  cg_N = 0.05;
  User_IDPW = {};
  User_Cash = {};
  AHRI_P_Change = (((parseInt(AHRI_P_List[AHRI_P_List.length-1])-parseInt(AHRI_P_List[AHRI_P_List.length-2])) / (parseInt(AHRI_P_List[AHRI_P_List.length-2]))) * 100).toFixed(2);


  for(i = 0; i < User_identity.length; i++) {
    User_IDPW[User_identity[i].split(" : ")[0]] = User_identity[i].split(" : ")[1]
  }

  for(i = 0; i < UC.length; i++) {
    User_Cash[UC[i].split(" : ")[0]] = parseInt(UC[i].split(" : ")[1], 10);
  }

  for(i = 0; i < AHRI_BUY_PRE.length; i++) {
    AHRI_BUY_Personal[AHRI_BUY_PRE[i].split(" : ")[0]] = parseInt(AHRI_BUY_PRE[i].split(" : ")[1], 10);
    AHRI_BUY_total = AHRI_BUY_total + parseInt(AHRI_BUY_PRE[i].split(" : ")[1], 10);
  }

  for(i = 0; i < AHRI_USER_Stock.length; i++) {
    AHRI_USER_Stock_Personal[AHRI_USER_Stock[i].split(" : ")[0]] = parseInt(AHRI_USER_Stock[i].split(" : ")[1], 10);
  }


  if(Room.indexOf(sender) == -1) {
    File.save("/storage/emulated/0/ChatBot/BotData/아리아리/room.txt", "\n" + sender, true);
    replier.reply("처음 보는 분이신 것 같네요!\n$정보 를 입력해보세요!.");
  }

  message_start = msg.split[0];
  if(message_start = "$") {

    mg = msg.slice(1, msg.length)

    if(mg == "room" && Manager.indexOf(sender) != -1) {
      replier.reply("room name : " + room);
    }

    if(mg == "정보"){
      replier.reply("반갑습니다!\nKAIST 부설 한국과학영재학교 소속 사회·경제 연구회, 아리아리입니다.\n'아리투자증권'은 한과영을 배경으로 한 가상 주식 투자 체험입니다.\n아리투자증권 시스템 내 주식 시장은 다음과 같은 변수에 영향을 받습니다.\n\n1. 현재 시장에 거래 중인 총 주식 수\n -거래가 활발하고 소유하려는 사람들이 많은 주식일수록 주가가 상승합니다.\n\n2. 현실 관련주 주가의 변동n\ -아리아리 시스템 내 주가는, 해당 주식의 종목과 연관된 현실 세계의 주가 변동에 약간의 영향을 받습니다. 실제 세계의 경제 및 사회 동향을 알고 있다면 더욱 수월하게 주식 투자를 할 수 있을 것입니다.\n\n3. 무작위성\n -아리투자증권 시스템의 이용자 수가 실제 주식 시장처럼 무수히 많지 않고, 기타 외부적 요인 역시 부족하기에 주가 변동에는 최대 10% 이내의, 약간의 무작위성이 포함됩니다.\n\n$명령어 를 입력하여 아리투자증권 봇에서 주식 거래와 기타 기능을 위해 사용 가능한 전체 명령어의 목록을 볼 수 있습니다.\n\n주식 거래를 포함한 대부분의 기능 이용을 위해서는 가입이 필수적이므로, 가입을 위해 관리자인 KSA 최이안, 김정호, 양태빈 학생에게 개인톡 혹은 관리자 호출 기능($GM#(보낼 메시지)) 등을 이용해 연락해 주시기 바랍니다.\n\n저희 연구회에서 최선을 다해 개발한 것인 만큼, 적극적으로 참여해 주시고 널리 퍼뜨려 주시면 감사드리겠습니다.\n만약 질문·건의·제보·문의사항 등이 있으시다면 위의 관리자 호출 기능을 이용해 전달해 주시기 바랍니다.\n감사드립니다!\n공식 홈페이지: http://ahriahri.xyz/R_index.html\n\n[이스터 에그도 숨어 있으니, 꼭 찾아 보세요! 발견 시 소정의 보상이 있습니다.]");
    }

    if(mg == "명령어"){
      if(Manager.indexOf(sender) != -1){
        replier.reply("다음의 명령어를 사용하여 아리를 제어할 수 있습니다. (관리자용)\n특정 주식을 위한 명령어의 경우, $ 기호 뒤에 세 글자의\n주식 코드를 입력 후 명령어를 사용해야 합니다. (XXX)\n$공지#메시지 - 아리아리 개발팀의 이름으로 모든 사람에게 공지가 전송됩니다.\n코드와 관련된 상세 정보는 $코드 참조\n$정보 - 아리 정보 조회\n$GM#명령어 - GM(관리자)들에게 메시지를 보냅니다.\n$전체조회 - 전체 가입자 명단을 조회합니다.\n$가입 - 아리 플랫폼에 가입합니다.\n$계정조회 - 아이디와 비밀번호를 이용하여 계정 정보를 확인합니다.\n$잔고조회 - 계정의 아이디를 이용하여 잔여 크레딧을 조회합니다.\n$개장 - 주식시장을 개장합니다.\n$시장조회 - 현재 진행 중인 시장의 회차수를 확인합니다.\n$폐장 - 주식시장을 폐장합니다.\n$매수 - 주식을 구입합니다. ($XXX 매수,주식구매 수,ID,PW 형식)\n$매도 - 주식을 판매합니다. ($XXX 매도,주식판매 수,ID,PW 형식)\n$총매수 - 주식의 총매수량을 확인합니다. ($XXX 총매수 형식)\n$주가조회 - 현재 주가를 조회합니다. ($XXX 주가조회 형식)\n$잔여주식 - 남은 주식 총량을 조회합니다. ($XXX 잔여주식 형식)\n$내주식 - 현재 보유 중인 주식 지분을 확인합니다. ($XXX 내주식,ID,PW 형식)\n$주식조회 - 현재 거래 중인 모든 주식의 코드, 현재 주가와 잔여 수량을 확인합니다.\n$한강 - 현재 한강의 수온을 알려줍니다.");
      }
      else {
        replier.reply("최초 이용시 $정보를 입력해 설명을 읽어주세요!\n다음의 명령어를 사용하여 아리를 제어할 수 있습니다.\n특정 주식을 위한 명령어의 경우, $ 기호 뒤에 세 글자의\n주식 코드를 입력 후 명령어를 사용해야 합니다. (XXX)\n코드와 관련된 상세 정보는 $코드 참조\n$정보 - 아리 정보 조회\n$GM#명령어 - GM(관리자)들에게 메시지를 보냅니다.\n$계정조회 - 아이디와 비밀번호를 이용하여 계정 정보를 확인합니다.\n$잔고조회 - 계정의 아이디를 이용하여 잔여 크레딧을 조회합니다.\n$시장조회 - 현재 진행 중인 시장의 회차수를 확인합니다.\n$매수 - 주식을 구입합니다. ($XXX 매수,주식구매 수,ID,PW 형식)\n$매도 - 주식을 판매합니다. ($XXX 매도,주식판매 수,ID,PW 형식)\n$총매수 - 주식의 총매수량을 확인합니다. ($XXX 총매수 형식)\n$주가조회 - 현재 주가를 조회합니다. ($XXX 주가조회 형식)\n$잔여주식 - 남은 주식 총량을 조회합니다. ($XXX 잔여주식 형식)\n$내주식 - 현재 보유 중인 주식 지분을 확인합니다. ($XXX 내주식,ID,PW 형식)\n$주식조회 - 현재 거래 중인 모든 주식의 코드, 현재 주가와 잔여 수량을 확인합니다.\n$한강 - 현재 한강의 수온을 알려줍니다.");
      }
    }

    if(mg.slice(0, 2) == "GM") {
      msg = mg.split("#")[1];
      replier.reply("Y-TV", sender + " 님이 GM을 찾습니다.");
      replier.reply("Y-TV", "Message : "+msg);
      replier.reply("20-119 최이안", sender + " 님이 GM을 찾습니다.");
      replier.reply("20-119 최이안", "Message : "+msg);
      replier.reply("20 김정호", sender + " 님이 GM을 찾습니다.");
      replier.reply("20 김정호", "Message : "+msg);
    }

    if(mg == "전체조회" && Manager.indexOf(sender) != -1) {
      replier.reply("아리투자증권 가입자 전체 명단입니다.");
      replier.reply(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/user_identity.txt"));
    }

    if(mg.slice(0, 2) == "가입"){
      if(Manager.indexOf(sender) != -1){
        if(mg == "가입") {
          replier.reply("$가입 명령어 뒤에 사용할 닉네임과 비밀번호를 ,로 구분해 적어 주세요.\n※주의: 아이디와 비밀번호는 영어만 사용 가능하며,\n쉼표를 넣을 수 없습니다.\nex)$가입,Ahribot,Ahri");
        }
        else if(mg.split(",")[1] in User_IDPW) {
          replier.reply("이미 사용중인 아이디입니다.");
        }
        else {
          id = mg.split(",")[1];
          passwd = mg.split(",")[2];
          replier.reply("id : " + id + "\npasswd : " + passwd);
          File.save("/storage/emulated/0/ChatBot/BotData/아리아리/user_identity.txt", "\n" + id + " : " + passwd,true);
          replier.reply("계정 생성이 완료되었습니다.");
          File.save("/storage/emulated/0/ChatBot/BotData/아리아리/User_Cash.txt", "\n" + id + " : 100000", true);
          replier.reply("100000 크레딧이 지급되었습니다.\n$잔고조회#아이디 를 입력해 잔여 크레딧을 조회할 수 있습니다.");

          File.save("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/User_Stock.txt", "\n" + id + " : 0", true);
          File.save("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/매수자.txt", "\n" + id + " : 0", true);
          File.save("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/User_Stock.txt", "\n" + id + " : 0", true);
          File.save("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/매수자.txt", "\n" + id + " : 0", true);
          File.save("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/User_Stock.txt", "\n" + id + " : 0", true);
          File.save("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/매수자.txt", "\n" + id + " : 0", true);
        }
      }
      else {
        replier.reply("권한이 없습니다.\n관리자에게 연락해 주세요.");
      }
    }
    if(mg.slice(0, 4) == "계정조회") {
      if(mg == "계정조회"){
        replier.reply("$계정조회,확인할_아이디,확인할_비밀번호 를 입력하세요");
      }
      else{
        id = mg.split(",")[1];
        passwd = mg.split(",")[2];
        if(id in User_IDPW) {
          if(User_IDPW[id] == passwd){
            replier.reply("OK!");
          }
          else{
            replier.reply("비밀번호가 아이디와 맞지 않습니다.");
          }
        }
        else{
          replier.reply("존재하지 않는 아이디입니다.");
        }
      }
    }
    if(mg.slice(0, 4) == "잔고조회") {
      if(mg == "잔고조회"){
        replier.reply("$잔고조회,확인할_아이디");
      }
      else{
        id = mg.split(",")[1];
        if(id in User_IDPW) {
          replier.reply(id+" 님의 현재 보유 크레딧은 \n" + User_Cash[id] + " C 입니다.");
        }
        else{
          replier.reply("존재하지 않는 아이디입니다.");
        }
      }
    }
    if(mg == "시장조회") {
      if(PHASE == 1) {
         replier.reply("현재 제 " + PHASE_num + "회차 시장이\n진행되고 있습니다.");
      }
      else {
        replier.reply("현재 제 " + PHASE_num + "회차 시장이 폐장되었습니다.\n제 "+ (PHASE_num+1) + "회차 시장 개장을 대기 중입니다.");
      }
    }
    if(msg == "$개장" && Manager.indexOf(sender) != -1) {
      if(PHASE == 0) {
        for(i = 0; i < Room.length; i++) {
          replier.reply(Room[i], "[알림 메인]\n" + (PHASE_num+1) + "회차 시장이 개장되었습니다.");
          replier.reply(Room[i], "현재 주가 상황\n아리아리 : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n").length-1], 10) + "크레딧\n코스모스 : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/P.txt").split("\n").length-1], 10) + "크레딧\nJAMS : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/P.txt").split("\n").length-1], 10) + "크레딧");
        }
      }
    }
    if(msg == "$폐장" && Manager.indexOf(sender) != -1) {
      if(PHASE == 1) {
        for(i = 0; i < Room.length; i++) {
          replier.reply(Room[i], "[알림 메인]\n" + (PHASE_num) + "회차 시장이 폐장되었습니다.\n정산 중입니다...");
        }
      }
    }
    if(mg == "코드") {
      replier.reply("종목별 코드표입니다.\n\n아리아리 : ARI\n코스모스 : KOS\nJAMS : JAM");
    }
    if(mg.slice(0, 2) == "공지" && Manager.indexOf(sender) != -1) {
      rhdwl_mg = mg.split("#")[1];
      for(i = 0; i < Room.length; i++) {
        replier.reply(Room[i], "[알림 아리아리 개발팀]\n공지사항입니다.");
        replier.reply(Room[i], "Message : " + rhdwl_mg);
      }
    }
    if(mg == "주식조회") {
      replier.reply("현재 거래 중인 모든 주식입니다.\n형식 - 주식(코드) : 주가");
      replier.reply("아리아리(ARI) : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/아리아리/아리코인/P.txt").split("\n").length-1], 10) + "크레딧\n코스모스(KOS) : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/코스모스 주식/코스모스/P.txt").split("\n").length-1], 10) + "크레딧\nJAMS(JAM) : " + parseInt(File.read("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/P.txt").split("\n")[File.read("/storage/emulated/0/ChatBot/BotData/JAMS 주식/JAMS/P.txt").split("\n").length-1], 10) + "크레딧");
    }
    if(mg == "한강") {
      temp = parseFloat(Utils.getWebText("https://hangang.life/").split("<h1 class=\"white\" id=\"temp\" \"><b> ")[1].split(" °C </b>")[0]);
      replier.reply("현재 한강의 수온은\n" + temp + "℃입니다.\n화씨 : " + (temp*(9/5) + 32) + "℉");
      replier.reply("힘내세요 - 아리아리 연구회");
    }
    if(mg == "이스터에그"){
      replier.reply("에헤이~\n이스터에그가 있다고 이렇게 간단하게 숨겼겠습니까.\n다시 찾아보세요!\n정 어려우시다면 $힌트를 입력하시거나 $ 기호를 빼고\n다시 입력해보세요.");
    }
    if(mg == "힌트"){
      replier.reply("ㅎㅎ 힌트가 궁금해요?\n안알려줄건데!\n$흰트를 입력해보세요!");
    }
    if(mg == "흰트"){
      replier.reply("흰트가 아니라 힌!트!\n유남셍?\n장난이고 음...잘 생각해보세요...\n아마 힌트가 아래에 있을 것 같은뎅...\n뭐라는거야 힌트는 위에 있어요!!!\nㅋㅋㅋㅋㅋㅋ");
    }
    if(mg == "힌!트!"){
      replier.reply("아... 이쯤되면 뇌절인것 같으니 알려드리죠.\n아\n리\n아\n리\n아\n리\n아\n리\n아\n리\n아\n리\n아\n리\nㅎㅎㅎㅎㅎㅎㅎ\n끝까지 속넼ㅋㅋㅋㅋㅋㅋ\n안알려줄 거지롱!\n\n\n사실... 힌트는 이미 드렸습니다.\n그럼 수고!");
    }
    if(mg == "$$$$$$"){
      pass_easter = "";
      for(i = 0; i < 10; i++) {
        pass_easter = pass_easter + alpha[parseInt(Math.random()*25)];
      }
      File.save("/storage/emulated/0/ChatBot/BotData/메인/Easter.txt", pass_easter, false);
      replier.reply("축하합니다!\n이스터에그를 발견하셨습니다!\n$아래의 비밀번호,아이디,비밀번호를 입력해주세요.\n정확히 입력하지 않을시 아무 반응도 하지 않습니다.");
      replier.reply("비밀번호 : " + pass_easter);
    }
    if(mg.slice(0, 10) == Easter_code) {
      id = mg.split(",")[1];
      passwd = mg.split(",")[2];
      if(id in User_IDPW) {
        if(passwd == User_IDPW[id]){
          if(Easter_finder.indexOf(id) != -1) {
            replier.reply("이미 이스터에그 보상을 받았습니다.");
            File.save("/storage/emulated/0/ChatBot/BotData/메인/Easter.txt", "", false);
          }
          else{
            replier.reply("확인되었습니다.");
            User_Cash[id] = User_Cash[id] + 7777777;
            save = "";
            for(var key in User_Cash) {
              save = save + key + " : " + User_Cash[key] + "\n";
            }
            save = save.slice(0, save.length-1);
            File.save("/storage/emulated/0/ChatBot/BotData/아리아리/User_Cash.txt", save);
            replier.reply("이스터에그 보상으로 계좌에 7777777크레딧이 입금되었습니다.\n유용하게 사용하세요.^^");
            File.save("/storage/emulated/0/ChatBot/BotData/메인/Easter.txt", "", false);
            File.save("/storage/emulated/0/ChatBot/BotData/메인/Easter_finder.txt", "\n" + id, true);
          }
        }
      }
    }
  }
}