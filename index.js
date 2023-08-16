// 데이터
var trainSpot = [
    ["0","왜 인덱스는 0부터 시작인지 진자 짜증난다,,"],
    ["1","경부선"],   //1
    ["2","호남선"],   //2
    ["3","경전선"],   //3
    ["4","전라선"],   //4
    ["5","강릉선"],   //5
    ["6","중앙선"],   //6
    ["7","중부내륙선"]    //7
];

var trainLineList = {};

trainLineList["0"] = "";
trainLineList["1"] = "경부선";
trainLineList["2"] = "호남선";
trainLineList["3"] = "경전선";
trainLineList["4"] = "전라선";
trainLineList["5"] = "강릉선";
trainLineList["6"] = "중앙선";
trainLineList["7"] = "중부내륙선";

var allTainSpot = [
    "가남",
    "감곡장호원",
    "강릉",
    "계룡",
    "곡성",
    "공주",
    "광명",
    "광주송정",
    "구례구",
    "구포",
    "김천(구미)",
    "나주",
    "남원",
    "논산",
    "단양",
    "대전",
    "동대구",
    "동행",
    "둔내",
    "마산",
    "만종",
    "목포",
    "묵호",
    "밀양",
    "부발",
    "부산",
    "상봉",
    "서대구",
    "서대전",
    "서울",
    "서원주",
    "수원",
    "순천",
    "신경주",
    "안동",
    "양성온천",
    "양평",
    "여수엑스포",
    "여천",
    "영등포",
    "영주",
    "오송",
    "용산",
    "울산",
    "원주",
    "익산",
    "전주",
    "정동진",
    "정읍",
    "제천",
    "진부(오대산)",
    "진영",
    "진주",
    "창원",
    "창원중앙",
    "천안아산(온양온천)",
    "청량리",
    "충주",
    "평창",
    "포항",
    "풍기",
    "행신",
    "횡성",
];

var trainSpotList = {};

trainSpotList["0"] = "";

trainSpotList["trainSpot1"] = [
    "행신",
    "서울",
    "영등포",
    "광명",
    "수원",
    "천안아산(온양온천)",
    "오송",
    "대전",
    "김천(구미)",
    "서대구",
    "동대구",
    "포항",
    "밀양",
    "신경주",
    "울산",
    "구포",
    "부산"
];

trainSpotList["trainSpot2"] = [
    "행신",
    "용산",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "공주",
    "서대전",
    "논산",
    "계룡",
    "익산",
    "정읍",
    "광주송정",
    "나주",
    "목포"
];

trainSpotList["trainSpot3"] = [
    "행신",
    "서울",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "대전",
    "김천(구미)",
    "서대구",
    "동대구",
    "밀양",
    "창원",
    "진영",
    "창원중앙",
    "진주",
    "마산"
];

trainSpotList["trainSpot4"] = [
    "행신",
    "용산",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "공주",
    "서대전",
    "논산",
    "계룡",
    "익산",
    "전주",
    "남원",
    "곡성",
    "구례구",
    "순천",
    "여천",
    "여수엑스포"
];

trainSpotList["trainSpot5"] = [
    "행신",
    "서울",
    "청량리",
    "상봉",
    "진부(오대산)",
    "강릉",
    "양평",
    "횡성",
    "만종",
    "둔내",
    "평창",
    "정동진",
    "묵호",
    "동행"
];

trainSpotList["trainSpot6"] = [
    "청량리",
    "양평",
    "서원주",
    "원주",
    "제천",
    "단양",
    "풍기",
    "영주",
    "안동"
];

trainSpotList["trainSpot7"] = [
    "부발",
    "가남",
    "감곡장호원",
    "양성온천",
    "충주"
];

var trainSpot1 = [
    "행신",
    "서울",
    "영등포",
    "광명",
    "수원",
    "천안아산(온양온천)",
    "오송",
    "대전",
    "김천(구미)",
    "서대구",
    "동대구",
    "포항",
    "밀양",
    "신경주",
    "울산",
    "구포",
    "부산"
];

