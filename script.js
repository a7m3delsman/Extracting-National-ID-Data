function extractData() {
    var nationalId = document.getElementById("national-id").value;
    var resultContainer = document.getElementById("result-container");
    
    
    var configuration = nationalId.substring(9,12);

    var birthYear = nationalId.substring(1, 3);
    var birthMonth = nationalId.substring(3, 5);
    var birthDay = nationalId.substring(5, 7);
    
    var today = new Date();
    var currentYear = today.getFullYear();
    
    
    if (birthYear >= 0 && birthYear <= currentYear % 100) {
      birthYear = "20" + birthYear;
    } else {
      birthYear = "19" + birthYear;
    }
    
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    var ageDiff = today - birthDate;
    var ageDate = new Date(ageDiff);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    var governorateCode = nationalId.substring(7, 9);
    var genderCode = nationalId.substring(12, 13);
    var gender = (genderCode % 2 === 0) ? "أنثى" : "ذكر";
    
    var governorate = getGovernorate(governorateCode);
    if (nationalId.length !== 14||birthDay>31||birthMonth>12) {
      resultContainer.innerHTML = "<b class='error'>. هناك خطأ - الرجاء إدخال الرقم القومي صحيح</b>";
      return;
    }
    var
    result = "<p>  تاريخ الميلاد :   " + birthDay + "/" + birthMonth + "/" + birthYear + "</p>"+"<br>";
    result += "<p> السن :  " + age + " سنة</p>" +"<br>";
    result += "<p>النوع :   " + gender + "</p>"+"<br>";
    result += "<p>  محل الميلاد : " + governorate + "</p>"+"<br>";
    result += "<p> ترتيبك في اليوم الذي انولدت فيه في محافظتك :  " + configuration + "</p>"+"<br>";
    resultContainer.innerHTML = result;
  }

  
  function getGovernorate(code) {
      switch (code) {
          case "01": return "محافظة القاهرة";
          case "02": return "محافظة الاسكندرية";
          case "03": return "محافظة بورسعيد";
          case "04": return "محافظة السويس";
          case "11": return "محافظة دمياط";
          case "12": return "محافظةالدقهلية";
          case "13": return "محافظة الشرقية";
          case "14": return "محافظة القليوبية";
          case "15": return "محافظة كفر الشيخ";
          case "16": return "محافظة الغربية";
          case "17": return "محافظة المنوفية";
          case "18": return "محافظة البحيرة";
          case "19": return "محافظة الإسماعيلية";
          case "21": return "محافظة الجيزة";
          case "22": return "محافظة بني سويف";
          case "23": return "محافظة الفيوم";
          case "24": return "محافظة المنيا";
          case "25": return "محافظة أسيوط";
          case "26": return "محافظة سوهاج";
          case "27": return "محافظة قنا";
          case "28": return "محافظة أسوان";
          case "29": return "محافظةالأقصر";
          case "31": return "محافظة البحر الأحمر";
          case "32": return "محافظة الوادي الجديد";
          case "33": return "محافظة مطروح";
          case "34": return "محافظة شمال سيناء";
          case "35": return  "محافظة جنوب سيناء";
          case "88": return "مولود خارج الجمهورية";
          default: return "غير معروف";
      }
  }
  const mainMenu = document.querySelector('.mainMenu');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');
  const menu_items = document.querySelectorAll('nav .mainMenu li a');
  
  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);
  
  
  menu_items.forEach(item => {
      item.addEventListener('click',function(){
          close();
      })
  })
  function show(){
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0%';
  }
  function close(){
      mainMenu.style.top = '-150%';
      return;
  }
  var audio = new Audio('button-click.mp3');
  function playClickSound() {
      clickSound.currentTime = 0;
      clickSound.play();
    }