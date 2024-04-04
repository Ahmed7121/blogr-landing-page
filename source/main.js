let hamMenu = document.querySelector(".ham");
let content = document.querySelector(".content");
let hamIcon = document.querySelector(".ham-icon");
let hamClose = document.querySelector(".ham-close");

let product = document.querySelector(".product");
let productArrow = document.querySelector(".product svg");
let productContent = document.querySelector(".product-content");

let company = document.querySelector(".company");
let companyArrow = document.querySelector(".company svg");
let companyContent = document.querySelector(".company-content");

let connect = document.querySelector(".connect");
let connectArrow = document.querySelector(".connect svg");
let connectContent = document.querySelector(".connect-content");

let headerProductP = document.querySelector(".header-product p"); //###
let headerProductArrow = document.querySelector(".header-product svg");
let productDropdown = document.querySelector(".product-dropdown");

let headerCompanyP = document.querySelector(".header-company p");
let headerCompanyArrow = document.querySelector(".header-company svg");
let companyDropdown = document.querySelector(".company-dropdown");

let headerConnectP = document.querySelector(".header-connect p");
let headerConnectArrow = document.querySelector(".header-connect svg");
let connectDropdown = document.querySelector(".connect-dropdown");


hamMenu.addEventListener("click", function() {
    content.classList.toggle("opened-menu");

    hamIcon.classList.toggle("display-none");
    hamClose.classList.toggle("display-none");

    console.log("toggled");
});

product.addEventListener("click", function() {
    product.classList.toggle("opacity-half");
    productArrow.classList.toggle("rotate-180");

    productContent.classList.toggle("open");
    setTimeout(() => {
        
        productContent.classList.toggle("opacity-full");
    }, 100);
});

company.addEventListener("click", function() {
    company.classList.toggle("opacity-half");
    companyArrow.classList.toggle("rotate-180");

    companyContent.classList.toggle("open");
    setTimeout(() => {
        
        companyContent.classList.toggle("opacity-full");
    }, 100);
});

connect.addEventListener("click", function() {
    connect.classList.toggle("opacity-half");
    connectArrow.classList.toggle("rotate-180");

    connectContent.classList.toggle("open");
    setTimeout(() => {
        
        connectContent.classList.toggle("opacity-full");
    }, 100);
});

hamClose.addEventListener("click", function() {
    if (productContent.classList.contains("open")) {
        product.click();
    }
    if (companyContent.classList.contains("open")) {
        company.click();
    }
    if (connectContent.classList.contains("open")) {
        connect.click();
    }
});

// ###############################################################################################

headerProductP.addEventListener("click", function() {
    productDropdown.classList.toggle("opened-menu");
    headerProductArrow.classList.toggle("rotate-180");

    companyDropdown.classList.remove("opened-menu");
    connectDropdown.classList.remove("opened-menu");

});
headerCompanyP.addEventListener("click", function() {
    companyDropdown.classList.toggle("opened-menu");
    headerCompanyArrow.classList.toggle("rotate-180");

    productDropdown.classList.remove("opened-menu");
    connectDropdown.classList.remove("opened-menu");

});
headerConnectP.addEventListener("click", function() {
    connectDropdown.classList.toggle("opened-menu");
    headerConnectArrow.classList.toggle("rotate-180");

    productDropdown.classList.remove("opened-menu");
    companyDropdown.classList.remove("opened-menu");

});