var trainSpot2 = [
    "행신",
    "용산",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "공주",
    "서대전",
    "논산",
    "계룡",
    "익산",
    "정읍",
    "광주송정",
    "나주",
    "목포"
];

var trainSpot3 = [
    "행신",
    "서울",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "대전",
    "김천(구미)",
    "서대구",
    "동대구",
    "밀양",
    "창원",
    "진영",
    "창원중앙",
    "진주",
    "마산"
];

var trainSpot4 = [
    "행신",
    "용산",
    "광명",
    "천안아산(온양온천)",
    "오송",
    "공주",
    "서대전",
    "논산",
    "계룡",
    "익산",
    "전주",
    "남원",
    "곡성",
    "구례구",
    "순천",
    "여천",
    "여수엑스포"
];

var trainSpot5 = [
    "행신",
    "서울",
    "청량리",
    "상봉",
    "진부(오대산)",
    "강릉",
    "양평",
    "횡성",
    "만종",
    "둔내",
    "평창",
    "정동진",
    "묵호",
    "동행"
];

var trainSpot6 = [
    "청량리",
    "양평",
    "서원주",
    "원주",
    "제천",
    "단양",
    "풍기",
    "영주",
    "안동"
];

var trainSpot7 = [
    "부발",
    "가남",
    "감곡장호원",
    "양성온천",
    "충주"
];

var airplaneSpot = [
    ["0","왜 인덱스는 0부터 시작인지 진자 짜증난다,,"],
    ["1","서울/김포"],
    ["2","부산/김해"],
    ["3","제주"],
    ["4","대구"],
    ["5","울산"],
    ["6","청주"],
    ["7","무안"],
    ["8","광주"],
    ["9","여수"],
    ["10","포항경주"],
    ["11","양양"],
    ["12","사천"],
    ["13","군산"],
    ["14","횡성/원주"]
];

var airplaneSpotList = {};

var airplaneLineList = {};

airplaneLineList["1"] = "서울/김포";
airplaneLineList["2"] = "부산/김해";
airplaneLineList["3"] = "제주";
airplaneLineList["4"] = "대구";
airplaneLineList["5"] = "울산";
airplaneLineList["6"] = "청주";
airplaneLineList["7"] = "무안";
airplaneLineList["8"] = "광주";
airplaneLineList["9"] = "여수";
airplaneLineList["10"] = "포항경주";
airplaneLineList["11"] = "양양";
airplaneLineList["12"] = "사천";
airplaneLineList["13"] = "군산";
airplaneLineList["14"] = "횡성/원주";

airplaneSpotList["airplaneSpot1"] = [
    "광주",
    "무안",
    "부산/김해",
    "양양",
    "여수",
    "울산",
    "제주",
    "진주/사천",
    "포항/포항경주"
];

airplaneSpotList["airplaneSpot2"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot3"] = [
    "광주",
    "군산",
    "대구",
    "무안",
    "부산/김해",
    "서울/김포",
    "여수",
    "울산",
    "원주",
    "진주/사천",
    "청주",
    "포항/포항경주"
];

airplaneSpotList["airplaneSpot4"] = [
    "제주"
];

airplaneSpotList["airplaneSpot5"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot6"] = [
    "양양",
    "제주"
];

airplaneSpotList["airplaneSpot7"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot8"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot9"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot10"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot11"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot12"] = [
    "서울/김포",
    "제주"
];

airplaneSpotList["airplaneSpot13"] = [
    "제주"
];

airplaneSpotList["airplaneSpot14"] = [
    "제주"
];

var airplaneSpot1 = [
    "광주",
    "무안",
    "부산/김해",
    "양양",
    "여수",
    "울산",
    "제주",
    "진주/사천",
    "포항/포항경주"
];

var airplaneSpot2 = [
    "서울/김포",
    "제주"
];

