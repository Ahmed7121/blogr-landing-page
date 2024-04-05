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

    if (company.classList.contains("opacity-half")) {
        company.classList.remove("opacity-half");
        companyArrow.classList.remove("rotate-180");
        companyContent.classList.remove("opacity-full");
        companyContent.classList.remove("open");
    }
    if (connect.classList.contains("opacity-half")) {
        connect.classList.remove("opacity-half");
        connectArrow.classList.remove("rotate-180");
        connectContent.classList.remove("opacity-full");
        connectContent.classList.remove("open");
    }

    productContent.classList.toggle("open");
    setTimeout(() => {
        productContent.classList.toggle("opacity-full");
    }, 100);
});

company.addEventListener("click", function() {
    company.classList.toggle("opacity-half");
    companyArrow.classList.toggle("rotate-180");

    if (product.classList.contains("opacity-half")) {
        product.classList.remove("opacity-half");
        productArrow.classList.remove("rotate-180");
        productContent.classList.remove("opacity-full");
        productContent.classList.remove("open");
    }
    if (connect.classList.contains("opacity-half")) {
        connect.classList.remove("opacity-half");
        connectArrow.classList.remove("rotate-180");
        connectContent.classList.remove("opacity-full");
        connectContent.classList.remove("open");
    }

    companyContent.classList.toggle("open");
    setTimeout(() => {
        companyContent.classList.toggle("opacity-full");
    }, 100);
});

connect.addEventListener("click", function() {
    connect.classList.toggle("opacity-half");
    connectArrow.classList.toggle("rotate-180");

    if (product.classList.contains("opacity-half")) {
        product.classList.remove("opacity-half");
        productArrow.classList.remove("rotate-180");
        productContent.classList.remove("opacity-full");
        productContent.classList.remove("open");
    }
    if (company.classList.contains("opacity-half")) {
        company.classList.remove("opacity-half");
        companyArrow.classList.remove("rotate-180");
        companyContent.classList.remove("opacity-full");
        companyContent.classList.remove("open");
    }

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
    headerProductP.classList.toggle("link-opened");
    productDropdown.classList.toggle("opened-menu");
    headerProductArrow.classList.toggle("rotate-180");

    companyDropdown.classList.remove("opened-menu");
    connectDropdown.classList.remove("opened-menu");

    headerCompanyP.classList.remove("link-opened");
    headerConnectP.classList.remove("link-opened");
});
headerCompanyP.addEventListener("click", function() {
    headerCompanyP.classList.toggle("link-opened");
    companyDropdown.classList.toggle("opened-menu");
    headerCompanyArrow.classList.toggle("rotate-180");

    productDropdown.classList.remove("opened-menu");
    connectDropdown.classList.remove("opened-menu");

    headerProductP.classList.remove("link-opened");
    headerConnectP.classList.remove("link-opened");
});
headerConnectP.addEventListener("click", function() {
    headerConnectP.classList.toggle("link-opened");
    connectDropdown.classList.toggle("opened-menu");
    headerConnectArrow.classList.toggle("rotate-180");

    productDropdown.classList.remove("opened-menu");
    companyDropdown.classList.remove("opened-menu");

    headerProductP.classList.remove("link-opened");
    headerCompanyP.classList.remove("link-opened");
});







window.addEventListener("resize", function() {
    console.log(this.window.innerWidth);
    if (this.window.innerWidth < 992) {
        headerProductP.classList.remove("link-opened");
        headerCompanyP.classList.remove("link-opened");
        headerConnectP.classList.remove("link-opened");

        productDropdown.classList.remove("opened-menu");
        companyDropdown.classList.remove("opened-menu");
        connectDropdown.classList.remove("opened-menu");

        headerProductArrow.classList.remove("rotate-180");
        headerCompanyArrow.classList.remove("rotate-180");
        headerConnectArrow.classList.remove("rotate-180");


    }
    if (this.window.innerWidth > 991) {
        if (content.classList.contains("opened-menu")) {
            hamMenu.click();
            if (productContent.classList.contains("open")) {
                product.click();
            }
            if (companyContent.classList.contains("open")) {
                company.click();
            }
            if (connectContent.classList.contains("open")) {
                connect.click();
            }
        }
    }
    
})