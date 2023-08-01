let vm;
(function () {
    const ColumnLayout = {
        props: {
            options: {
                type: Object,
                default() {
                    return {
                        total: 2
                    }
                }
            }
        },
        name: "animated-layout",
        template: `
            <section v-for="(id,i) in ids" :id=id @click=columnAction($event) :class="{ even: isEven(i), odd:!isEven(i) }" class="column">
                <!-- Standby -->
                <!-- Active -->
                <!-- Inactive -->
            </section>
        `,
        data() {
            return {
                activeColumnId:null
            }
        },
        computed: {
            ids() {
                const lettersAndNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                const stringFormatter = ["toUpperCase()", "toLowerCase()"];

                let ids = new Set(); // holds unique value

                while (ids.size != this.options.total) {
                    let totalLength = 6;
                    let randomId = "";

                    while (totalLength <= 6 && totalLength > 0) {
                        let randomIndex = Math.floor(Math.random() * lettersAndNumbers.length);
                        let randomFormatterIndex = Math.floor(Math.random() * 2);
                        let randomCharacter = lettersAndNumbers[randomIndex];
                        let randomCharacterFormatter = stringFormatter[randomFormatterIndex];

                        randomCharacter = eval(`"${randomCharacter}".${randomCharacterFormatter}`);
                        randomId += randomCharacter;
                        totalLength--;
                    }
                    ids.add("sec-" + randomId);
                }


                return Array.from(ids);
            }
        },
        methods: {
            columnAction(e) {
                const sections = document.getElementsByClassName("column");
                const sectionId = e.target.getAttribute("id");

                if (this.activeColumnId === sectionId)
                {
                    for(let i = 0; i < sections.length; i++){
                        sections[i].style.width = "100%";
                    }
                    this.activeColumnId = "";
                    return; //return if same id is clicked twice
                }
        
                if(!this.activeColumnId || this.activeColumnId != sectionId) this.activeColumnId = sectionId
                                
                for(let i = 0;i<sections.length;i++){
                    if (sections[i].getAttribute("id") != sectionId)
                        sections[i].style.width = "4%";
                    else
                        sections[i].style.width = "100%";
                }                
            },
            isEven(index) {
                return index % 2 === 0;
            }
        }
    }

    vm = Vue.createApp(ColumnLayout).mount("#container");
    
    //js for column clicks
    // class App {
    //     Page = [];

    //     constructor(app = {}) {
    //         if (app.Page) {
    //             this.Page = app;
    //         }
    //     }

    //     Add(pageOptions) {
    //         this.Page.push(new Page(pageOptions));
    //     }
    // }


    // class Page {
    //     Title = "";
    //     Icon = "";
    //     Image = "";
    //     constructor(pageOptions) {
    //         if (this.validatePage(pageOptions)) {

    //         } else {
    //             console.error("Damn!")
    //         }
    //     }
    // }

})()