var airplaneSpot3 = [
    "광주",
    "군산",
    "대구",
    "무안",
    "부산/김해",
    "서울/김포",
    "여수",
    "울산",
    "원주",
    "진주/사천",
    "청주",
    "포항/포항경주"
];

var airplaneSpot4 = [
    "제주"
];

var airplaneSpot5 = [
    "서울/김포",
    "제주"
];

var airplaneSpot6 = [
    "양양",
    "제주"
];

var airplaneSpot7 = [
    "서울/김포",
    "제주"
];

var airplaneSpot8 = [
    "서울/김포",
    "제주"
];

var airplaneSpot9 = [
    "서울/김포",
    "제주"
];

var airplaneSpot10 = [
    "서울/김포",
    "제주"
];

var airplaneSpot11 = [
    "서울/김포",
    "제주"
];

var airplaneSpot12 = [
    "서울/김포",
    "제주"
];

var airplaneSpot13 = [
    "제주"
];

var airplaneSpot14 = [
    "제주"
];

var selected1="";  // 교통수단
                // 1 기차, 2 비행기
var _selected2=""; // 출발지나 도착지를 사용자가 선택했을 경우
var __selected2=""; // 1이면 출발지 선택, 2이면 도착지 선택
var selected2="";  // 출발지
var selected3="";  // 도착지

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function goNext1(){

    var way = $('input[name=traffic-way]:checked').val();
    var traffic = $('input[name=traffic-select]:checked').val();
    // 방향 안고름
    // if(!way){
    //     alert("어디로 가실건데요,,,ㅠㅠ");
    // }
    // 뭘타고 안고름
    // 방향 안고름
    //else 
    if(!traffic){
        alert("뭐타고 가실건데요,,,ㅠㅠ");
    }
    else{
        // 다 잘 고름!
        if(traffic == "anything"){
            //1이랑 2중에 고르기
            selected1 = rand(1,2);
            console.log(selected1)
            goSelect1();
        }
        else if(traffic == "train"){
            selected1 = 1;
            goSelect1();
        }
        else if(traffic == "airplane"){
            selected1 = 2;
            goSelect1();
        }

    }
}

function goSelect1(){
    // 1번 고르기 안보이게 처리
    $("#select1").hide();
    // 2번 고르기 보이게 처리
    $("#select2").show();
}

function goNext2(){
    var randomthings = $('input[name=randomthings]:checked').val();
    if(!randomthings){
        alert("뭘 고르실건데요,,,ㅠㅠ");
    }
    else{
        // 다 잘 고름!
        // 둘다 고름
        if(randomthings == "both"){
            goResult(2);
        }
        else{
            goSelect2(randomthings);
        }      
    }
}

function goSelect2(randomthings){

    // 2번 고르기 안보이게 처리
    $("#select2").hide();
    // 3번 고르기 보이게 처리
    $("#select3").show();

    // 출발지 고름
    if(randomthings == "start"){
        // 도착지 고르라고 함
        $("#selectedWhere").text("도착지");
        __selected2 = 2;
    }
    // 도착지 고름
    else if(randomthings == "end"){
        // 출발지 고르라고 함
        $("#selectedWhere").text("출발지");
        __selected2 = 1;
    }

    // selecct 설정
    // 기차
    if(selected1 == 1){
        // 1~7
        for(var i = 0 ; i < allTainSpot.length; i++){
            var option = `<option value="`+ allTainSpot[i] +`">` + allTainSpot[i] + `</option>`;
            $("#selectSpot").append(option);
        }
    }
    // 비행기
    else if(selected1 == 2){
        // 1~14
        for(var i = 1 ; i < airplaneSpot.length; i++){
            var option = `<option value="`+ airplaneSpot[i][0] +`">` + airplaneSpot[i][1] + `</option>`;
            $("#selectSpot").append(option);
        }
    }
}

