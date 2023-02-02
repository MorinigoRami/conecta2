// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//FONT SIZE
const fontSizes = document.querySelectorAll('.choose-size span ');
var root = document.querySelector(':root');

//COLORS
const colorPalette = document.querySelectorAll('.choose-color span');

//BACKGROUNDS
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// ------------------SIDEBAR-----------------
//  REMOVER ATRIBUTO ACTIVE PARA LOS ITEMS DEL MENÚ
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
};

menuItems.forEach(item => {
    item.addEventListener('click', (e) =>{
        changeActiveItem()
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
            

        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
});




// ----------------- MESSAGES ----------------
//SEARCHES CHATS
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector ('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
}

// SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage);

// EVENTO DE CLICK PARA RESALTAR MODAL DE MESSAGES CON UNA DURACIÓN DE 2SEGUNDOS 
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
});


//  THEME/DISPLAY CUSTOMIZATION

//OPEN MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//CLOSES MODAL
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

//CLOSE MODAL
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// ---------------------FONTS----------------------


// REMUEVE LA CLASE 'ACTIVE' PARA LOS SPAN DENTRO DE CHOOSE-SIZE
const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

//TAMAÑO DE LETRAS
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');


        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '12px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '14px';
            root.style.setProperty('----sticky-top-left', '2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '18px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-28rem'); 
        }

        //CAMBIAR HTML SEGUN LA FUENTE DESEADA 
        document.querySelector('html').style.fontSize = fontSize;
        
    })
})

//REMOVER ACTIVE CLASS PARA COLORES
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


//CAMBIAR COLORES PRIMARIOS
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
    //REMOVER ACTIVE CLASS PARA COLORES

        changeActiveColorClass();
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')){
            primaryHue = 52;
        }else if (color.classList.contains('color-3')){
            primaryHue = 352;
        }else if (color.classList.contains('color-4')){
            primaryHue = 152;
        }else if (color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// -----------------------BACKGROUNDS--------------------------

 
//THEME BACKGROUND VALUES 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// CHANGES BACKGROUND COLOR (ESTO RESETEA AL BG USANDO LA PROPIEDAD ROOT QUE DECLARA VARIABLES USANDO CSS)
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


bg1.addEventListener('click', () => {
    //add active class (AGREGAR)
    bg1.classList.add('active');
    //remove active class from the others (ELIMINAR CLASE ACTIVE PARA LAS DEMAS)
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    //remove customized changes from local storage (ELIMINA LOS CAMBIOS PERSONALIZADOS Y LOS VUELVE POR DEFECTO)
    window.location.reload()
})


bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class (AGREGAR)
    bg2.classList.add('active');
    //remove active class from the others (ELIMINAR CLASE ACTIVE PARA LAS DEMAS)
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})


bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class (AGREGAR)
    bg3.classList.add('active');
    //remove active class from the others (ELIMINAR CLASE ACTIVE PARA LAS DEMAS)
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})

//END