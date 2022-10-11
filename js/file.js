//초기화된 값을 배열에 추가
var file_item = document.getElementsByClassName("file_item")[0];
var list_clones = [];
for(let i=0; i<10; i++){
    var clone_file_item = file_item.cloneNode(true);
    list_clones.push(clone_file_item);
}

var fileNums = 0;

function add_fileLI(){
    if(fileNums >= 4){
        alert("첨부파일은 5개 까지만 추가 됩니다.");
        return false;
    }else{
        // $(".table_write").find("tbody").append(list_clones[fileNums]);
        let file_list = document.getElementsByClassName("file_list")[0];
        file_list.getElementsByTagName("UL")[0].appendChild(list_clones[fileNums]);
        fileNums++;
    }
}

//첨부파일 삭제
function delFile(e){
    var this_file_item = e.parentNode.parentNode; //console.log(this_file_item);
    if(fileNums < 1){
        return false;
    }else{
        this_file_item.parentNode.removeChild(this_file_item);
        fileNums--;
    }//if,else
}

//upload-name 에 파일명을 불러옵니다
function uploadName(e){
    var files = e.files;
    var filename = files[0].name;  //console.log(filename);
    // 추출한 파일명 삽입 
    var upload_name = e.parentNode.previousElementSibling;
    upload_name.value = filename;
}