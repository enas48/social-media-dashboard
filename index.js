function setTheme(themeName){
    localStorage.setItem('theme',themeName);
    document.documentElement.className = themeName;
}
function toggleTheme(){
    if(localStorage.getItem('theme') === 'dark-theme'){
        setTheme('light-theme');
    }else{
        setTheme('dark-theme');
    }
}
//imediatly invoked function to set theme onintial load
(function () {
    if(localStorage.getItem('theme') === 'dark-theme'){
        setTheme('dark-theme');
    }else{
        setTheme('light-theme');
    }
})();