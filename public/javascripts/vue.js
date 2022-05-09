 var Myapp = new Vue({
    el:'#app',
    data:{
        EventDate:"",
        StartTime:"",
        EndTime:"",
        Description:"",
        checked:[],
        privateOrpublic:"",
        FirstName:"",
        LastName:"",
        Email:"",
        first :true,
        second :false,
        third: false,
        fourth: false,
        createPageNavItems :[
        {name:'Basic Description'},{name:'Organiser Details'},
        {name: 'Date & Time'}, 
        {name:'Preview & Confirmation'}
        ],
        address :[{city:""}, {Address1:""},{state:""},{country:""},{postcode:""}],
        selected: "Type of Event",
        
        numberOfattendees: "",
        typeOfevent: [
            {type: 'Conference/Corporate'},
            {type: 'Career Fair'},
            {type: 'Lecture'},
            {type: 'Get together'},
            {type: "Health/Doctor's Appointment"},
            {type: 'Date'},
            {type: 'Shopping'},
            {type: 'Wedding'}

        ]
    },
    methods:{
        displayMe: function(index){
            if(index == 0){
                this.first = true;
                this.second = false;
                this.third = false;
                this.fourth = false;
            }else if(index == 1){
                this.first = false;
                this.second = true;
                this.third = false;
                this.fourth = false;
            }else if(index == 2){
                this.first = false;
                this.second = false;
                this.third = true;
                this.fourth = false;
            }else if (index == 3){
                this.first = false;
                this.second = false;
                this.third = false;
                this.fourth = true;
            }
            this.changeColor(index);
            
            
        },
       changeColor: function(index){
        var elements = document.getElementById("EventCreationSteps").childNodes;
        elements[index].style.backgroundColor = "darkgray";
        for(let i = 0; i < elements.length; i++){
            
            if(i != index){
                elements[i].style.backgroundColor = "#8cd1cb";
            }
        }
       }, 
       setMinDate: function(){
           var date = new Date();
           let currentDate = date.getDate()+1;
           let currentMonth = date.getMonth()+1;
           if (currentDate < 10){
               currentDate = '0'+currentDate;
           }
           if(currentMonth < 10){
               currentMonth = '0'+currentMonth;
           }
           const currentYear = date.getFullYear();
           const calendar = document.getElementById("calendar");
           calendar.setAttribute('min',currentYear+"-"+currentMonth+"-"+currentDate);
       }

    }

 });



var elements = document.getElementById("EventCreationSteps").childNodes;
elements[0].style.backgroundColor = "darkgray";

var readURL = function (event){
    var image = document.createElement("img");
    image.src = URL.createObjectURL(event.target.files[0]);

    image.height = "200";
    document.getElementById("image_box").appendChild(image);
}



 