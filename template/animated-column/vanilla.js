
    // function generateRandomId(debug) {
    //     const lettersAndNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     const stringFormatter = ["toUpperCase()", "toLowerCase()"];
    //     let totalLength = 6;
    //     let randomId = "";

    //     while (totalLength <= 6 && totalLength > 0) {
    //         let randomIndex = Math.floor(Math.random() * lettersAndNumbers.length);
    //         let randomFormatterIndex = Math.floor(Math.random() * 2);
    //         let randomCharacter = lettersAndNumbers[randomIndex];
    //         let randomCharacterFormatter = stringFormatter[randomFormatterIndex];

    //         randomCharacter = eval(`"${randomCharacter}".${randomCharacterFormatter}`);
    //         randomId += randomCharacter;
    //         totalLength--;
    //     }
    //     return randomId;
    // }

    // function buildSection(total){
    //     if(total >= 1 && total <= 12 ){
    //         const sectionContainer = document.getElementById("container");
    //         let uniqueIdStore = new Set();

    //         //fill set
    //         while(uniqueIdStore.size != total){
    //             uniqueIdStore.add(generateRandomId())
    //         }

    //         // convert uniqueIdStore to array
    //         uniqueIdStore = Array.from(uniqueIdStore);

    //         for(let i = 0; i < total; i++ ){
    //             let section = document.createElement("section");
    //             if(i % 2 === 0){
    //                 section.classList.add("even");
    //             }else{
    //                 section.classList.add("odd");
    //             }

    //             section.setAttribute("id", "sec-" + uniqueIdStore[i]);

    //             if(i==0){
    //                 section.style.backgroundImage =`url(${data[0].background})`;
    //                 section.style.backgroundSize = "cover";
    //                 section.style.backgroundRepeat = "no-repeat";
    //             }

    //             sectionContainer.appendChild(section);


    //         }

    //     }else{
    //         console.error("You can only have total of 12 columns. Minimum is 1.")
    //     }
    // }

    //buildSection(4);





    // window.addEventListener('click',function(e){
    //     console.log(e.target, e.target.getAttribute("id"))
    //     const sectionId = e.target.getAttribute("id");
    //     const sections = document.getElementById("container").getElementsByTagName("section");

    //     if (this.lastSection === sectionId)
    //     {
    //         for(let i = 0; i < sections.length; i++){
    //             sections[i].style.width = "100%";
    //         }
    //         this.lastSection = "";
    //         return; //return if same id is clicked twice
    //     }

    //     if(!this.lastSection || this.lastSection != sectionId) this.lastSection = sectionId





    //     if(sectionId.search("sec-") > -1){
    //         for(let i =0;i<sections.length;i++){
    //             if (sections[i].getAttribute("id") != sectionId)
    //                 sections[i].style.width = "4%";
    //             else
    //                 sections[i].style.width = "100%";
    //         }
    //     }
    // });