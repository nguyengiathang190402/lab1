import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        render("Home Page");
    },
    "/about": () => {
        render("About Page");
    },
});

router.resolve();

// class TuongPhep {
//     constructor(name, mana) {
//         this.name = name;
//         this.mana = mana;
//     }

//     showInfo() {
//         console.log(`
//             Ten: ${this.name}
//             Mana: ${this.mana}
//         `);
//     }
// }

// const tuong1 = new TuongPhep("natalya", 300);
// console.log(tuong1.name);
// tuong1.showInfo();
//