function goSelect3(){
    var selectSpot = $('#selectSpot').find(":selected").val();

    if(!selectSpot){
        alert("어디인지 골라주세요 ㅠㅠ");
    }
    else{
        _selected2 = selectSpot;
        goResult(3);
    }
}


function goResult(depth){
    $("#select" + depth).hide();
    // 결과값 보이게 처리
    $("#okresult").show();
    // 출발지나 도착지가 정해지지 않았으면
    if(!_selected2){
        // 기차
        if(selected1 == 1){
            // 출발지 정하고
            var r_index = rand(1,7);
            $("#trainLine").text(trainLineList[r_index]);
            $("#trainLineExplain").text("을 이용하세요...");
            var t_r_index1 = rand(0,trainSpotList["trainSpot" + r_index].length - 1);
            $("#final_start").text(trainSpotList["trainSpot" + r_index][t_r_index1]);
            var t_r_index2 = rand(0,trainSpotList["trainSpot" + r_index].length - 1);
            $("#final_end").text(trainSpotList["trainSpot" + r_index][t_r_index2]);
            // 도착지 정한다.
            $("#final_traffic").text("KTX");
        }
        // 비행기
        else{
            $("#final_traffic").text("비행기");
            // 출발지 정하고
            var r_index = rand(1,14);
            $("#final_start").text(airplaneLineList[r_index]);
            // 도착지 정한다.
            var a_r_index = rand(0, airplaneSpotList["airplaneSpot" + r_index].length - 1);
            $("#final_end").text(airplaneSpotList["airplaneSpot" + r_index][a_r_index]);
        }
    }
    // 출발지나 도착지가 정해져 있으면
    else if(_selected2){
        // 기차
        if(selected1 == 1){
            // 선택한 출발지,, 혹은 도착지가 어떤 라인에 있는지를 먼저 찾아야 한다.
            var selectedSpot = [];
            var selectedLine = [];

            for(var i = 1; i < 8; i++){
                for(var j = 0; j < trainSpotList["trainSpot" + i].length; j++){
                    // 해당 라인에 있으면
                    if(trainSpotList["trainSpot" + i].indexOf(_selected2) != -1){
                        selectedSpot.push(trainSpotList["trainSpot" + i][j]);
                        selectedLine.push(i);
                    }
                }
            }

            $("#final_traffic").text("KTX");

            // 출발지 선택해둔거면
            var r_index = rand(0,selectedSpot.length - 1);
            
            if(__selected2 == 1){
                $("#final_start").text(_selected2);
                $("#final_end").text(selectedSpot[r_index]);
            }
            // 도착지 선택 해둔거면
            else{
                $("#final_end").text(_selected2);
                $("#final_start").text(selectedSpot[r_index]);
            }

            console.log(selectedLine)
            console.log(selectedLine[r_index])
            console.log(trainLineList)
            console.log(trainLineList[3])
            console.log(trainLineList[selectedLine[r_index]])
            $("#trainLine").text(trainLineList[selectedLine[r_index]]);
            $("#trainLineExplain").text("을 이용하세요...");
        }
        // 비행기
        else{
            $("#final_traffic").text("비행기");
            // 선택한 출발지 혹은 도착지에 따라서 찾기
            var r_index = rand(0,airplaneSpotList["airplaneSpot" + _selected2].length - 1 );
            console.log('r_index : ' + r_index);
            console.log(airplaneSpotList["airplaneSpot" + _selected2]);

            // 출발지 선택해둔거면
            if(__selected2 == 1){
                $("#final_start").text(airplaneLineList[_selected2]);
                $("#final_end").text(airplaneSpotList["airplaneSpot" + _selected2][r_index]);
            }
            // 도착지 선택 해둔거면
            else{
                $("#final_end").text(airplaneLineList[_selected2]);
                $("#final_start").text(airplaneSpotList["airplaneSpot" + _selected2][r_index]);
            }
        }
    }
}

function goToMain(){
    location.reload();
}
