document.addEventListener("DOMContentLoaded", () => {

    const gameStarts = document.getElementById("gameStart");
    const boxone = document.getElementById("boxone");
    const boxtwo = document.getElementById("boxtwo");
    const boxthree = document.getElementById("boxthree");
    const boxfour = document.getElementById("boxfour");
    const boxfive = document.getElementById("boxfive");
    const boxsix = document.getElementById("boxsix");
    const boxseven = document.getElementById("boxseven");
    const boxeight = document.getElementById("boxeight");
    const box_nine = document.getElementById("box-nine");
    const gameEnd = document.getElementById("gameEnd");
    var box=[];
    /*const boxes=[box_one,box_two,box_three,box_four,box_five,box_six,box_seven,box_eight,box_nine];*/
    var count=0;
    gameStarts.onclick = function gameStart(){
        gameEnd.style.display="none";
        ticked();
    }
        /*for(let i=0;i<=8;i++){
            boxClick = boxes[i];
            
            boxes[i].onclick = ticked(boxClick);            
        };*/
        /*document.addEventListener("click",ticked());*/
        /*boxone.onclick = ticked();
        box_two.onclick = ticked(box_two);
        box_three.onclick = ticked(box_three);
        box_four.onclick = ticked(box_four);
        box_five.onclick = ticked(box_five);
        box_six.onclick = ticked(box_six);
        box_seven.onclick = ticked(box_seven);
        box_eight.onclick = ticked(box_eight);
        box_nine.onclick = ticked(box_nine);*/
     /*    
    function display(box){
        console.log(this.innerHTML);
        if(this.innerHTML == undefined){
        if(count==0||count==2||count==4||count==6||count==8){
            console.log(box.innerHTML);
            box.innerHTML="X";
        }
        else{
            box.innerHTML="O";
        }
        console.log(box.innerHTML);
        count++;
    }
    } */
    function ticked(){
        alert("function ticked");
        console.log(count);
        
            
        if(count<=8){
            boxone.onclick = function display1(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                    
                count++;
                console.log(count);
                ticked();
                }
                else{
                    this.innerHTML="O";
                    
                count++;
                console.log(count);
                ticked();
                }
                
                
                }
            }
            boxtwo.onclick = function display2(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                console.log(boxtwo.innerHTML);
                count++;
                console.log(count);
                ticked();
                }
            }
            boxthree.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                count++;
                console.log(count);
                ticked();
                }
            }
            
            boxfour.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
            }
            
            boxfive.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
            }
            boxsix.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
            }    
            boxseven.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
            }
            boxeight.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
            }    
            box_nine.onclick = function display(){
                if(this.innerHTML==""){
                if(count==0||count==2||count==4||count==6||count==8){
                    this.innerHTML="X";
                }
                else{
                    this.innerHTML="O";
                }
                
                count++;
                console.log(count);
                ticked();
                }
               
            }
            if(count==4||count==5||count==6||count==7||count==8){
                winner();
            }
           
        }
            else{
                console.log(count);
                alert("count 9");
                count=0;
                gameOver();
            }
      
        }
        function gameOver(){
            winner();
            alert("gameOver function")
            boxone.innerHTML="";
            boxtwo.innerHTML="";
            boxthree.innerHTML="";
            boxfour.innerHTML="";
            boxfive.innerHTML="";
            boxsix.innerHTML="";
            boxseven.innerHTML="";
            boxeight.innerHTML="";
            box_nine.innerHTML="";
            gameEnd.style.display="flex";
        }        

        function winner(){
            alert("winner function");
            box=[boxone.innerHTML,boxtwo.innerHTML,boxthree.innerHTML,boxfour.innerHTML,boxfive.innerHTML,
                boxsix.innerHTML,boxseven.innerHTML,boxeight.innerHTML,box_nine.innerHTML];
                console.log(boxone.innerHTML);
                for(let i=0;i<=8;i++){
                    console.log(box[i]);
                    }
            checkX();
            checkO();
        }
        function checkX(){
            var isThereWin=0;
            alert("check-X function");
            for(let i=0;i<=8;i++){
            console.log(box[i]);
            }
            console.log((box[0]=="X"&&box[1]=="X"&&box[2]=="X") ||
            (box[0]=="X"&&box[3]=="X"&&box[6]=="X") ||
            (box[0]=="X"&&box[4]=="X"&&box[8]=="X") ||
            (box[1]=="X"&&box[4]=="X"&&box[7]=="X") ||
            (box[2]=="X"&&box[5]=="X"&&box[8]=="X") ||
            (box[2]=="X"&&box[4]=="X"&&box[6]=="X") ||
            (box[3]=="X"&&box[4]=="X"&&box[5]=="X") ||
            (box[6]=="X"&&box[7]=="X"&&box[8]=="X"))
            if((box[0]=="X"&&box[1]=="X"&&box[2]=="X") ||
                (box[0]=="X"&&box[3]=="X"&&box[6]=="X") ||
                (box[0]=="X"&&box[4]=="X"&&box[8]=="X") ||
                (box[1]=="X"&&box[4]=="X"&&box[7]=="X") ||
                (box[2]=="X"&&box[5]=="X"&&box[8]=="X") ||
                (box[2]=="X"&&box[4]=="X"&&box[6]=="X") ||
                (box[3]=="X"&&box[4]=="X"&&box[5]=="X") ||
                (box[6]=="X"&&box[7]=="X"&&box[8]=="X")){
                    alert("player1 is winner");
                    isThereWin=1;
                }
                if(isThereWin==0){
                    ticked();
                }
                else{
                    gameOver();
                }
        }
        function checkO(){
            var isThereWin=0;
            alert("check-O function");
            if((box[0]=="O"&&box[1]=="O"&&box[2]=="O") ||
                (box[0]=="O"&&box[3]=="O"&&box[6]=="O") ||
                (box[0]=="O"&&box[4]=="O"&&box[8]=="O") ||
                (box[1]=="O"&&box[4]=="O"&&box[7]=="O") ||
                (box[2]=="O"&&box[5]=="O"&&box[8]=="O") ||
                (box[2]=="O"&&box[4]=="O"&&box[6]=="O") ||
                (box[3]=="O"&&box[4]=="O"&&box[5]=="O") ||
                (box[6]=="O"&&box[7]=="O"&&box[8]=="O")){
                    alert("player2 is winner");
                    isThereWin=1;
                }
                if(isThereWin==0){
                    ticked();
                }
                else{
                    gameOver();
                }
        }


    });