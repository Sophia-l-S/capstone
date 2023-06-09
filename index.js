//sophia JS, pet project

jQuery(window).on("load", function () {

    /////////////////////////////////////////////////////////////////////////////school    
    //Monday school hours
    // $('#SHM').click(schM);
    // var shm = document.getElementById("SHM");

    // function schM() {
    //     var SHM = prompt("How many hours do you have school on Monday?");
    //     shm.innerHTML = (+SHM);
    //     console.log(shm.innerHTML);
    //     if (shm.innerHTML === "NaN") {
    //         shm.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHM').click(schM);
    var shm = document.getElementById("SHM");

    function schM() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shm.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shm.innerHTML = +value;
            console.log(shm.innerHTML);
            if (isNaN(shm.innerHTML)) {
                shm.style.background = "red";
                return false;
            }
        });

        shm.innerHTML = "";
        shm.appendChild(inputField);
        inputField.focus();
    }


    //Tuseday school hours
    // $('#SHTu').click(schTu);
    // var shtu = document.getElementById("SHTu");

    // function schTu() {
    //     var SHTu = prompt("How many hours do you have school on Tuseday?");
    //     shtu.innerHTML = (+SHTu);
    //     console.log(shtu.innerHTML);
    //     if (shtu.innerHTML === "NaN") {
    //         shtu.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHTu').click(schTu);
    var shtu = document.getElementById("SHTu");

    function schTu() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shtu.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shtu.innerHTML = +value;
            console.log(shtu.innerHTML);
            if (isNaN(shtu.innerHTML)) {
                shtu.style.background = "red";
                return false;
            }
        });

        shtu.innerHTML = "";
        shtu.appendChild(inputField);
        inputField.focus();
    }


    //Wednsday school hours
    // $('#SHW').click(schW);
    // var shw = document.getElementById("SHW");

    // function schW() {
    //     var SHW = prompt("How many hours do you have school on Wednsday?");
    //     shw.innerHTML = (+SHW);
    //     console.log(shw.innerHTML);
    //     if (shw.innerHTML === "NaN") {
    //         shw.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHW').click(schW);
    var shw = document.getElementById("SHW");

    function schW() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shw.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shw.innerHTML = +value;
            console.log(shw.innerHTML);
            if (isNaN(shw.innerHTML)) {
                shw.style.background = "red";
                return false;
            }
        });

        shw.innerHTML = "";
        shw.appendChild(inputField);
        inputField.focus();
    }
    //Thursday school hours
    // $('#SHT').click(schT);
    // var sht = document.getElementById("SHT");

    // function schT() {
    //     var SHT = prompt("How many hours do you have school on Thursday?");
    //     sht.innerHTML = (+SHT);
    //     if (sht.innerHTML === "NaN") {
    //         sht.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHT').click(schT);
    var sht = document.getElementById("SHT");

    function schT() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = sht.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            sht.innerHTML = +value;
            console.log(sht.innerHTML);
            if (isNaN(sht.innerHTML)) {
                sht.style.background = "red";
                return false;
            }
        });

        sht.innerHTML = "";
        sht.appendChild(inputField);
        inputField.focus();
    }
    // //Friday school hours
    // $('#SHF').click(schF);
    // var shf = document.getElementById("SHF");

    // function schF() {
    //     var SHF = prompt("How many hours do you have school on Friday?");
    //     shf.innerHTML = (+SHF);
    //     if (shf.innerHTML === "NaN") {
    //         shf.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHF').click(schF);
    var shf = document.getElementById("SHF");

    function schF() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shf.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shf.innerHTML = +value;
            console.log(shf.innerHTML);
            if (isNaN(shf.innerHTML)) {
                shf.style.background = "red";
                return false;
            }
        });

        shf.innerHTML = "";
        shf.appendChild(inputField);
        inputField.focus();
    }
    // //Saturday school hours
    // $('#SHS').click(schS);
    // var shs = document.getElementById("SHS");

    // function schS() {
    //     var SHS = prompt("How many hours do you have school on Saturday?");
    //     shs.innerHTML = (+SHS);
    //     console.log(shs.innerHTML);
    //     if (shs.innerHTML === "NaN") {
    //         shs.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHS').click(schS);
    var shs = document.getElementById("SHS");

    function schS() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shs.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shs.innerHTML = +value;
            console.log(shs.innerHTML);
            if (isNaN(shs.innerHTML)) {
                shs.style.background = "red";
                return false;
            }
        });

        shs.innerHTML = "";
        shs.appendChild(inputField);
        inputField.focus();
    }
    // //Sunday School hours
    // $('#SHSu').click(schSu);
    // var shsu = document.getElementById("SHSu");

    // function schSu() {
    //     var SHSu = prompt("How many hours do you have school on Sunday?");
    //     shsu.innerHTML = (+SHSu);
    //     console.log(shsu.innerHTML);
    //     if (shsu.innerHTML === "NaN") {
    //         shsu.style.background = "red";
    //         return false;
    //     }
    // }
    $('#SHSu').click(schSu);
    var shsu = document.getElementById("SHSu");

    function schSu() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = shsu.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            shsu.innerHTML = +value;
            console.log(shsu.innerHTML);
            if (isNaN(shsu.innerHTML)) {
                shsu.style.background = "red";
                return false;
            }
        });

        shsu.innerHTML = "";
        shsu.appendChild(inputField);
        inputField.focus();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////work    
    //Monday work hours
    // $('#WHM').click(worM);
    // var whm = document.getElementById("WHM");

    // function worM() {
    //     var WHM = prompt("How many hours do you have work on Monday?");
    //     whm.innerHTML = (+WHM);
    //     if (whm.innerHTML === "NaN") {
    //         whm.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHM').click(worM);
    var whm = document.getElementById("WHM");

    function worM() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whm.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whm.innerHTML = +value;
            console.log(whm.innerHTML);
            if (isNaN(whm.innerHTML)) {
                whm.style.background = "red";
                return false;
            }
        });

        whm.innerHTML = "";
        whm.appendChild(inputField);
        inputField.focus();
    }

    // //Tuesday work hours
    // $('#WHTu').click(worTu);
    // var whtu = document.getElementById("WHTu");

    // function worTu() {
    //     var WHTu = prompt("How many hours do you have work on Tuesday?");
    //     whtu.innerHTML = (+WHTu);
    //     if (whtu.innerHTML === "NaN") {
    //         whtu.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHTu').click(worTu);
    var whtu = document.getElementById("WHTu");

    function worTu() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whtu.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whtu.innerHTML = +value;
            console.log(whtu.innerHTML);
            if (isNaN(whtu.innerHTML)) {
                whtu.style.background = "red";
                return false;
            }
        });

        whtu.innerHTML = "";
        whtu.appendChild(inputField);
        inputField.focus();
    }
    // //Wednsday work hours
    // $('#WHW').click(worW);
    // var whw = document.getElementById("WHW");

    // function worW() {
    //     var WHW = prompt("How many hours do you have work on Wednsday?");
    //     whw.innerHTML = (+WHW);
    //     if (whw.innerHTML === "NaN") {
    //         whw.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHW').click(worW);
    var whw = document.getElementById("WHW");

    function worW() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whw.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whw.innerHTML = +value;
            console.log(whw.innerHTML);
            if (isNaN(whw.innerHTML)) {
                whw.style.background = "red";
                return false;
            }
        });

        whw.innerHTML = "";
        whw.appendChild(inputField);
        inputField.focus();
    }
    // //Thursday work hours
    // $('#WHT').click(worT);
    // var wht = document.getElementById("WHT");

    // function worT() {
    //     var WHT = prompt("How many hours do you have work on Thursday?");
    //     wht.innerHTML = (+WHT);
    //     if (wht.innerHTML === "NaN") {
    //         wht.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHT').click(worT);
    var wht = document.getElementById("WHT");

    function worT() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = wht.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            wht.innerHTML = +value;
            if (isNaN(wht.innerHTML)) {
                wht.style.background = "red";
                return false;
            }
        });

        wht.innerHTML = "";
        wht.appendChild(inputField);
        inputField.focus();
    }
    // //Friday work hours
    // $('#WHF').click(worF);
    // var whf = document.getElementById("WHF");

    // function worF() {
    //     var WHF = prompt("How many hours do you have work on Friday?");
    //     whf.innerHTML = (+WHF);
    //     if (whf.innerHTML === "NaN") {
    //         whf.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHF').click(worF);
    var whf = document.getElementById("WHF");

    function worF() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whf.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whf.innerHTML = +value;
            if (isNaN(whf.innerHTML)) {
                whf.style.background = "red";
                return false;
            }
        });

        whf.innerHTML = "";
        whf.appendChild(inputField);
        inputField.focus();
    }
    // // Saturday work hours
    // $('#WHS').click(worS);
    // var whs = document.getElementById("WHS");

    // function worS() {
    //     var WHS = prompt("How many hours do you have work on Saturday?");
    //     whs.innerHTML = (+WHS);
    //     if (whs.innerHTML === "NaN") {
    //         whs.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHS').click(worS);
    var whs = document.getElementById("WHS");

    function worS() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whs.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whs.innerHTML = +value;
            console.log(whs.innerHTML);
            if (isNaN(whs.innerHTML)) {
                whs.style.background = "red";
                return false;
            }
        });

        whs.innerHTML = "";
        whs.appendChild(inputField);
        inputField.focus();
    }
    // // Sunday work hours
    // $('#WHSu').click(worSu);
    // var whsu = document.getElementById("WHSu");

    // function worSu() {
    //     var WHSu = prompt("How many hours do you have work on Sunday?");
    //     whsu.innerHTML = (+WHSu);
    //     if (whsu.innerHTML === "NaN") {
    //         whsu.style.background = "red";
    //         return false;
    //     }
    // }
    $('#WHSu').click(worSu);
    var whsu = document.getElementById("WHSu");

    function worSu() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = whsu.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var value = inputField.value;
            whsu.innerHTML = +value;
            console.log(whsu.innerHTML);
            if (isNaN(whsu.innerHTML)) {
                whsu.style.background = "red";
                return false;
            }
        });

        whsu.innerHTML = "";
        whsu.appendChild(inputField);
        inputField.focus();
    }
    //////////////////////////////////////////////////////////////////////////////////other    
    // all othe activitys hours
    var editButton = document.getElementById("editButton");

    editButton.addEventListener("click", editallother);

    function editallother(event) {
        event.stopPropagation();
        var otherValue = prompt("Edit the average hours of all other daily time users, such as sleep, travel, or meals.");
        var totalHours = parseInt(otherValue);
        var otherElement = document.getElementById("allother");

        if (!isNaN(totalHours)) {
            otherElement.innerHTML = "Hours for all other activities: +" + totalHours;
        } else {
            otherElement.style.background = "red";
        }
    }
    // // // Monday
    // $('#OtherM').click(OtherMon);
    // var mother = document.getElementById("OtherM");
    // function OtherMon() {
    //     var additionalHours = prompt("Do you have any additional activities on Monday? How many hours will it take?");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             mother.innerHTML = combinedHours;
    //             mother.style.background = "none";
    //         } else {
    //             mother.style.background = "red";
    //         }
    //     } else {
    //         mother.style.background = "red";
    //     }
    // }

    $('#OtherM').click(OtherMon);
    var mother = document.getElementById("OtherM");

    function OtherMon() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = mother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    mother.innerHTML = combinedHours;
                    mother.style.background = "none";
                } else {
                    mother.style.background = "red";
                }
            } else {
                mother.style.background = "red";
            }
        });

        mother.innerHTML = "";
        mother.appendChild(inputField);
        inputField.focus();
    }




    // Tuesday
    // $('#OtherTu').click(OtherTue);
    // var tuother = document.getElementById("OtherTu");

    // function OtherTue() {
    //     var additionalHours = prompt("Do you have any additional activities on Tuesday? How many hours will it take?", totalHours + " hours will be added");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             tuother.innerHTML = combinedHours;
    //             tuother.style.background = "none";
    //         } else {
    //             tuother.style.background = "red";
    //         }
    //     } else {
    //         tuother.style.background = "red";
    //     }
    // }
    $('#OtherTu').click(OtherTue);
    var tuother = document.getElementById("OtherTu");

    function OtherTue() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = tuother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    tuother.innerHTML = combinedHours;
                    tuother.style.background = "none";
                } else {
                    tuother.style.background = "red";
                }
            } else {
                tuother.style.background = "red";
            }
        });

        tuother.innerHTML = "";
        tuother.appendChild(inputField);
        inputField.focus();
    }

    //Wednsday
    $('#OtherW').click(OtherWed);
    var wother = document.getElementById("OtherW");

    // function OtherWed() {
    //     var additionalHours = prompt("Do you have any additional activities on Wednesday? How many hours will it take?", totalHours + " hours will be added");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             wother.innerHTML = combinedHours;
    //             wother.style.background = "none";
    //         } else {
    //             wother.style.background = "red";
    //         }
    //     } else {
    //         wother.style.background = "red";
    //     }
    // }
    function OtherWed() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = wother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    wother.innerHTML = combinedHours;
                    wother.style.background = "none";
                } else {
                    wother.style.background = "red";
                }
            } else {
                wother.style.background = "red";
            }
        });

        wother.innerHTML = "";
        wother.appendChild(inputField);
        inputField.focus();
    }

    //Thursday
    $('#OtherT').click(OtherThu);
    var tother = document.getElementById("OtherT");

    // function OtherThu() {
    //     var additionalHours = prompt("Do you have any additional activities on Thursday? How many hours will it take?", totalHours + " hours will be added");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             tother.innerHTML = combinedHours;
    //             tother.style.background = "none";
    //         } else {
    //             tother.style.background = "red";
    //         }
    //     } else {
    //         tother.style.background = "red";
    //     }
    // }
    function OtherThu() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = tother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    tother.innerHTML = combinedHours;
                    tother.style.background = "none";
                } else {
                    tother.style.background = "red";
                }
            } else {
                tother.style.background = "red";
            }
        });

        tother.innerHTML = "";
        tother.appendChild(inputField);
        inputField.focus();
    }

    //Friday
    $('#OtherF').click(OtherFri);
    var fother = document.getElementById("OtherF");

    // function OtherFri() {
    //     var additionalHours = prompt("Do you have any additional activities on Friday? How many hours will it take?", totalHours + " hours will be added");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             fother.innerHTML = combinedHours;
    //             fother.style.background = "none";
    //         } else {
    //             fother.style.background = "red";
    //         }
    //     } else {
    //         fother.style.background = "red";
    //     }
    // }
    function OtherFri() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = fother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    fother.innerHTML = combinedHours;
                    fother.style.background = "none";
                } else {
                    fother.style.background = "red";
                }
            } else {
                fother.style.background = "red";
            }
        });

        fother.innerHTML = "";
        fother.appendChild(inputField);
        inputField.focus();
    }

    // Saturday
    $('#OtherS').click(OtherSat);
    var sother = document.getElementById("OtherS");

    // function OtherSat() {
    //     var additionalHours = prompt("Do you have any additional activities on Saturday? How many hours will it take?");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             sother.innerHTML = combinedHours;
    //             sother.style.background = "none";
    //         } else {
    //             sother.style.background = "red";
    //         }
    //     } else {
    //         sother.style.background = "red";
    //     }
    // }
    function OtherSat() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = sother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    sother.innerHTML = combinedHours;
                    sother.style.background = "none";
                } else {
                    sother.style.background = "red";
                }
            } else {
                sother.style.background = "red";
            }
        });

        sother.innerHTML = "";
        sother.appendChild(inputField);
        inputField.focus();
    }
    // Sunday
    $('#OtherSu').click(OtherSun);
    var suother = document.getElementById("OtherSu");

    // function OtherSun() {
    //     var additionalHours = prompt("Do you have any additional activities on Sunday? How many hours will it take?");

    //     if (!isNaN(additionalHours)) {
    //         var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //         if (!isNaN(totalHours)) {
    //             var combinedHours = totalHours + parseInt(additionalHours);
    //             suother.innerHTML = combinedHours;
    //             suother.style.background = "none";
    //         } else {
    //             suother.style.background = "red";
    //         }
    //     } else {
    //         suother.style.background = "red";
    //     }
    // }
    function OtherSun() {
        var inputField = document.createElement("input");
        inputField.type = "number";
        inputField.value = suother.textContent;
        inputField.style.width = "40px";
        inputField.step = "1"; // Set the step value to 1

        inputField.addEventListener("input", function () {
            var additionalHours = inputField.value;
            if (!isNaN(additionalHours)) {
                var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
                if (!isNaN(totalHours)) {
                    var combinedHours = totalHours + parseInt(additionalHours);
                    suother.innerHTML = combinedHours;
                    suother.style.background = "none";
                } else {
                    suother.style.background = "red";
                }
            } else {
                suother.style.background = "red";
            }
        });

        suother.innerHTML = "";
        suother.appendChild(inputField);
        inputField.focus();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////new    
    // Function to handle the click event on the "Add Activity" button
    // function handleAddActivityClick() {
    //     // Prompt the user for the activity name
    //     const activityName = prompt("Enter the name of the activity:");

    //     if (activityName !== null && activityName.trim() !== '') {
    //         const table = document.querySelector('table');

    //         // Create a new row
    //         const newRow = document.createElement('tr');

    //         // Add the activity name as the title of the row
    //         const titleCell = document.createElement('td');
    //         titleCell.textContent = activityName;
    //         newRow.appendChild(titleCell);

    //         // Add the activity cells for each day of the week
    //         for (let i = 0; i < 7; i++) {
    //             const newCell = document.createElement('td');
    //             newCell.textContent = 'Click to Add Hours';
    //             newCell.id = `activityhours${i + 1}`; // Assign a unique ID to each activity cell
    //             newRow.appendChild(newCell);

    //             // Attach the click event handler to the new cell
    //             newCell.addEventListener('click', handleActivityClick);
    //         }

    //         // Add the delete button cell
    //         const deleteButtonCell = document.createElement('td');
    //         const deleteButton = document.createElement('button');
    //         deleteButton.textContent = 'Delete';
    //         deleteButton.addEventListener('click', deleteActivityRow);
    //         deleteButtonCell.appendChild(deleteButton);
    //         newRow.appendChild(deleteButtonCell);

    //         // Find the total row
    //         const totalRow = table.querySelector('.total-row');

    //         // Insert the new row above the total row
    //         if (totalRow) {
    //             table.insertBefore(newRow, totalRow);
    //         } else {
    //             table.appendChild(newRow);
    //         }

    //         // Calculate and update the total hours left
    //         // updateHoursLeft();
    //     }
    // }

    // // Function to handle the click event on the delete button
    // function deleteActivityRow() {
    //     var confirmation = confirm("Are you sure you want to delete this row?");
    //     if (confirmation) {
    //         var row = this.parentNode.parentNode; // Get the parent row of the delete button
    //         row.parentNode.removeChild(row);
    //     }
    // }


    // // Function to handle the click event on the activity cells
    // function handleActivityClick() {
    //     const hours = prompt("Enter the number of hours:");

    //     if (hours !== null && !isNaN(hours)) {
    //         this.textContent = hours;
    //         // updateHoursLeft();
    //     }
    // }

    // // Add event listener to the "Add Activity" button
    // const addActivityButton = document.querySelector('#addRowButton');
    // addActivityButton.addEventListener('click', handleAddActivityClick);

    // Function to handle the click event on the "Add Activity" button
    function handleAddActivityClick() {
        // Create a new row
        const newRow = document.createElement('tr');

        // Prompt the user for the activity name
        const activityName = prompt("Enter the name of the activity:");

        if (activityName !== null && activityName.trim() !== '') {
            // Add the activity name as the title of the row
            const titleCell = document.createElement('td');
            titleCell.textContent = activityName;
            newRow.appendChild(titleCell);

            // Add the activity cells for each day of the week
            for (let i = 0; i < 7; i++) {
                const newCell = document.createElement('td');
                newCell.textContent = 'Click to Add Hours';
                newCell.id = `activityhours${i + 1}`; // Assign a unique ID to each activity cell
                newCell.addEventListener('click', handleActivityClick);
                newRow.appendChild(newCell);
            }

            // Add the delete button cell
            const deleteButtonCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteActivityRow);
            deleteButtonCell.appendChild(deleteButton);
            newRow.appendChild(deleteButtonCell);

            // Find the total row
            const totalRow = document.querySelector('table .total-row');

            // Insert the new row above the total row
            if (totalRow) {
                totalRow.before(newRow);
            } else {
                const table = document.querySelector('table');
                table.appendChild(newRow);
            }
        }
    }

    // Function to handle the click event on the delete button
    function deleteActivityRow() {
        const confirmation = confirm("Are you sure you want to delete this row?");
        if (confirmation) {
            const row = this.closest('tr');
            row.remove();
        }
    }

    // Function to handle the click event on the activity cells
    function handleActivityClick() {
        const cell = this;
        const currentHours = parseInt(cell.textContent);

        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.value = isNaN(currentHours) ? '' : currentHours;
        inputField.style.width = '40px';
        inputField.step = '1';

        inputField.addEventListener('input', function () {
            const newHours = parseInt(inputField.value);
            cell.textContent = isNaN(newHours) ? 'Click to Add Hours' : newHours;
        });

        cell.textContent = '';
        cell.appendChild(inputField);
        inputField.focus();
    }

    // Add event listener to the "Add Activity" button
    const addActivityButton = document.querySelector('#addRowButton');
    addActivityButton.addEventListener('click', handleAddActivityClick);


    ////////////////////////////////////////////////////////////////////////////////////////////total    
    // hours left in the end

    // Monday
    var LeftM = document.getElementById("LeftM");
    $('#LeftM').mouseenter(LeftMon);
    function LeftMon() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours1 = document.getElementById("activityhours1");
        var activityhours1Value = activityhours1 ? +activityhours1.textContent : 0;
        var monTotal = (parseInt(shm.innerHTML) || 0) + (parseInt(whm.innerHTML) || 0) + (parseInt(mother.innerHTML) || +totalHours || 0) + (parseInt(activityhours1Value) || 0);
        var twofour = 24 - monTotal;
        console.log(monTotal);
        LeftM.innerHTML = twofour;
    }
    // var LeftM = document.getElementById("LeftM");
    // $('#LeftM').mouseenter(LeftMon);

    // function LeftMon() {
    //     var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
    //     var activityhours1 = document.getElementById("activityhours1");
    //     var activityhours1Value = activityhours1 ? +activityhours1.textContent : 0;
    //     var motherValue = parseInt(mother.innerHTML) || totalHours; // Get the value of mother
    //     var monTotal = (parseInt(shm.innerHTML) || 0) + (parseInt(whm.innerHTML) || 0) + motherValue + (parseInt(activityhours1Value) || 0);
    //     var twofour = 24 - monTotal;
    //     console.log(monTotal);
    //     LeftM.innerHTML = twofour;
    // }


    //Tuseday
    var LeftTu = document.getElementById("LeftTu");
    $('#LeftTu').mouseenter(LefTue);

    function LefTue() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours2 = document.getElementById("activityhours2");
        var activityhours2Value = activityhours2 ? +activityhours2.textContent : 0;
        var tueTotal = (parseInt(shtu.innerHTML) || 0) + (parseInt(whtu.innerHTML) || 0) + (parseInt(tuother.innerHTML) || +totalHours || 0) + (parseInt(activityhours2Value) || 0);
        var twofour = 24 - tueTotal;
        console.log(tueTotal);
        LeftTu.innerHTML = twofour;
    }

    //Wednsday
    var LeftW = document.getElementById("LeftW");
    $('#LeftW').mouseenter(LeftWed);
    function LeftWed() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours3 = document.getElementById("activityhours3");
        var activityhours3Value = activityhours3 ? +activityhours3.textContent : 0;
        var wedTotal = (parseInt(shw.innerHTML) || 0) + (parseInt(whw.innerHTML) || 0) + (parseInt(wother.innerHTML) || +totalHours || 0) + (parseInt(activityhours3Value) || 0);
        var twofour = 24 - wedTotal;
        console.log(wedTotal);
        LeftW.innerHTML = twofour;
    }

    //Thursday
    var LeftT = document.getElementById("LeftT");
    $('#LeftT').mouseenter(LeftThu);
    function LeftThu() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours4 = document.getElementById("activityhours4");
        var activityhours4Value = activityhours4 ? +activityhours4.textContent : 0;
        var thuTotal = (parseInt(sht.innerHTML) || 0) + (parseInt(wht.innerHTML) || 0) + (parseInt(tother.innerHTML) || +totalHours || 0) + (parseInt(activityhours4Value) || 0);
        var two_four = 24 - thuTotal;
        console.log(thuTotal);
        LeftT.innerHTML = two_four;
    }

    //Friday
    var LeftF = document.getElementById("LeftF");
    $('#LeftF').mouseenter(LeftFri);
    function LeftFri() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours5 = document.getElementById("activityhours5");
        var activityhour5Value = activityhours5 ? +activityhours5.textContent : 0;
        var friTotal = (parseInt(shf.innerHTML) || 0) + (parseInt(whf.innerHTML) || 0) + (parseInt(fother.innerHTML) || +totalHours || 0) + (parseInt(activityhour5Value) || 0);
        var twofour = 24 - friTotal;
        console.log(friTotal);
        LeftF.innerHTML = twofour;
    }
    //Saturday
    var LeftS = document.getElementById("LeftS");
    $('#LeftS').mouseenter(LeftSat);
    function LeftSat() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours6 = document.getElementById("activityhours6");
        var activityhour6Value = activityhours6 ? +activityhours6.textContent : 0;
        var satTotal = (parseInt(shs.innerHTML) || 0) + (parseInt(whs.innerHTML) || 0) + (parseInt(sother.innerHTML) || +totalHours || 0) + (parseInt(activityhour6Value) || 0);
        var twofour = 24 - satTotal;
        console.log(satTotal);
        LeftS.innerHTML = twofour;
    }
    //Sunday
    var LeftSu = document.getElementById("LeftSu");
    $('#LeftSu').mouseenter(LeftSun);
    function LeftSun() {
        var totalHours = parseInt(document.getElementById("allother").textContent.split("+")[1]);
        var activityhours7 = document.getElementById("activityhours7");
        var activityhour7Value = activityhours7 ? +activityhours7.textContent : 0;
        var sunTotal = (parseInt(shsu.innerHTML) || 0) + (parseInt(whsu.innerHTML) || 0) + (parseInt(suother.innerHTML) || +totalHours || 0) + (parseInt(activityhour7Value) || 0);
        var twofour = 24 - sunTotal;
        console.log(sunTotal);
        LeftSu.innerHTML = twofour;
    }





});
